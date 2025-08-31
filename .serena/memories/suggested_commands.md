# Suggested Commands for Certifun Development

## Development Commands (from package.json)
```bash
npm run dev          # Start development server with Vite
npm run build        # Build for production (TypeScript + Vite build)
npm run lint         # Run ESLint for code linting
npm run preview      # Preview production build locally
```

## Common Development Workflow
```bash
# Start development
npm run dev

# Before committing/completing tasks
npm run lint         # Check for linting issues
npm run build        # Ensure build works (includes TypeScript checking)
```

## Git Commands (Darwin/macOS)
```bash
git status           # Check git status
git add .            # Add all changes
git commit -m "..."  # Commit changes
git branch           # List branches
```

## File Operations (Darwin/macOS)
```bash
ls -la               # List files with details
find . -name "*.tsx" # Find TypeScript React files
grep -r "pattern"    # Search for patterns
```

## Package Management
```bash
npm install          # Install dependencies
npm install package  # Add new dependency
npm update           # Update dependencies
```