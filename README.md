# Let's Listen Project

A React web application for the Let's Listen Project, a community initiative focused on creating safe spaces for listening and sharing stories.

## Features

- **Home** - Mission statement and overview
- **About** - Mission, philosophy, and board members
- **Listening Session** - Information and signup for sessions
- **Mental Health Awareness** - Resources and support information
- **Get Involved** - Volunteer opportunities and contact form
- **Donate** - Support the organization

## Tech Stack

- React 19.1.0
- React Router DOM 7.9.1
- CSS3 with Inter font family
- Custom SVG logo and icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`.

## Project Structure

```
src/
├── components/          # All React components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page with board members
│   ├── Donate.jsx      # Donation page
│   ├── GetInvolved.jsx # Volunteer opportunities
│   ├── ListeningSession.jsx # Session information
│   ├── MentalHealthAwareness.jsx # Mental health resources
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── ...
├── styles/             # All CSS files
│   ├── Home.css
│   ├── About.css
│   └── ...
└── App.js              # Main app with routing
```

## Design

- **Colors**: Indigo (#170566) primary, light blue (#a0c4ff) accents
- **Typography**: Inter font family
- **Responsive**: Mobile-first design with breakpoints
- **Accessibility**: Proper ARIA labels and semantic HTML

## Available Scripts

- `npm start` - Development server
- `npm build` - Production build
- `npm test` - Run tests
- `npm eject` - Eject from Create React App
