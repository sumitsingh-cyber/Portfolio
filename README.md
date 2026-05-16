# 🎨 Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Styled Components. Showcase your projects, skills, and experience with an interactive and visually appealing interface.

**Live Demo:** [https://divyanshu-tiwari.vercel.app](https://divyanshu-tiwari.vercel.app)

---

## ✨ Features

- 🎯 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Optimized with Vercel Analytics and modern React practices
- 🎭 **Smooth Animations** - Beautiful scroll animations powered by `react-animate-on-scroll`
- 🔐 **Contact Form** - Secure form handling with Google reCAPTCHA and Formspree integration
- 🎨 **Styled Components** - CSS-in-JS for component-scoped styling
- 📱 **Particle Effects** - Engaging visual effects with `react-tsparticles`
- ✅ **Type Safe** - Full TypeScript support for better code quality
- 🧪 **Well Tested** - Includes testing setup with React Testing Library

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | UI library |
| **TypeScript** | Type safety |
| **Styled Components** | CSS-in-JS styling |
| **React Router** | Client-side routing |
| **Formspree** | Form backend |
| **Google reCAPTCHA** | Spam protection |
| **Vercel Analytics** | Performance monitoring |
| **React Particles** | Animated backgrounds |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn** (v1.22 or higher)
- **Git**

Check your versions:
```bash
node --version
npm --version
git --version
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/divyanshu-tiwari22/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory (optional, for API keys):

```env
# Google reCAPTCHA
REACT_APP_RECAPTCHA_KEY=your_recaptcha_key_here

# Formspree (configured in code)
# https://formspree.io/
```

---

## 🏃 Running the Project

### Development Mode

Start the development server:

```bash
npm start
```

Or with yarn:
```bash
yarn start
```

The application will open at `http://localhost:3000` and automatically reload when you make changes.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Or with yarn:
```bash
yarn build
```

The build folder contains the optimized production-ready files.

### Testing

Run the test suite:

```bash
npm test
```

Or with yarn:
```bash
yarn test
```

Press `a` to run all tests, or follow the interactive prompts.

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components
│   ├── styles/            # Global and styled components
│   ├── App.tsx            # Main App component
│   ├── App.css            # Global styles
│   └── index.tsx          # React entry point
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm run build` | Build for production |
| `npm test` | Run test suite |
| `npm run eject` | Eject from Create React App (irreversible) |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect it's a React app and deploy it

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The `build` folder contains static files that can be deployed to any static hosting service:
- **GitHub Pages**
- **Netlify**
- **AWS S3 + CloudFront**
- **Firebase Hosting**
- **Heroku**

---

## 📝 Customization

### Update Personal Information

Edit the relevant component files in `src/` to add:
- Your name and bio
- Project descriptions
- Skills and experience
- Social media links
- Contact information

### Styling

Modify styled components in `src/styles/` to customize:
- Color scheme
- Typography
- Animations
- Responsive breakpoints

### Add Google reCAPTCHA

1. Get keys from [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Add public key to `.env` file
3. Integrate in your contact form component

---

## 🧪 Testing

The project includes testing setup with:
- **React Testing Library** - Component testing
- **Jest** - Test runner
- **DOM Testing** - For DOM queries and assertions

Run tests in watch mode:
```bash
npm test -- --watch
```

Generate coverage report:
```bash
npm test -- --coverage
```

---

## 📦 Dependencies

### Core Dependencies
- **react**: ^17.0.2 - UI framework
- **react-dom**: ^17.0.2 - React rendering
- **typescript**: ^4.4.2 - Type safety
- **react-scripts**: ^5.0.1 - Build tooling

### UI & Styling
- **styled-components**: ^5.3.3 - CSS-in-JS
- **react-animate-on-scroll**: ^2.1.5 - Scroll animations
- **react-tsparticles**: ^1.37.5 - Particle effects
- **classnames**: ^2.5.1 - Class name management

### Forms & Validation
- **@formspree/react**: ^2.2.4 - Form backend
- **react-google-recaptcha**: ^2.1.0 - Spam protection
- **validator**: ^13.7.0 - Input validation

### Routing & Navigation
- **react-router-dom**: ^6.2.1 - Client routing
- **react-router-hash-link**: ^2.4.3 - Hash navigation

### Notifications & Analytics
- **react-toastify**: ^8.1.0 - Toast notifications
- **@vercel/analytics**: ^1.4.1 - Performance analytics

---

## 🐛 Troubleshooting

### Issue: Port 3000 already in use

```bash
# On macOS/Linux
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: Dependencies not installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Build fails

```bash
# Clear build cache
rm -rf build/

# Rebuild
npm run build
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use it for your own portfolio!

---

## 📧 Contact

**Author:** Divyanshu Tiwari  
**GitHub:** [@divyanshu-tiwari22](https://github.com/divyanshu-tiwari22)  
**Portfolio:** [https://divyanshu-tiwari.vercel.app](https://divyanshu-tiwari.vercel.app)

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Vercel](https://vercel.com) for hosting
- [Formspree](https://formspree.io) for form backend
- All the amazing open-source libraries used in this project

---

<div align="center">

**Made with ❤️ by Divyanshu Tiwari**

⭐ If you found this useful, please consider starring the repository!

</div>