# Camera World Admin Portal

A React-based Single Page Application (SPA) built as an administrator portal for Camera World, an e-commerce store specialising in professional cameras. The portal allows an admin to view products, add new products, and update product pricing — all connected to a simulated backend using json-server.

---

## Features

- **Landing Page** — Displays store information including the store name, description, and contact number fetched from the backend
- **Products Page** — Lists all cameras in the store inventory with a live search bar to filter products by name
- **Add Product** — A form that allows the admin to add a new camera to the inventory
- **Product Detail** — View full details of a single camera and update its price
- **Client-side Routing** — Navigation between pages without a full page reload using React Router
- **Simulated Backend** — All data is stored and managed using json-server with a db.json file

---

## Tech Stack

- [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/) for client-side routing
- [Material UI (MUI)](https://mui.com/) for styling and UI components
- [json-server](https://github.com/typicode/json-server) as a fake REST API backend

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation bar shown on every page
│   └── ProductCard.jsx    # Card component for displaying a single camera
├── pages/
│   ├── LandingPage.jsx    # Home page with store info
│   ├── ProductsPage.jsx   # All products with search functionality
│   ├── AddProductPage.jsx # Form to add a new product
│   └── ProductDetailPage.jsx # Single product view with price editor
├── hooks/
│   └── useFetch.js        # Custom hook for reusable data fetching
├── App.jsx                # Route definitions
└── main.jsx               # App entry point
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [json-server](https://github.com/typicode/json-server) — install globally with:

```bash
npm install -g json-server
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/camera-world-admin.git
cd camera-world-admin
```

2. Install dependencies:

```bash
npm install
```

---

## Running the App

You will need two terminals running at the same time:

**Terminal 1 — Start the React app:**
```bash
npm run dev
```

**Terminal 2 — Start the json-server backend:**
```bash
json-server --watch db.json --port 3001
```

Then open your browser and go to:
```
http://localhost:5173
```

---

## API Endpoints

The app connects to json-server running on `http://localhost:3001`. The following endpoints are used:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/store_info/1` | Fetch store details |
| GET | `/cameras` | Fetch all cameras |
| GET | `/cameras/:id` | Fetch a single camera |
| POST | `/cameras` | Add a new camera |
| PATCH | `/cameras/:id` | Update a camera's price |

---

## Known Limitations

- The app requires json-server to be running locally — there is no deployed backend
- No user authentication; the portal is open to anyone who accesses it
- Price input does not currently validate that the entered value is a number
- Search only filters by camera name, not by brand or origin

---

## Author

Eddie Njeru