# CalmPal - Your Personal Wellness Companion

A modern Next.js application for mindfulness, meditation, and inner peace.

## Features

- **Guided Meditations**: Various meditation sessions for different needs
- **Breathing Exercises**: Interactive 4-4-4 breathing technique with visual guidance
- **Quick Actions**: Fast access to calming activities
- **Responsive Design**: Beautiful UI that works on all devices
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── MeditationCard.tsx
    ├── BreathingExercise.tsx
    └── QuickActions.tsx
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and effects

## Features Overview

### Breathing Exercise
Interactive breathing guide with:
- Visual breathing circle that scales with breath phases
- 4-4-4 breathing pattern (inhale-hold-exhale)
- Cycle counter and helpful tips
- Calming animations and transitions

### Meditation Cards
Beautiful cards showcasing:
- Different meditation categories (Morning, Stress, Sleep, Focus)
- Duration indicators
- Gradient backgrounds with play buttons
- Hover effects and smooth transitions

### Quick Actions
Fast access buttons for:
- Quick breathing exercises
- Meditation sessions
- Focus mode
- Sleep preparation

## Customization

The app uses a calming color palette with blues and purples. You can customize the colors in `tailwind.config.ts` and the global styles in `src/app/globals.css`.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is open source and available under the MIT License.
