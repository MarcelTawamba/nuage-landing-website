# Website Template Placeholder System

This template uses standardized placeholders that can be easily replaced by AI or automated scripts. All placeholders follow the `{{PLACEHOLDER_NAME}}` format.

## Available Placeholders

### Company Information
- `{{COMPANY_NAME}}` - Company name (e.g., "XYZ")
- `{{COMPANY_DESCRIPTION}}` - Brief company description for meta tags and manifests
- `{{COMPANY_ADDRESS}}` - Full company address (e.g., "2093 Philadelphia Pike #1991, Claymont, DE 19703")
- `{{COMPANY_ADDRESS_COUNTRY}}` - Country code (e.g., "US")
- `{{COMPANY_FOUNDING_DATE}}` - Year company was founded (e.g., "2024")

### URLs and Links
- `{{SITE_URL}}` - Main website URL (e.g., "https://xyz.com")
- `{{SUPPORT_EMAIL}}` - Support email address (e.g., "support@xyz.com")
- `{{SIGN_IN_URL}}` - Sign in/app URL (e.g., "https://app.xyz.com")
- `{{TWITTER_HANDLE}}` - Twitter handle (e.g., "@xyz")
- `{{LINKEDIN_URL}}` - LinkedIn company page URL

### App Information
- `{{APP_DESCRIPTION}}` - Short app description for titles (e.g., "Global Money Account")
- `{{YEAR}}` - Current year for copyright (e.g., "2025")

## Files Containing Placeholders

### Core Files
- `index.html` - Already uses XYZ placeholders in meta tags
- `js/components.js` - Header/footer with company name and copyright
- `terms.html` - Legal document with company references
- `privacy.html` - Privacy policy (if it exists)

### Configuration Files
- `site.webmanifest` - App manifest with company info
- `favicon/site.webmanifest` - Favicon manifest
- `robots.txt` - Sitemap URL reference
- `sitemap.xml` - Site URLs

## How to Use

1. **Manual Replacement**: Use find/replace in your editor to replace placeholders
2. **Script Replacement**: Create a script that reads `info.txt` and replaces placeholders
3. **AI Replacement**: Provide the AI with `info.txt` and ask it to replace all placeholders

## Example AI Prompt

```
Please read the info.txt file and replace all {{PLACEHOLDER_NAME}} values throughout the website template with the corresponding values from info.txt. Make sure to update:
- All HTML files
- All JavaScript files  
- All configuration files (manifests, robots.txt, sitemap.xml)
- Maintain the existing structure and styling
```

## Adding New Placeholders

When adding new placeholders:
1. Use the `{{PLACEHOLDER_NAME}}` format
2. Add the placeholder definition to `info.txt`
3. Update this guide with the new placeholder
4. Use descriptive, uppercase names with underscores