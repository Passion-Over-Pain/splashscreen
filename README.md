# SplashScreen

The marketing and download site for SplashScreen, a mobile platform helping South African pool owners maintain their pools efficiently while reducing water waste and connecting them with trusted local service providers.

---

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Related](#related)
- [License](#license)

---

## Overview

This repository contains the Next.js website for SplashScreen. It serves as the public-facing landing page covering the product story, features, team, gallery, and APK download. The Android application lives in a separate repository.

The site was built as part of the SplashScreen capstone project by The Ripple Effect.

---

## Technology Stack

| Category   | Technology                | Version |
| ---------- | ------------------------- | ------- |
| Framework  | Next.js                   | 16.2.7  |
| Language   | TypeScript                | 5       |
| UI Library | React                     | 19      |
| Styling    | TailwindCSS               | 4       |
| Animation  | Framer Motion             | 12      |
| Icons      | React Icons               | 5       |
| Utilities  | clsx, tailwind-merge, cva | Latest  |

---

## Project Structure

```
splashscreen/
- app/                  # Next.js app router pages and layout
- components/           # Reusable UI components
- public/               # Static assets (images, APK, OG image)
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
git clone https://github.com/Passion-Over-Pain/splashscreen-site.git
cd splashscreen-site
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

---

## Related

- [SplashScreen Android App](https://github.com/Passion-Over-Pain/SplashScreen) - The core mobile application built with Java and Firebase.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Built with by [The Ripple Effect](https://splashscreen-20z.pages.dev)
