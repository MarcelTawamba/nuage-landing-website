# {{COMPANY_NAME}} Global Money Account Website

A modern, responsive website template for {{COMPANY_NAME}}'s global money account service built with modular HTML sections for easy maintenance and customization.

## 🚀 Quick Start

### Development Server

To test the website locally (required for dynamic section loading):

```bash
# Option 1: Using Node.js/npm
npm run dev

# Option 2: Using Python directly
python3 -m http.server 8000

# Option 3: Alternative npm commands
npm start  # same as npm run dev
npm run serve  # same as npm run dev
```

Then open your browser to: **http://localhost:8000**

> **⚠️ Important:** Don't open `index.html` directly in your browser using `file://` - the dynamic section loading won't work due to CORS restrictions. Always use a local server for testing.

## 📁 Project Structure

```
├── index.html              # Main HTML file with section placeholders
├── sections/               # Modular HTML sections
│   ├── herosection1.html        # Main hero section
│   ├── audiencesection.html     # Target audience section
│   ├── individualsection.html   # Individual features
│   ├── businesssection.html     # Business features
│   ├── darkpromotionsection.html # Security promotion
│   ├── ctasection.html          # Call-to-action section
│   └── faqsection.html          # FAQ section
├── styles/                 # CSS stylesheets
│   └── main.css                 # Custom styles and responsive design
├── img/                    # Images and assets
├── js/                     # JavaScript components
├── favicon/                # Favicon files
├── package.json            # Development scripts
└── README.md              # This file
```

## 🛠️ Development Workflow

### Editing Sections

Each section is now in its own HTML file in the `sections/` folder:

1. **Edit any section** by modifying the corresponding `.html` file
2. **Add new hero variations** by creating `herosection2.html`, `herosection3.html`, etc.
3. **Test changes** by refreshing your browser (server must be running)

### Editing Styles

All custom CSS is organized in the `styles/` folder:

1. **Main styles** are in `styles/main.css` - includes all custom components, responsive design, and animations
2. **Edit styling** by modifying `styles/main.css` directly
3. **Add new styles** by appending to the existing file or creating additional CSS files (remember to link them in `index.html`)

### Adding New Sections

1. Create a new HTML file in the `sections/` folder
2. Add a placeholder div in `index.html`: `<div id="your-section"></div>`
3. Update the JavaScript in `index.html` to load your new section:
   ```javascript
   loadSection('your-section', 'yoursection.html')
   ```

### Switching Hero Sections

To use a different hero section:
1. Create a new file like `sections/herosection2.html`
2. Update the JavaScript loading call to use the new filename

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings:** Leave empty (static site)
3. **Publish directory:** `.` (root)
4. **Deploy!** - Everything will work automatically

The dynamic section loading works perfectly on Netlify and other static hosts.

### Other Static Hosts

This site works on any static hosting service:
- Vercel
- GitHub Pages  
- Cloudflare Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 🎨 Customization

### Hero Section Variations

The modular structure makes it easy to create multiple hero sections:

1. Copy `sections/herosection1.html` to `sections/herosection2.html`
2. Modify the content, styling, or layout
3. Update `index.html` to load the new hero section

### Section Management

- **Reorder sections:** Change the order of `<div>` placeholders in `index.html`
- **Remove sections:** Delete the placeholder div and remove from JavaScript loading
- **Add sections:** Create new `.html` files and add loading logic

## 🔧 Technical Details

- **Framework:** Pure HTML, CSS (Tailwind), and JavaScript
- **Icons:** Lucide Icons
- **Section Loading:** Client-side JavaScript with `fetch()` API
- **Styling:** Tailwind CSS via CDN
- **Compatibility:** All modern browsers, static hosting friendly

## 📝 Notes

- The website uses dynamic section loading for modularity
- All sections maintain their original functionality and styling  
- Interactive features (FAQ, feature displays) work as before
- CORS restrictions require serving from `http://` not `file://`

## 🤝 Contributing

1. Run the local development server
2. Make your changes to the appropriate section files
3. Test thoroughly across different screen sizes
4. Deploy to your staging environment before production

---

**Need help?** Check that you're running the local server and accessing via `http://localhost:8000`, not opening the file directly.