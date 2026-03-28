# 👥 Employee Management System — Frontend

> A modern, responsive Employee Management System frontend built with React + Vite, enabling HR teams and admins to manage employee records efficiently through a clean, component-driven UI.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [License](#license)

---

## Overview

**Employee Management System** is a single-page web application designed to give HR teams and administrators a centralized interface for managing employee data. Built on React 18 with Vite, it uses Ant Design for enterprise-grade UI components, Tailwind CSS for layout and styling, and Axios for REST API communication with a backend service.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 18 |
| **Build Tool** | Vite 7 |
| **UI Library** | Ant Design 5 |
| **Styling** | Tailwind CSS 4 |
| **Routing** | React Router 7 |
| **HTTP Client** | Axios |
| **Icons** | react-icons 5 |
| **Linting** | ESLint 9 |
| **Formatting** | Prettier |
| **Language** | JavaScript (ES Modules) |

---

## ✨ Features

- 🔐 **Authentication** — Secure login for admin and HR roles
- 👤 **Employee Records** — View, add, edit, and delete employee profiles
- 📱 **Responsive Design** — Fully mobile-friendly layout with Ant Design and Tailwind CSS
- ⚡ **Fast Performance** — Lightning-fast dev server and builds powered by Vite 7

---

## 📁 Project Structure

```
Employee_Management_Frontend/
├── public/               # Static assets (favicon, images)
├── src/                  # Application source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level page components
│   ├── services/         # Axios API service functions
│   ├── context/          # React context / global state
│   ├── utils/            # Helper utilities
│   └── main.jsx          # Application entry point
├── .gitignore
├── .prettierrc           # Prettier formatting config
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML shell (title: "Employee Management System")
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ (LTS recommended)
- **npm** v9+

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/KamatchiKarthi/Employee_Management_Frontend.git
   cd Employee_Management_Frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root (see [Environment Variables](#environment-variables)):

   ```bash
   cp .env.example .env
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173`

---

## 🔐 Environment Variables

Create a `.env` file in the project root with the following:

```env
VITE_API_BASE_URL=`https://employee-backend-ry8m.onrender.com`
```

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Base URL for the backend REST API |

> All Vite environment variables must be prefixed with `VITE_` to be accessible in the browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build the app for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |

---
