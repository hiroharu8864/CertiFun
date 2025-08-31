# Code Style and Conventions

## TypeScript/React Conventions
- **File Extensions**: `.tsx` for React components, `.ts` for TypeScript files
- **Component Structure**: Functional components with hooks
- **Import Style**: ES6 imports at top of file
- **State Management**: React hooks (useState) for local state
- **Props Typing**: TypeScript interfaces/types for component props

## Naming Conventions
- **Components**: PascalCase (e.g., `CertificateForm`, `CertificatePreview`)
- **Files**: PascalCase for components (e.g., `App.tsx`)
- **Variables**: camelCase (e.g., `certificateData`, `handleFormChange`)
- **CSS Classes**: kebab-case (e.g., `app-header`, `form-section`)

## Project Structure Patterns
- **Components**: Organized in `/src/components/` directory
- **Assets**: Static assets in `/src/assets/`
- **Templates**: CSS templates in `/format/` directory with naming pattern `template[N].css`
- **Styling**: CSS files co-located with components

## Code Organization
- **Default Exports**: Used for main components
- **Type Definitions**: Inline type definitions or TypeScript inference
- **Date Handling**: Japanese locale formatting (`ja-JP`)

## ESLint Configuration
- Uses modern ESLint 9.x with flat config
- React-specific rules enabled
- TypeScript-aware linting