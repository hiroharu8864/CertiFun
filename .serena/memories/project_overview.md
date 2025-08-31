# Project Overview: Certifun

## Purpose
Certifun (認定証作成ツール) is a web application for creating digital certificates online with various design templates and PDF download functionality.

## Key Features
- Certificate creation with customizable recipient names and certification titles
- Multiple design templates (13 templates available in format/ directory)
- PDF export functionality for A4 size certificates
- Japanese-focused interface
- Automatic date stamping with current date
- Real-time preview of certificates

## Tech Stack
- **Frontend**: React 19.1.1 + TypeScript + Vite
- **Build Tool**: Vite 7.1.2
- **Styling**: CSS modules/standard CSS
- **PDF Generation**: jsPDF 3.0.2
- **Screenshot**: html2canvas 1.4.1
- **Development**: ESLint for linting, TypeScript for type checking

## Project Structure
- `/src` - React application source code
- `/public` - Static assets (currently has vite.svg favicon)
- `/format` - CSS template files for certificate designs (13 templates)
- `index.html` - Main HTML entry point with current title "Certifun - 認定証作成ツール"