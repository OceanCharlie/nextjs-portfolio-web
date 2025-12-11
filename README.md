# Next.js Portfolio Web

**Project Context:** Personal Professional Portfolio <br>
**Version:** 1.0 (Next.js App Router & Glassmorphism UI)

---

## Overview

This repository contains the source code for my personal portfolio website, designed to showcase my expertise in **Frontend Engineering** and **Data-Driven Development**.
The project is built with a focus on premium aesthetics, performance, and modern web architecture, utilizing the latest **Next.js 15 App Router** capabilities to deliver a seamless, application-like user experience.

---

## Features

* **Premium UI/UX Design**
  Implements a dark, glassmorphism-inspired aesthetic with sophisticated `backdrop-filter` effects, subtle gradients, and custom animations that create a depth-rich interface.

* **Next.js App Router Architecture**
  Leverages React Server Components (RSC) and the Next.js 15 App Router for optimal performance, improved SEO, and efficient data fetching strategies.

* **Project Case Study Pages**
  Dedicated, statically generated pages for featured projects (Galaxy Entertainment, IT Knowledge Center, SatuSolusi) offering rich content layouts, galleries, and detailed technical breakdowns.

* **Component-Based Architecture**
  Modular and reusable React components organized clearly into `sections`, `layout`, and `ui` primitives for maintainability and scalability.

* **Responsive & Accessible**
  Fully responsive layout ensuring perfect rendering across all devices (Mobile, Tablet, Desktop) with semantic HTML structure for accessibility.

---

## Technology Stack

| Category      | Technology           | Description                                                   |
| ------------- | -------------------- | ------------------------------------------------------------- |
| **Framework** | Next.js 15           | App Router, Server Components, Image Optimization.            |
| **Core**      | React 19             | Component library and state management.                       |
| **Styling**   | Tailwind CSS 4       | Utility-first CSS for rapid and consistent styling.           |
| **Animations**| Framer Motion        | Complex scroll animations and gesture interactions.           |
| **Icons**     | Lucide React         | Consistent and lightweight icon library.                      |
| **Data**      | TypeScript           | Strict type safety for data and component props.              |

---

## Getting Started

### Prerequisites

* Node.js 18.17 or later.
* npm, yarn, or pnpm package manager.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OceanCharlie/nextjs-portfolio-web.git
   cd nextjs-portfolio-web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Project Structure

```
nextjs-portfolio-web/
├── src/
│   ├── app/               # App Router pages and layouts
│   │   ├── projects/      # Individual project case studies
│   │   ├── layout.tsx     # Root layout with dark mode enforcement
│   │   └── page.tsx       # Main landing page
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Hero, Experience, Featured Work
│   │   └── ui/            # Reusable UI primitives (Buttons, Cards)
│   ├── data/              # Centralized content data
│   └── styles/            # Global Tailwind configurations
├── public/                # Static assets (images, fonts)
└── README.md              # Project documentation
```

---

## Development Notes

* **Styling Strategy**: Uses Tailwind CSS with a custom `globals.css` configuration to enforce a dark theme (`#0A0A0A`) and consistent color palette (Blue/Cyan/Purple accents).
* **Asset Management**: Images are optimized using `next/image` with fallback strategies for robust loading.
* **Navigation**: Features a custom mobile navigation drawer with backdrop blur and smooth transitions.

---

## Credits

**Developer:**
Ocean Charlie Gunawan

**Design Inspiration:**
Modern Glassmorphism trends and minimalist dark mode portfolios.