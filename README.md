# AuditFixers Business Website Demo

AuditFixers is a demo business website for an independent ISO 27001 compliance consultancy. The
site is designed to show how a real service business can turn a complex offer into a clear,
conversion-focused web experience.

The demo guides visitors from the value proposition to practical next steps: learning about the
service, reviewing pricing, completing an interactive gap check, or getting in touch. It is built
as a frontend-only Angular application and is ready to customize with real business content,
backend integrations, and production analytics.

## What the Demo Includes

- A responsive homepage focused on ISO 27001 implementation and audit readiness
- A services and company overview page at `/who-we-are`
- A transparent pricing page at `/pricing`
- A contact page at `/contact-us`
- A multi-step ISO 27001 gap check at `/gap-check`, including a summary after submission
- Shared navigation and footer components through the main layout
- Reusable visual assets and icons in `src/assets`

## Tech Stack

- **Angular**: 21.1.x
- **Angular CLI**: 21.1.4
- **Node.js**: 22.14.0 recommended
- **npm**: 11.x recommended
- **Build tooling**: Vite through the Angular development server
- **Styling**: Tailwind CSS 4
- **Icons**: lucide-angular
- **Testing**: Vitest through Angular CLI

## Prerequisites

Install the following before starting:

```bash
node -v   # recommended: 22.14.0
npm -v    # recommended: 11.x
ng version
```

If Angular CLI is not installed globally, install it with:

```bash
npm install -g @angular/cli
```

## Getting Started

Clone the repository, move into the project directory, and install dependencies:

```bash
git clone <your-repo-url>
cd audit-fixers-web-app
npm install
```

## Development Server

Start the local development server:

```bash
npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser. The app automatically
reloads when source files change.

## Available Commands

| Command                                | Purpose                                  |
| -------------------------------------- | ---------------------------------------- |
| `npm start`                            | Start the development server             |
| `npm run build`                        | Create a production build in `dist/`     |
| `npm test`                             | Run the unit test suite with Vitest      |
| `npm run watch`                        | Rebuild continuously in development mode |
| `ng generate component component-name` | Generate an Angular component            |
| `ng generate --help`                   | List available Angular schematics        |

## Project Structure

```text
src/
|-- app/
|   |-- layout/          # Shared navbar, footer, and main layout
|   |-- pages/           # Home, pricing, contact, about, and gap check pages
|   |-- app.routes.ts    # Application routes
|   `-- app.config.ts    # Application configuration
|-- assets/              # Images and icons used by the demo
|-- index.html           # HTML entry point
`-- main.ts              # Angular bootstrap entry point
```

## Build and Test

Create a production build:

```bash
npm run build
```

Run the unit tests:

```bash
npm test
```

No end-to-end framework is included by default. Cypress or Playwright can be added if the demo is
extended with browser-based workflow tests.

## Troubleshooting

- Keep the Node.js and Angular CLI versions compatible with the project dependencies.
- For Vite or ESM-related issues, verify dependency versions before changing the build setup.
- If the dependency installation becomes inconsistent, reinstall from scratch:

  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## Resources

- [Angular CLI documentation](https://angular.dev/tools/cli)
- [Node.js documentation](https://nodejs.org/)
- [npm documentation](https://docs.npmjs.com/)

## About the Project

AuditFixers began as a side project exploring how a small consultancy could present specialist
compliance services with clarity, confidence, and a straightforward customer journey.

---
