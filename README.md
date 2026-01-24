# Jenish Bharucha – Personal Portfolio

A modern, responsive personal portfolio website showcasing my work as a **Data Analyst** and **Software Developer** with expertise in **Finance + AI**.

🔗 **Live Site**: [jenishbharucha.com](https://jenishbharucha.com)

---

## ✨ Features

- **Responsive Design** – Fully optimized for desktop, tablet, and mobile
- **Modern UI/UX** – Clean, professional layout with smooth animations
- **Dark/Light Theme Support** – Seamless theme switching via `next-themes`
- **Toast Notifications** – User feedback with Sonner and Radix Toast
- **Performance Optimized** – Built with Vite for fast dev and production builds
- **Accessibility** – Semantic HTML and accessible UI components
- **SEO Optimized** – Meta tags, Open Graph, and Twitter Card support

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) primitives |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router DOM](https://reactrouter.com/) |
| **State/Data** | [TanStack React Query](https://tanstack.com/query/latest) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Testing** | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |

---

## 📁 Project Layout

```
Website-updated-new/
├── public/                     # Static assets
│   ├── *.png / *.jpg           # Project images, profile photo
│   └── Jenish_CS_Resume_2025.pdf
│
├── src/
│   ├── components/             # React components
│   │   ├── ui/                 # 49 shadcn/ui primitives (button, card, dialog, etc.)
│   │   ├── Navbar.tsx          # Top navigation bar
│   │   ├── HeroSection.tsx     # Landing hero with headline & CTAs
│   │   ├── AboutSection.tsx    # Personal intro & bio
│   │   ├── SkillsSection.tsx   # Technical skills grid
│   │   ├── ProjectsSection.tsx # Portfolio project showcase
│   │   ├── ExperienceSection.tsx # Work experience timeline
│   │   ├── EducationSection.tsx  # Academic history
│   │   ├── ContactSection.tsx  # Contact form
│   │   ├── Footer.tsx          # Page footer
│   │   ├── BackToTop.tsx       # Scroll-to-top button
│   │   └── NavLink.tsx         # Reusable navigation link
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile breakpoint detection
│   │   └── use-toast.ts        # Toast notification hook
│   │
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # cn() classname helper
│   │
│   ├── pages/                  # Route pages
│   │   ├── Index.tsx           # Home page (all sections)
│   │   └── NotFound.tsx        # 404 error page
│   │
│   ├── test/                   # Test configuration
│   │   ├── setup.ts            # Vitest DOM setup
│   │   └── example.test.ts     # Example test
│   │
│   ├── App.tsx                 # Root component with routing
│   ├── App.css                 # Global app styles
│   ├── index.css               # Tailwind base + custom CSS
│   ├── main.tsx                # React entry point
│   └── vite-env.d.ts           # Vite type definitions
│
├── index.html                  # HTML template with SEO meta tags
├── package.json                # Dependencies & scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── vite.config.ts              # Vite build configuration
├── vitest.config.ts            # Vitest test configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS config
├── eslint.config.js            # ESLint flat config
├── components.json             # shadcn/ui configuration
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/jenishb17/Website.git
cd Website-updated-new

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

### Testing

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
npm run lint
```

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build with development mode |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Lint code with ESLint |

---

## 📂 Key Components

### Page Sections

| Component | Description |
|-----------|-------------|
| `HeroSection` | Eye-catching landing with tagline, CTAs, and quick stats |
| `AboutSection` | Personal introduction and background |
| `SkillsSection` | Languages, tools, ML, and business skills grid |
| `ProjectsSection` | Featured portfolio projects with links |
| `ExperienceSection` | Work experience timeline |
| `EducationSection` | Academic credentials |
| `ContactSection` | Contact form for inquiries |

### UI Library

The project uses **49 shadcn/ui components** from `src/components/ui/`, including:
- Layout: `card`, `separator`, `tabs`, `accordion`
- Forms: `button`, `input`, `textarea`, `checkbox`, `select`, `form`
- Feedback: `toast`, `sonner`, `alert`, `progress`
- Overlays: `dialog`, `drawer`, `sheet`, `popover`, `tooltip`
- Navigation: `navigation-menu`, `menubar`, `breadcrumb`
- And more...

---

## 🎨 Customization

### Tailwind Theme

Edit `tailwind.config.ts` to customize colors, fonts, animations:

```ts
theme: {
  extend: {
    colors: {
      primary: {...},
      accent: {...},
    },
  },
}
```

### Adding Components

Use shadcn/ui CLI to add new primitives:

```bash
npx shadcn-ui@latest add [component-name]
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Jenish Bharucha**

- GitHub: [@jenishb17](https://github.com/jenishb17)
- LinkedIn: [jenish-bharucha](https://www.linkedin.com/in/jenish-bharucha-9046a4203/)
- Email: bhar034@mylaurier.ca
