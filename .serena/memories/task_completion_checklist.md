# Task Completion Checklist

## Before Marking Tasks Complete

### 1. Code Quality Checks
```bash
npm run lint         # Must pass - check for linting errors
npm run build        # Must pass - ensures TypeScript compilation works
```

### 2. Functionality Verification
- Test the feature manually in browser (`npm run dev`)
- Verify PDF generation works (if related to certificate functionality)
- Check responsive design if UI changes were made
- Validate Japanese text rendering properly

### 3. File Organization
- Ensure new files are in correct directories
- CSS templates should be in `/format/` directory
- Components should be in `/src/components/`
- Static assets should be in `/public/` or `/src/assets/`

### 4. Git Hygiene
- Review changes with `git diff`
- Ensure no temporary files are added
- Commit message should be descriptive

### 5. Template-Specific Checks (if applicable)
- New templates follow naming convention `template[N].css`
- Templates are properly formatted for A4 size
- Japanese fonts and layout work correctly

### 6. Production Readiness
- Run `npm run preview` to test production build
- Verify all assets load correctly
- Check console for errors

## Critical Requirements
- **Never commit** without running lint and build successfully
- **Always test** certificate generation if PDF functionality is modified
- **Verify** Japanese text displays correctly across different templates