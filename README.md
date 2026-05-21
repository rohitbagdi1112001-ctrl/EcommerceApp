# React E-commerce Application

## E-commerce App

A modern and fully responsive E-commerce web application built using React, TypeScript, Vite, React Router, and Context API.

This project includes product listing, category filtering, sorting, dynamic product detail pages, cart functionality, URL-based state persistence, and end-to-end testing using Cypress.

---

# Tech Stack

- React JS
- TypeScript
- Vite
- React Router DOM
- Context API
- Cypress
- CSS / Inline Styling

---

# API Used

Platzi Fake Store API:

```bash
https://api.escuelajs.co/api/v1
```

---

# Features

## Home Page
- Display products in responsive grid layout
- Product image, title, category, and price
- Dynamic category filtering
- Multiple category selection
- Product sorting
- URL-based filters and sorting
- Shareable filtered URLs
- Refresh-safe filters and sorting

## Product Detail Page
- Dynamic routing using `/product/:id`
- Fetch product details dynamically from API
- Product image, description, and pricing
- Add To Cart functionality

## Cart Functionality
- Add products to cart
- Remove products from cart
- Quantity management
- Total items count
- Total cart value calculation
- Cart persistence using localStorage

## Navigation
- Navigation between Home, Product Detail, and Cart pages
- Back to Home functionality
- Cart item count in navbar

## Additional Features
- Fully mobile responsive UI
- Reusable components
- Accessibility-friendly semantic HTML
- Loading states
- URL query parameter management
- Cypress E2E testing setup

---

## Installation

```bash
npm install
```

## Run

```bash
npm run dev
```

## Test

```bash
npx cypress open
```