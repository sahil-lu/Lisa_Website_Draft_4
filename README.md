# Lisa AI Marketing Website

A modern, minimal marketing website for Lisa AI built with React.js and TailwindCSS.

## Features

- **Modern Design**: Clean, minimal design with purple accent colors
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML, keyboard navigation, and proper ARIA labels
- **Performance**: Optimized with smooth animations and efficient loading
- **Component Architecture**: Built using atomic design principles (atoms, molecules, organisms)

## Color System

- **Background/Base**: Neutral 50 (#fafafa)
- **Primary Text/Headings**: Neutral 950 (#0a0a0a)
- **Accent/Buttons/Highlights**: Purple 600 (#7c3aed)

## Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, confident typography with clear hierarchy
- **Body Text**: Clean, readable text with spacious line-height

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic building blocks (Button, Typography, Icon)
│   ├── molecules/      # Simple component combinations (Navigation, Cards)
│   └── organisms/      # Complex components (Hero, Pillars, Footer)
├── pages/              # Page components
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## Components

### Atoms
- **Button**: Reusable button component with multiple variants
- **Typography**: Consistent text styling component
- **Icon**: SVG icon component with multiple icons

### Molecules
- **Navigation**: Main navigation with mobile menu
- **TopBanner**: Sticky promotional banner
- **ValuePropCard**: Card for displaying value propositions
- **PillarCard**: Card for the three pillars section
- **OutcomeCard**: Card for outcomes section
- **CourseCard**: Card for course library

### Organisms
- **Hero**: Main hero section with headline and CTAs
- **ValueProps**: Grid of value proposition cards
- **Pillars**: Three pillars of Lisa AI
- **CourseLibrary**: Course carousel with scroll functionality
- **Outcomes**: Grid of outcome cards
- **Footer**: Site footer with links and social media

## Sections

1. **Top Banner**: Free AI for HR workshops promotion
2. **Navigation**: Logo, main links, and CTA button
3. **Hero**: Main headline, subheadline, and CTAs
4. **Value Props**: 6 key value propositions in a grid
5. **3 Pillars**: Detailed breakdown of Lisa AI's core offerings
6. **Course Library**: 500+ course showcase with carousel
7. **Outcomes**: 7 key outcomes the platform solves
8. **Footer**: Links, social media, and company information

## Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  'neutral-50': '#fafafa',
  'neutral-950': '#0a0a0a',
  'purple-600': '#7c3aed',
  'purple-700': '#6d28d9',
}
```

### Content
All content is defined in the respective component files. Update the text content directly in the components.

### Styling
The project uses TailwindCSS for styling. Custom styles can be added to `src/index.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Lisa AI.
