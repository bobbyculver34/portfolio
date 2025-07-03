# My Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS. Showcase your projects, experience, and skills with a clean and customizable design.

## Features

- Responsive design for all devices
- Sections for About, Experience, Projects, Skills, and Contact
- Dark/Light mode toggle
- Animated progress bar
- Modular and reusable React components
- Easy to customize and extend

## Folder Structure

```
my_portfolio/
├── app/                # Next.js app directory (pages, layout, global styles)
├── components/         # Reusable UI and section components
│   ├── sections/       # Page sections (about, contact, experience, etc.)
│   └── ui/             # UI primitives (button, card, dialog, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, logos)
├── styles/             # Global styles
├── package.json        # Project metadata and dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my_portfolio.git
   cd my_portfolio
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed UI components built with Radix UI and Tailwind CSS.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 