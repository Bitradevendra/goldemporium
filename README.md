# Gold Emporium

Gold Emporium is a polished e-commerce storefront for jewelry and premium accessories. It is built as a modern React + TypeScript single-page app with product browsing, category highlights, cart flow, wishlist support, and authentication screens.

## What It Includes

- Elegant landing page with hero, featured categories, special offers, testimonials, and product sections.
- Product listing and product detail pages backed by local product/category data.
- Cart and wishlist state managed through React context providers.
- Login and registration screens ready for future backend integration.
- Reusable UI components for buttons, inputs, product cards, layout, header, and footer.
- Tailwind CSS styling with Vite for fast local development.

## Project Structure

```text
src/
  components/
    home/       Landing-page sections
    layout/     Header and footer shell
    product/    Product card UI
    ui/         Shared controls
  context/      Auth, cart, and wishlist state
  data/         Product and category datasets
  pages/        Home, cart, auth, and product pages
  types/        Shared TypeScript types
```

## How It Works

The app runs fully on the frontend. Product and category data live in `src/data`, while cart, wishlist, and auth-style state are handled through React contexts. The page components compose those pieces into a shopping experience that feels close to a production storefront, while staying easy to customize.

## Run Locally

```bash
npm install
npm run dev
```

For production build:

```bash
npm run build
```

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Context API
