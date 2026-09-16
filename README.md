# AuditFixers Web App

This project started as a side hustle built in spare time to solve a real-world problem and turn it into something useful. It is a frontend application built with Angular.

---

## 🛠️ Tech Stack

- **Angular CLI**: 21.1.4
- **Node.js**: 22.14.0
- **npm**: 11.6.0
- **Build Tooling**: Vite (via Angular Dev Server)
- **Testing**: Vitest

---

## ⚙️ Prerequisites

Make sure you have the following installed:

```bash
node -v   # should be 22.14.0
npm -v    # should be 11.6.0
ng version
```

If Angular CLI is not installed globally:

```bash
npm install -g @angular/cli
```

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd web_app
npm install
```

---

## 🧪 Development Server

Start the local development server:

```bash
ng serve
```

Open your browser at:

```
http://localhost:4200/
```

The app will automatically reload when you make changes.

---

## 🏗️ Code Scaffolding

Generate Angular components, modules, services, etc.:

```bash
ng generate component component-name
```

Shortcut:

```bash
ng g c component-name
```

To see all available schematics:

```bash
ng generate --help
```

---

## 📦 Build

Create a production build:

```bash
ng build
```

Output will be stored in:

```
dist/
```

---

## 🧪 Unit Testing

Run unit tests using Vitest:

```bash
ng test
```

---

## 🔍 End-to-End Testing

Run e2e tests:

```bash
ng e2e
```

> Note: No default e2e framework is included. You may integrate tools like Cypress or Playwright.

---

## 📁 Project Structure

```
src/
 ├── app/              # Main application modules/components
 ├── assets/           # Static assets
 ├── environments/     # Environment configs
 └── index.html        # Entry HTML
```

---

## ⚠️ Notes

- Ensure compatibility between Angular CLI and Node.js version.
- If you encounter Vite-related errors (ESM issues), verify dependency versions or downgrade Vite if necessary.
- Always delete `node_modules` and reinstall if build issues occur:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Resources

- Angular CLI Docs: https://angular.dev/tools/cli
- Node.js Docs: https://nodejs.org/
- npm Docs: https://docs.npmjs.com/

---

## 👨‍💻 Author

Built as a side project and released for users to access.

---
