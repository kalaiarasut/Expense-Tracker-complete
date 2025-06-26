# Expense Tracker

A simple full-stack Expense Tracker application built with **React** (frontend) and **Express + MongoDB Atlas** (backend).

## Features

- Add, edit, and delete expenses
- View running balance, total income, and total expenses
- Responsive and clean UI
- Persistent storage with MongoDB Atlas

## Folder Structure
Expense Tracker/
├── client/ # React Frontend (was: Expense Tracker/)
│ ├── public/
│ ├── src/
│ ├── package.json
│ ├── vite.config.js
│ └── ...
├── server/ # Express Backend (was: express/)
│ ├── App.js
│ ├── package.json
│ └── ...

## 1. Clone the Repository

```sh
git clone https://github.com/your-username/expense-tracker.git
cd "Expense Tracker"
2. Setup the Backend
sh
Copy
Edit
cd express
npm install
Update your MongoDB Atlas connection string in App.js if needed.

Make sure your IP is whitelisted in MongoDB Atlas.

Start the backend server:

sh
Copy
Edit
npm start
The backend will run at: http://localhost:3000

3. Setup the Frontend
sh
Copy
Edit
cd "../Expense Tracker"
npm install
npm run dev
The frontend will run at: http://localhost:5173

API Endpoints
Method	Endpoint	Description
GET	/expense	Get all expenses
POST	/expenses	Add a new expense
PUT	/expense/:id	Edit an expense
DELETE	/expense/:id	Delete an expense

Customization
Update MongoDB credentials in express/App.js

Modify styles in client/src/index.css

License
Free to use under MIT License

Enjoy tracking your expenses! 💸
