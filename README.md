# AI Safety Incident Dashboard

![Dashboard Screenshot](./screenshot.png)

A professional dashboard for tracking and managing AI safety incidents, built with React and TypeScript.

## Features

- View, filter, and sort AI safety incidents
- Report new incidents with validation
- Responsive design with modern UI
- Local state management
- Type-safe implementation

## Technologies Used

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-safety-dashboard.git
   cd ai-safety-dashboard

2.Install dependencies:
bash:
npm install

3.Start the development server:
npm start

4.Open http://localhost:3000 in your browser.

Available Scripts
npm start: Runs the app in development mode

npm test: Launches the test runner

npm run build: Builds the app for production

npm run eject: Ejects from Create React App (not recommended)

Project Structure
src/
├── components/       # React components
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── App.tsx           # Main application component
├── index.tsx         # Application entry point
└── App.css           # Global styles

Design Decisions
State Management:

Used custom hooks for centralized state management

Avoided external state libraries to keep the project lightweight

Type Safety:

Implemented strict TypeScript typing throughout

Created specific types for incidents and severity levels

UI/UX:

Focused on clean, accessible design

Implemented responsive layout with CSS Grid/Flexbox

Added subtle animations for better user experience

Performance:

Memoized filtered/sorted incident lists

Optimized component rendering

Challenges & Solutions
File Corruption Issues:

Problem: Encountered TypeScript errors due to file encoding problems

Solution: Recreated files with proper UTF-8 encoding and added validation

Complex State Logic:

Problem: Needed to manage filtering, sorting, and form state

Solution: Created custom hook (useIncidents) to encapsulate all state logic

Responsive Design:

Problem: Ensuring good UX across all device sizes

Solution: Used responsive units and mobile-first CSS approach

Future Improvements
Add user authentication

Implement persistent storage (localStorage or backend API)

Add charts for incident statistics

Implement dark/light mode toggle

  
