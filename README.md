# Python by Example

A hands-on introduction to Python using annotated example programs, inspired by [Go by Example](https://gobyexample.com/).

## Features

- 📚 **Comprehensive Examples**: 20 practical Python examples covering core concepts
- 🎨 **Clean Design**: Minimalist interface inspired by Go by Example
- 💡 **Interactive Learning**: Copy code directly to clipboard
- 🚀 **Online Execution**: Run examples instantly in browser playground
- 📱 **Responsive**: Works perfectly on desktop and mobile
- 🔍 **Syntax Highlighting**: Beautiful Python code formatting with Prism.js

## Examples Covered

From basic syntax to advanced concepts:

- Hello World & Basic I/O
- Variables & Constants
- Data Types (Numbers, Strings, Booleans)
- Control Flow (If/Else, Loops)
- Functions & Lambda
- Data Structures (Lists, Dictionaries, Sets)
- Classes & Objects
- Error Handling
- File Operations
- And more...

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Custom CSS (Go by Example inspired)
- **Code Highlighting**: Prism.js
- **State Management**: React Context + useReducer
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd python-by-example

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5000` to view the application.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── example/[slug]/  # Dynamic example pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── CodeBlock.tsx    # Code display with syntax highlighting
│   ├── DynamicHeader.tsx # Header with dynamic titles
│   └── PageTitle.tsx    # Page title state manager
├── contexts/            # React contexts
│   └── AppContext.tsx   # Global application state
├── lib/                 # Utility functions
│   └── data.ts          # Example data and navigation
└── data/               # Static data
    └── examples.json   # All example content
```

## Features in Detail

### Code Examples
Each example includes:
- Complete, runnable Python code
- Detailed explanations
- Expected output
- Copy-to-clipboard functionality
- Direct link to online Python playground

### Navigation
- Clean breadcrumb navigation
- Previous/Next example links
- Direct access to all examples from home

### Dynamic Titles
- Browser tab titles change per example
- Header updates contextually
- SEO-optimized meta descriptions

## Development

### Adding New Examples

1. Add example data to `src/data/examples.json`
2. Include: title, slug, description, code, explanation, output
3. Examples automatically appear in navigation

### Customizing Styles

The design closely follows Go by Example aesthetics:
- Dark theme with carefully chosen colors
- Georgia serif font for readability
- JetBrains Mono for code blocks
- Consistent spacing and typography

## Credits

This project was inspired by and follows the design philosophy of [Go by Example](https://gobyexample.com/) by Mark McGranaghan and Eli Bendersky.

## License

This project is licensed under the Creative Commons Attribution 3.0 License - see the [LICENSE](https://creativecommons.org/licenses/by/3.0/) for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request