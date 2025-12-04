# Lanyard Component

A React component that displays Discord presence using the [Lanyard API](https://github.com/Phineas/lanyard).

## Features

- 🎮 Real-time Discord presence updates via WebSocket
- 🎵 Spotify listening status display
- 🎯 Activity tracking (games, custom statuses, etc.)
- 🔄 Automatic status updates
- 💅 Styled with Tailwind CSS
- 📱 Responsive design

## Usage

```jsx
import { Lanyard } from '@/components/ui';

function MyComponent() {
  return (
    <Lanyard 
      userId="YOUR_DISCORD_USER_ID" 
      className="max-w-md"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `userId` | `string` | `'94490510688792576'` | Discord User ID |
| `className` | `string` | `''` | Additional CSS classes |

## Getting Your Discord User ID

1. Enable Developer Mode in Discord (User Settings > Advanced > Developer Mode)
2. Right-click your username/avatar and click "Copy ID"
3. Use this ID in the component

## How It Works

The component:
1. Fetches initial presence data from the Lanyard REST API
2. Establishes a WebSocket connection for real-time updates
3. Displays user avatar, status, and activities
4. Shows Spotify listening activity if available
5. Updates automatically when your Discord status changes

## Customization

You can customize the appearance by passing additional Tailwind classes:

```jsx
<Lanyard 
  userId="YOUR_ID" 
  className="shadow-2xl hover:scale-105 transition-transform"
/>
```

## Status Colors

- 🟢 Online: Green
- 🟡 Idle: Yellow
- 🔴 Do Not Disturb: Red
- ⚫ Offline: Gray

## Example Integration

```jsx
import React from 'react';
import { Lanyard } from '@/components/ui';

function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">My Discord Presence</h2>
        <Lanyard userId="YOUR_DISCORD_USER_ID" />
      </div>
    </section>
  );
}

export default About;
```

## Requirements

- React 18+
- Tailwind CSS configured
- `cn` utility function from `utils/cn.js`

## Notes

- The Lanyard API is free and doesn't require authentication
- WebSocket connection provides real-time updates
- Component handles loading and error states automatically
- Make sure your Discord profile is visible to the Lanyard bot

## Troubleshooting

**"Failed to fetch presence data"**
- Verify your Discord User ID is correct
- Ensure the Lanyard bot can see your profile
- Check if the Lanyard API is online: https://api.lanyard.rest/v1/users/YOUR_ID

**Loading forever**
- Check your internet connection
- Verify the Lanyard API endpoint is accessible
- Open browser console for detailed error messages

## Credits

- [Lanyard API](https://github.com/Phineas/lanyard) by Phineas
- Component created for shadcn/ui style projects

