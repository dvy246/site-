# Premium Data Science Portfolio

A professional, fully editable portfolio website for Data Science/AI professionals with zero-flicker edit mode and persistent local storage.

## 🚀 Features

- **Zero-Flicker Edit Mode**: Seamless editing experience with no visual glitches
- **Persistent Storage**: All changes automatically saved to localStorage
- **Client-Side Authentication**: Secure admin access using Web Crypto API
- **Local Image Uploads**: Upload and store images as Base64 data URLs
- **Glassmorphism Design**: Modern UI with neon accents and particle effects
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion scroll animations and micro-interactions

## 🛠️ Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **react-tsparticles** for background effects
- **Lucide React** for icons
- **Web Crypto API** for authentication

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd data-science-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Admin Access

1. Click the settings icon (⚙️) in the bottom-right corner
2. Enter the admin password: `admin123`
3. Click "Edit Mode" to start editing content
4. All changes are automatically saved to localStorage

## 📁 Content Structure

The portfolio content is stored in localStorage with the following schema:

```json
{
  "home": {
    "title": "string",
    "subtitle": "string", 
    "description": "string"
  },
  "about": {
    "content": "string",
    "image": "string", // Base64 data URL
    "stats": [
      {
        "label": "string",
        "value": "string"
      }
    ]
  },
  "skills": [
    {
      "id": "number",
      "name": "string",
      "level": "number", // 0-100
      "category": "string"
    }
  ],
  "projects": [
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "image": "string", // Base64 data URL
      "tech": ["string"],
      "github": "string",
      "demo": "string",
      "featured": "boolean"
    }
  ],
  "experience": [
    {
      "id": "number",
      "title": "string",
      "company": "string",
      "period": "string",
      "description": "string",
      "achievements": ["string"]
    }
  ],
  "contact": {
    "email": "string",
    "github": "string",
    "linkedin": "string",
    "twitter": "string",
    "location": "string"
  }
}
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- `primary`: Main background color (#0f0c29)
- `secondary`: Card background color (#4e4376)  
- `accent`: Neon accent color (#00f2fe)
- `accent-purple`: Secondary accent (#a855f7)

### Content
- Edit content directly through the admin interface
- Reset to defaults using the "Reset" button in edit mode
- Export/import content by accessing localStorage in browser dev tools

## 🔒 Security Notes

**Important**: This portfolio uses client-side authentication for demo purposes only. The admin password is hashed using SHA-256, but this provides limited security since the hash is visible in the client code.

**For production use:**
- Implement proper server-side authentication
- Use environment variables for sensitive data
- Add rate limiting and other security measures
- Consider using a proper CMS or database

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: Single column layout
- **Tablet**: Two column layout  
- **Desktop**: Three column layout for skills/projects

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings
4. Your portfolio will be live at `https://your-project.vercel.app`

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Project Structure

```
src/
├── components/          # Reusable components
├── sections/           # Page sections
├── hooks/              # Custom React hooks
├── data/               # Default content
└── styles/             # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the browser console for errors
2. Verify localStorage is enabled
3. Try resetting content to defaults
4. Clear browser cache and localStorage

## 🎯 Roadmap

- [ ] Export/Import content functionality
- [ ] Multiple theme options
- [ ] Blog section integration
- [ ] Contact form backend integration
- [ ] SEO optimization
- [ ] Performance improvements

---

Built with ❤️ for the Data Science community