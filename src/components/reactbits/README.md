# React Bits Components

This directory contains React Bits components - a collection of animated, interactive React components inspired by the [React Bits](https://reactbits.dev) library.

## Available Components

### 1. SplitText
Animates text by splitting it into individual characters or words with various animation effects.

**Props:**
- `text` (string, required) - The text to animate
- `splitBy` (string, default: 'characters') - Split by 'characters' or 'words'
- `className` (string) - Additional CSS classes
- `delay` (number, default: 0) - Initial delay in seconds
- `duration` (number, default: 0.5) - Animation duration
- `stagger` (number, default: 0.02) - Delay between each character/word
- `animation` (string, default: 'fadeUp') - Animation type: 'fadeUp', 'fade', 'scale', 'slide'

**Example:**
```jsx
import { SplitText } from '../reactbits';

<SplitText 
  text="Hello World"
  splitBy="characters"
  animation="fadeUp"
  stagger={0.02}
  className="text-4xl font-bold"
/>
```

### 2. Typewriter
Creates a typewriter effect for text with optional looping and deletion.

**Props:**
- `text` (string, required) - The text to type
- `speed` (number, default: 100) - Typing speed in milliseconds
- `deleteSpeed` (number, default: 50) - Deletion speed in milliseconds
- `delay` (number, default: 1000) - Delay before starting deletion (if loop is true)
- `loop` (boolean, default: false) - Whether to loop the animation
- `className` (string) - Additional CSS classes
- `onComplete` (function) - Callback when typing completes (if loop is false)

**Example:**
```jsx
import { Typewriter } from '../reactbits';

<Typewriter
  text="Mobile Developer"
  speed={100}
  delay={2000}
  loop={false}
  className="text-2xl"
/>
```

### 3. AnimatedButton
Button component with various animation effects and styles.

**Props:**
- `children` (node, required) - Button content
- `onClick` (function) - Click handler
- `variant` (string, default: 'default') - Button style: 'default', 'gradient', 'glow', 'shimmer'
- `size` (string, default: 'md') - Button size: 'sm', 'md', 'lg'
- `className` (string) - Additional CSS classes
- `disabled` (boolean, default: false) - Disable the button
- `href` (string) - If provided, renders as an anchor tag
- `target` (string) - Target attribute for anchor tag

**Example:**
```jsx
import { AnimatedButton } from '../reactbits';

<AnimatedButton
  href="#contact"
  variant="gradient"
  size="lg"
>
  Get In Touch
</AnimatedButton>
```

### 4. AnimatedCard
Card component with hover effects and animations.

**Props:**
- `children` (node, required) - Card content
- `className` (string) - Additional CSS classes
- `hoverEffect` (string, default: 'lift') - Hover effect: 'lift', 'tilt', 'glow', 'scale'
- `delay` (number, default: 0) - Animation delay in seconds

**Example:**
```jsx
import { AnimatedCard } from '../reactbits';

<AnimatedCard
  hoverEffect="lift"
  delay={0.2}
  className="p-6"
>
  <h3>Card Title</h3>
  <p>Card content</p>
</AnimatedCard>
```

## Usage in Portfolio

These components are already integrated into:
- **Hero Section**: Uses `SplitText` for name animation and `Typewriter` for title
- **About Section**: Uses `SplitText` for section title, `AnimatedCard` for stats and info cards
- **Projects Section**: Uses `AnimatedButton` for action buttons

## Customization

All components are built with Tailwind CSS and can be customized through:
1. Props (as shown above)
2. Additional className props
3. Direct modification of component files in `src/components/reactbits/`

## Adding More Components

To add more React Bits components:
1. Create a new component file in `src/components/reactbits/`
2. Export it from `src/components/reactbits/index.js`
3. Import and use it in your sections

For inspiration and more components, visit [reactbits.dev](https://reactbits.dev)

