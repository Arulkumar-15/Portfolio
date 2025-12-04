# Lanyard Discord Presence Setup

The Lanyard component has been successfully integrated into your home screen! 🎉

## Current Status

✅ Component created at: `src/components/ui/Lanyard.jsx`
✅ Integrated into: `src/components/sections/Hero.jsx`
✅ Documentation: `src/components/ui/LANYARD_README.md`

## Quick Start

### 1. Get Your Discord User ID

1. Open Discord
2. Go to **User Settings** → **Advanced**
3. Enable **Developer Mode**
4. Right-click your username/avatar anywhere
5. Click **Copy ID**

### 2. Update Your Portfolio Data

Open `src/data/portfolio.js` and find the `personalInfo` section:

```jsx
export const personalInfo = {
  name: "Arul Kumar",
  title: "Mobile Application Developer",
  // ... other fields ...
  discordId: "YOUR_DISCORD_USER_ID", // ← Replace this with YOUR Discord User ID
  // ... rest of the fields ...
};
```

Replace `"YOUR_DISCORD_USER_ID"` with your copied Discord User ID.

**Note:** The component will automatically hide if you leave it as `"YOUR_DISCORD_USER_ID"` or remove the field entirely.

### 3. Test It

```bash
npm start
```

The Lanyard component will now display:
- Your Discord avatar and username
- Your online status (Online/Idle/DND/Offline)
- What you're currently doing (playing games, etc.)
- Your Spotify listening activity (if playing music)

## Features

- 🎮 **Real-time updates** - Automatically syncs with your Discord status
- 🎵 **Spotify integration** - Shows what you're listening to
- 🎨 **Tailwind styled** - Matches your portfolio theme
- 📱 **Responsive** - Works on all screen sizes
- ⚡ **WebSocket powered** - Instant status updates

## Customization

### Change Position

The component is currently at the bottom of your hero section. To move it:

**Option 1: Above stats**
Move the Lanyard code block to before the Stats section in `Hero.jsx`

**Option 2: Sidebar on desktop**
Modify the layout to show it alongside the main content:

```jsx
<div className="flex flex-col lg:flex-row gap-8 items-start">
  <div className="flex-1">
    {/* Your main hero content */}
  </div>
  <Lanyard userId="YOUR_ID" className="lg:max-w-sm" />
</div>
```

### Styling

Add custom Tailwind classes:

```jsx
<Lanyard 
  userId="YOUR_ID"
  className="max-w-md shadow-2xl hover:shadow-purple-500/50 transition-shadow"
/>
```

### Hide on Mobile

```jsx
<Lanyard 
  userId="YOUR_ID"
  className="max-w-md hidden md:block"
/>
```

## Troubleshooting

### Component shows "Loading presence..."
- Check your internet connection
- Verify the Discord User ID is correct
- Make sure you're using your own ID, not the example one

### "Failed to fetch presence data"
- The Lanyard API might be down (rare)
- Your Discord profile might be private
- Check browser console for errors

### No Spotify activity showing
- You need to have Spotify connected to Discord
- Make sure you're actually playing music on Spotify
- Enable "Display Spotify as your status" in Discord settings

## Remove the Component

To remove it, simply delete or comment out this section in `src/components/sections/Hero.jsx`:

```jsx
{/* Discord Presence */}
<motion.div
  variants={itemVariants}
  className="mt-12 sm:mt-16 md:mt-20 flex justify-center px-4"
>
  <Lanyard 
    userId="94490510688792576" 
    className="max-w-md w-full"
  />
</motion.div>
```

## Need Help?

Check the detailed documentation at `src/components/ui/LANYARD_README.md`

Enjoy your real-time Discord presence on your portfolio! 🚀

