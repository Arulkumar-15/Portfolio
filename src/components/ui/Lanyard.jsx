import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

/**
 * Lanyard Component - Displays Discord presence using Lanyard API
 * @param {string} userId - Discord User ID
 * @param {string} className - Additional CSS classes
 */
const Lanyard = ({ userId = '94490510688792576', className }) => {
  const [presence, setPresence] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPresence = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const data = await response.json();
        
        if (data.success) {
          setPresence(data.data);
        } else {
          setError('Failed to fetch presence data');
        }
      } catch (err) {
        setError('Error connecting to Lanyard API');
        console.error('Lanyard API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPresence();

    // Setup WebSocket for real-time updates
    const ws = new WebSocket('wss://api.lanyard.rest/socket');
    
    ws.onopen = () => {
      ws.send(JSON.stringify({
        op: 2,
        d: {
          subscribe_to_id: userId
        }
      }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.op === 1) {
        // Heartbeat
        setInterval(() => {
          ws.send(JSON.stringify({ op: 3 }));
        }, data.d.heartbeat_interval);
      } else if (data.op === 0 && data.t === 'INIT_STATE') {
        setPresence(data.d);
      } else if (data.op === 0 && data.t === 'PRESENCE_UPDATE') {
        setPresence(data.d);
      }
    };

    return () => {
      ws.close();
    };
  }, [userId]);

  if (loading) {
    return (
      <div className={cn('flex items-center justify-center p-6 bg-gray-900 rounded-lg', className)}>
        <div className="animate-pulse text-gray-400">Loading presence...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn('flex items-center justify-center p-6 bg-gray-900 rounded-lg', className)}>
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  if (!presence) return null;

  const { discord_user, discord_status, activities, spotify } = presence;
  const statusColors = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500'
  };

  return (
    <div className={cn('bg-gray-900 rounded-lg p-6 shadow-xl', className)}>
      {/* User Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=128`}
            alt={discord_user.username}
            className="w-16 h-16 rounded-full"
          />
          <div className={cn(
            'absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-gray-900',
            statusColors[discord_status]
          )} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">
            {discord_user.global_name || discord_user.username}
          </h3>
          <p className="text-gray-400 text-sm">
            {discord_user.username}#{discord_user.discriminator}
          </p>
          <p className="text-gray-500 text-xs capitalize">{discord_status}</p>
        </div>
      </div>

      {/* Spotify Activity */}
      {spotify && (
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span className="text-white font-medium">Listening to Spotify</span>
          </div>
          <div className="flex gap-3">
            <img
              src={spotify.album_art_url}
              alt={spotify.album}
              className="w-16 h-16 rounded"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{spotify.song}</p>
              <p className="text-gray-400 text-sm truncate">{spotify.artist}</p>
              <p className="text-gray-500 text-xs truncate">{spotify.album}</p>
            </div>
          </div>
        </div>
      )}

      {/* Activities */}
      {activities && activities.length > 0 && (
        <div className="space-y-3">
          {activities.map((activity, index) => {
            if (activity.type === 2) return null; // Skip Spotify (already shown above)
            
            return (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  {activity.assets?.large_image && (
                    <img
                      src={
                        activity.assets.large_image.startsWith('mp:external/')
                          ? activity.assets.large_image.replace('mp:external/', 'https://media.discordapp.net/external/')
                          : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`
                      }
                      alt={activity.name}
                      className="w-16 h-16 rounded"
                      title={activity.assets.large_text}
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.name}</p>
                    {activity.details && (
                      <p className="text-gray-400 text-sm">{activity.details}</p>
                    )}
                    {activity.state && (
                      <p className="text-gray-500 text-xs">{activity.state}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Lanyard;

