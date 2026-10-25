# NOIR Horology — Luxury Watch Store Demo

A responsive bilingual Persian/English luxury watch storefront built with plain HTML, CSS, and JavaScript. No backend or build step required.

## Run locally
1. Extract the folder if it came as a ZIP.
2. Open `index.html` in your browser, or open the folder in VS Code and use the Live Server extension.

## Included interactions
- Responsive desktop and mobile layouts
- Scroll reveal animations with `IntersectionObserver`
- Product category filters and live search
- Wishlist toggles
- Functional demo cart with quantity controls and totals
- Mobile navigation, search panel, toast notifications, back-to-top button
- Newsletter form demo (not connected to an email service)

## Notes
- This is a front-end portfolio demo. Checkout and newsletter are not connected to a backend.
- Product imagery is loaded from Unsplash URLs, and Google Fonts are loaded remotely, so internet access is needed for those assets.
- Prices and products are sample content and should be adjusted before presenting it as a real store.

## v2
- 12 products, generated from the `catalog` object in `script.js` (add a product = add one entry).
- Product art is SVG studio renders (`art.js`). To use real photos, set `image` in `products` and swap the `<img>` src.
- Sorting by price, trust bar, color-graded hero/story photos.
