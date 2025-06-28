# Python by Example - Replit Guide

## Overview

This is a full-stack web application for learning Python through interactive examples. The application provides a Korean-language Python learning platform where users can browse categorized examples, view detailed explanations, run code in the browser, and search for specific topics.

## System Architecture

### Frontend Architecture (Client-Only)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Data Storage**: Local JSON files (categories.json, examples.json)
- **Build Tool**: Vite for development and production builds
- **Deployment**: Static site (no server required)

### Data Management
- **Storage**: Local JSON files in client/src/data/
- **Loading**: Direct import of JSON data
- **Search**: Client-side filtering and search
- **Code Execution**: Pyodide for in-browser Python execution

### Project Structure
```
/
├── client/          # React frontend (main application)
│   ├── src/
│   │   ├── data/    # JSON data files
│   │   ├── pages/   # React pages
│   │   ├── components/ # UI components
│   │   └── lib/     # Utilities and data loaders
└── vite.config.ts   # Vite configuration
```

## Key Components

### Database Schema (shared/schema.ts)
- **Categories**: Organized learning topics with Korean names, colors, and ordering
- **Examples**: Individual Python code examples with explanations, code snippets, and navigation links
- **Relationships**: Examples belong to categories with proper foreign key constraints

### Data Layer (client/src/lib/data-loader.ts)
- **Data Files**: JSON files in client/src/data/ directory
- **Categories**: 8 categories covering Python fundamentals to advanced topics
- **Examples**: 22 comprehensive Python examples with explanations
- **Functions**: getCategories, getExamples, searchExamples, etc.
- **Types**: TypeScript interfaces for type safety

### Frontend Features
- **Interactive Code Editor**: Code blocks with syntax highlighting and copy functionality
- **Python Execution**: Browser-based Python execution using Pyodide
- **Search**: Real-time search across examples with Korean support
- **Responsive Design**: Mobile-friendly interface with collapsible navigation
- **Navigation**: Previous/next example navigation within categories

### API Endpoints
- `GET /api/categories` - List all categories
- `GET /api/examples` - List all examples
- `GET /api/categories/:id/examples` - Examples by category
- `GET /api/examples/:slug` - Single example by slug
- `GET /api/search` - Search examples

## Data Flow

1. **Page Load**: React app initializes, queries categories and examples
2. **Navigation**: Users browse by category or use search functionality
3. **Code Execution**: Pyodide loads Python runtime in browser for code execution
4. **State Management**: TanStack Query handles caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for production
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React routing

### UI Components
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe CSS variants

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for server
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Development**: `vite` serves the React app directly
2. **Production**: `vite build` creates optimized static files
3. **Deploy**: Static files can be hosted on any web server or CDN

### Environment Configuration
- **No environment variables required** (client-only application)
- **No database setup needed** (uses local JSON files)
- **No server dependencies** (purely static site)

### Production Setup
- Build creates static HTML, CSS, and JavaScript files
- Can be deployed to Netlify, Vercel, GitHub Pages, or any static host
- Python code execution happens entirely in the browser via Pyodide

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
- June 28, 2025. Added PostgreSQL database integration with Drizzle ORM
- June 28, 2025. Converted to client-only static site with comprehensive Python tutorials
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```