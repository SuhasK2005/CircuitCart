# CircuitCart

CircuitCart is a modern electronics ecommerce frontend built with React, Vite, and Tailwind CSS.

It currently includes a responsive navbar and a visually rich landing page designed for electronic components shopping.

## Live Concept

- Brand: CircuitCart
- Focus: Electronic parts marketplace (ICs, sensors, modules, tools, and components)
- UI style: Clean, modern, and conversion-focused

## Current Features

- Sticky responsive navbar with:
  - Brand identity section
  - Desktop search bar
  - Category navigation (Resistors, Capacitors, ICs, Sensors, Modules, Tools)
  - Account, Wishlist, and Cart action buttons
  - Mobile drawer menu with search + category quick links
- Landing hero section with:
  - Strong headline and supporting copy
  - CTA buttons (Shop Components / View Latest Deals)
  - Product trust stats cards
  - Hero product image and floating offer badges
- Highlight cards for featured electronic parts

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- @tailwindcss/vite
- ESLint 9

## Project Structure

```
frontend/
	public/
	src/
		assets/
			hero.png
		App.jsx
		index.css
		main.jsx
	index.html
	package.json
	vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SuhasK2005/CircuitCart.git
cd CircuitCart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open the local URL shown in terminal (usually http://localhost:5173).

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Tailwind Setup

Tailwind is configured through:

- `@import "tailwindcss";` in [src/index.css](src/index.css)
- `@tailwindcss/vite` plugin in [vite.config.js](vite.config.js)

## Roadmap

- Product listing grid
- Category and price filters
- Product details page
- Cart management and checkout flow
- Authentication (Account/Login)
- Wishlist persistence

## Author

Suhas

## License

This project is currently unlicensed for public use. Add a license file if you plan to open-source it.
