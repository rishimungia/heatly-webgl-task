This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and [TailwindCSS](https://tailwindcss.com/).

## Getting Started

First, run the development server:

```bash
npm  run  dev
# or
yarn  dev
# or
pnpm  dev
# or
bun  dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Libraries Used

### Rendering
 - `three` - JavaScript 3D library (WebGL)
 - `@react-three/fiber` - React renderer for three.js
 - `@react-three/drei` - three.js utility components
 - `motion` - JavaScript animation library
 
 ### Data and State
 - `papaparse` - csv parsing library
 - `jotai` - Atom based state management

## Functionality

### Dataset
- By default the app loads the csv data from `/public/data/ECUK_2024_Primary_Energy_tables.csv`. 
- The app can technically work with any csv file provided in a similar format, but I haven't tested that so there might be unforeseen bugs.
- Dataset source: [data.gov.uk](https://www.data.gov.uk/dataset/26afb14b-be9a-4722-916e10655d0edc38/energy-consumption-in-the-uk)

### UI
- **View Options Menu**: Set rendered bar thickness, gap and data scaling.
- **Data Index Menu**: Lists all the columns found in the csv dataset, by default the first few columns are enabled (shown by coloured text, also represents the respective bar hue). Click on the column name to toggle data rendering.
- **Graph:** Scroll to zoom, click and drag to rotate and right-click drag to move around.
- **Bar:** Hover to view key and value, bar scale grows when hovered.

## Live App
The app is deployed on Vercel at: https://heatly-webgl-task.vercel.app/
