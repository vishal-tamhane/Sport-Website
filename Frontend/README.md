# Sport Club Website - Frontend

This is the React frontend for the Sport Club Website. This project was created with Vite and uses React, Tailwind CSS for styling.

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or later)
- npm (v7.0.0 or later)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/components/` - Contains all React components
  - `Header.jsx` - Main navigation header
  - `Footer.jsx` - Footer component
  - `HomePage.jsx` - Home page component that combines all sections
  - `home/` - Individual components for the home page
    - `Hero.jsx` - Hero section with video background
    - `About.jsx` - About us section
    - `UpcomingEvents.jsx` - Upcoming events section
    - `Winners.jsx` - Historical winners section
    - `Legacy.jsx` - Legacy statistics section
    - `ContactUs.jsx` - Contact form section

## Features

- Responsive design for all screen sizes
- Video backgrounds
- Contact form with form validation
- Dynamic styling with Tailwind CSS
- Bootstrap integration for additional components

## Asset Management

The project automatically copies assets from the parent project's public directory to the frontend's public directory when running the development server or building for production.

## Notes

This frontend is designed to work with the existing Express.js backend. It maintains the same visual design and functionality as the original EJS templates but implemented in React.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
