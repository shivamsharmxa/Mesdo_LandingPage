# Mesdo Landing Page

A modern, responsive landing page for Mesdo - India's first healthcare-only professional platform. Built with React, Tailwind CSS, and modern web development best practices.

## 🚀 Features

- **Pure React/JavaScript** - No TypeScript complexity, clean and readable code
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Component-Based Architecture** - Reusable, maintainable components
- **Data Abstraction** - Centralized content management
- **Design System** - Consistent styling with design tokens
- **Performance Optimized** - Code splitting and optimized builds

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   └── common/          # Common layout components
├── constants/
│   ├── landingPageData.js  # Content data
│   └── designSystem.js     # Design tokens
├── lib/
│   └── utils.js         # Utility functions
└── screens/
    └── LandingPage/     # Landing page sections
```

## 🏃‍♂️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

The project uses a centralized design system with:

- **Color tokens** - Consistent color palette
- **Typography scale** - Standardized text sizes
- **Spacing system** - Uniform spacing values
- **Component variants** - Reusable component styles

## 📊 Code Quality Improvements

### ✅ What's Been Fixed

1. **Data Abstraction** - All content moved to centralized data files
2. **Design System** - Hardcoded colors replaced with design tokens
3. **Component Reusability** - Created reusable Section and SectionHeader components
4. **TypeScript Removal** - Converted to pure JavaScript for simplicity
5. **Responsive Design** - Mobile-first responsive patterns
6. **Code Organization** - Clear separation of concerns

### 🔧 Architecture Benefits

- **Maintainability** - Easy to update content and styling
- **Scalability** - Component-based architecture supports growth
- **Performance** - Optimized builds with code splitting
- **Developer Experience** - Clean, readable code with linting

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder will contain the optimized production build ready for deployment.

## 📄 License

This project is private and proprietary to Mesdo.
