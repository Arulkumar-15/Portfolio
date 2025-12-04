# Arul Kumar - Portfolio Website

A stunning, interactive 3D portfolio website showcasing the work and skills of Arul Kumar, a Mobile Application Developer from Chennai, India.

## 🚀 Features

- **3D Interactive Elements**: Powered by Three.js and React Three Fiber
- **Smooth Animations**: Using Framer Motion for seamless page transitions
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme**: Modern dark theme with vibrant accent colors
- **Sections**:
  - Hero with 3D floating shapes
  - About with animated statistics
  - Experience timeline with expandable project cards
  - Projects showcase with 3D tilt effects
  - Skills with 3D visualization
  - Contact form with validation

## 🛠️ Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Animations**: Framer Motion
- **Build Tool**: Create React App
- **Additional Libraries**: React Spring, clsx, tailwind-merge

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Arulkumar-15/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/                 # Three.js 3D components
│   │   ├── FloatingShape.jsx
│   │   └── ParticleField.jsx
│   ├── layout/             # Layout components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/           # Page sections
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       └── Contact.jsx
├── data/
│   └── portfolio.js        # Portfolio data
├── hooks/                  # Custom React hooks
│   ├── useScrollAnimation.js
│   └── useMousePosition.js
├── utils/
│   └── cn.js              # Utility functions
├── App.js                 # Main app component
└── index.css              # Global styles
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.js` to update:
- Personal information
- Skills
- Experience
- Projects
- Education
- Certifications

### Modify Colors

Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  purple: { ... },
  dark: { ... }
}
```

### Add New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.js`
3. Update the navigation in `src/components/layout/Navbar.jsx`

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

## 📧 Contact

- **Email**: arulkumar1551990@gmail.com
- **Phone**: +91 7824024171
- **LinkedIn**: [linkedin.com/in/arul-kumar-055b22249/](https://linkedin.com/in/arul-kumar-055b22249/)
- **GitHub**: [github.com/Arulkumar-15](https://github.com/Arulkumar-15)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Three.js and React Three Fiber community
- Framer Motion team
- Tailwind CSS team
- All open-source contributors

---

Made with ❤️ by Arul Kumar
