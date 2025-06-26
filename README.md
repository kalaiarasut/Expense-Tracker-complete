# Expense Tracker

A simple full-stack Expense Tracker application built with **React** (frontend) and **Express + MongoDB Atlas** (backend).

## Features

- Add, edit, and delete expenses
- View running balance, total income, and total expenses
- Responsive and clean UI
- Persistent storage with MongoDB Atlas

## Folder Structure
Expense Tracker/           
├── client/                # React Frontend (was: Expense Tracker/)
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── server/                # Express Backend (was: express/)
    ├── App.js
    ├── package.json
    └── ...

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

__1. Clone the repository__

```sh
git clone https://github.com/your-username/expense-tracker.git
cd "Expense Tracker"

__2. Setup the Backend__
cd express
npm install

Update your MongoDB Atlas connection string in App.js if needed.
Make sure your IP is whitelisted in MongoDB Atlas.
Start the backend server:
npm start
The backend will run on http://localhost:3000.

__3. Setup the Frontend__
cd "../Expense Tracker"
npm install
npm run dev
The frontend will run on http://localhost:5173.

API Endpoints
GET    /expense - Get all expenses
POST   /expenses - Add a new expense
PUT    /expense/:id - Edit an expense
DELETE /expense/:id - Delete an expense
Customization
Update MongoDB credentials in express/App.js as needed.
Update styles in src/index.css.

License
MIT

Enjoy tracking your expenses! ``````


