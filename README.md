# 🎨 Piyush Pandey - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Framer Motion. Features smooth animations, dark/light theme toggle, and a clean, professional design.

## ✨ Features

- 🌓 **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- ✨ **Smooth Animations** - Framer Motion animations throughout the site
- 📱 **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- 🚀 **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **Modern UI/UX** - Clean design with gradient accents and glassmorphism effects
- 📊 **Interactive Components** - Hover effects, progress bars, and dynamic typing animation

## 🛠️ Technologies Used

- **React 18** - Component-based UI library
- **Vite** - Next-generation frontend tooling
- **Framer Motion** - Production-ready motion library
- **React Icons** - Popular icon library
- **Typed.js** - Typing animation effect
- **CSS Variables** - Dynamic theming system

## 📂 Project Structure

```
portfolio-react/
├── public/
│   └── assets/          # Images, PDFs, and other static files
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/         # React Context (Theme)
│   ├── App.jsx          # Main App component
│   ├── App.css          # Global styles
│   ├── index.css        # CSS variables and reset
│   └── main.jsx         # Entry point
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/piyushpandey955/Portfolio_website_.git
cd Portfolio_website_/portfolio-react
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📱 Sections

1. **Hero** - Landing section with dynamic typing animation
2. **About** - Introduction and educational background
3. **Skills** - Technical and professional skills with visual indicators
4. **Projects** - Portfolio of completed projects
5. **Contact** - Multiple ways to get in touch
6. **Footer** - Navigation links and copyright

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root[data-theme='dark'] {
  --primary-color: #8a2be2;
  --gradient: linear-gradient(135deg, #8a2be2, #4b0082);
  /* ... more variables */
}
```

### Content

- Update personal information in component files
- Add/remove projects in `src/components/Projects.jsx`
- Modify skills in `src/components/Skills.jsx`
- Change contact links in `src/components/Contact.jsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Piyush Pandey**
- GitHub: [@piyushpandey955](https://github.com/piyushpandey955)
- LinkedIn: [Piyush Kumar Pandey](https://www.linkedin.com/in/piyush-kumar-pandey-897ba4299/)
- Email: piyush7838732397@gmail.com

---

Made with ❤️ using React & Framer Motion
