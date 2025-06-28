# Python by Example - Replit Guide

## Overview

This is a full-stack web application for learning Python through interactive examples. The application provides a Korean-language Python learning platform where users can browse categorized examples, view detailed explanations, run code in the browser, and search for specific topics.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Storage**: DatabaseStorage implementation using PostgreSQL

### Monorepo Structure
```
/
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and schemas
└── migrations/      # Database migrations
```

## Key Components

### Database Schema (shared/schema.ts)
- **Categories**: Organized learning topics with Korean names, colors, and ordering
- **Examples**: Individual Python code examples with explanations, code snippets, and navigation links
- **Relationships**: Examples belong to categories with proper foreign key constraints

### Storage Layer (server/storage.ts)
- **Interface**: `IStorage` defines all data operations
- **Implementation**: `DatabaseStorage` uses PostgreSQL via Drizzle ORM
- **Features**: Category management, example retrieval, search functionality
- **Database**: Persistent PostgreSQL storage with seeded sample data

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
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations run via `drizzle-kit push`

### Environment Configuration
- **DATABASE_URL**: Required PostgreSQL connection string
- **NODE_ENV**: Environment detection (development/production)
- **REPL_ID**: Replit-specific environment detection

### Production Setup
- Server serves static files from `dist/public`
- API routes handle dynamic content
- Database connection via Neon serverless PostgreSQL

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
- June 28, 2025. Added PostgreSQL database integration with Drizzle ORM
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```