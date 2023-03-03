# Pina Test

Slicing Pina Web

# Folder Structure

```bash
.
├── components/
│   ├── common
│   ├── layout
│   └── pages
└── pages
```

I use an intuitive and clean separation of concern between pages and components here.

`components` folder contains reusable component. It divide into 3 section, `common` for agnostic type element, `layout` for composing layout in a page and `pages` which a custom component specific for certain pages.

whereas `pages` folder should only contains dumb component served from `components/pages` folder, async activity such as fetching API and any state that live in a specific page.

## Tech Stack

[Next.js](https://nextjs.org/) for main stack, [Tailwind](https://tailwindcss.com/) for styling and [Radix UI](https://www.radix-ui.com/) for headless UI component
