# Furniture E-Commerce Application

A complete, full-stack e-commerce application built with React, Vite, Express, and SQLite.

## Project Architecture
- **Frontend**: React (Vite), Tailwind CSS, React Router, Context API (Auth, Cart), React Toastify.
- **Backend**: Node.js, Express, SQLite, JWT Authentication, bcrypt password hashing.

## Key Features
- **User Authentication**: Register, Login, and JWT-based session management.
- **Product Catalog**: Browse products with categories and search functionality.
- **Shopping Cart**: Add/remove items, update quantities, calculate totals, and view cart summary.
- **Checkout Process**: Mock checkout flow storing order history in the database.
- **User Profile**: View account details and past order history (including specific items purchased).
- **Responsive UI**: Polished, responsive design using Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation & Setup

1. **Install dependencies:**
   From the root directory, run: `npm install` and `npm install --prefix backend`

2. **Environment Configuration:**
   Create a `.env` file in the `backend` folder and add a secure secret: `JWT_SECRET=your_super_secret_key_here`
   Create a `.env` file in the root folder for the frontend: `VITE_API_URL=http://localhost:5000`

3. **Initialize Database and Start App:**
   The backend comes with a script to seed initial mock products.
   To start both the frontend (Vite) and backend (Express) concurrently run: `npm run dev &`
   - Frontend runs at: http://localhost:5173
   - Backend API runs at: http://localhost:5000

### Testing
- **Backend Tests:** Built with Vitest and Supertest. run `npx vitest run`
- **Linting:** run `npm run lint`
- **Production Build:** run `npm run build`

## Development Notes
- The database is a local SQLite file (`ecommerce.db`). To reset it, simply delete the file and restart the backend.
