# Budget Tracker API

A RESTful API built with Node.js, Express, and MongoDB that allows users to manage their monthly budgets and expenses. Users can view their budgets, create expenses, and get a summary comparing budgets with total expenses.

## Features

- Create and view monthly budgets
- Add and manage categorized expenses
- View monthly budget vs expense summaries
- JWT-based user authentication
- Secure password storage with bcrypt

## Folder Structure

backend/
├── config/ // MongoDB connection
├── controllers/ // Handles requests
├── middlewares/ // Auth middleware
├── models/ // Mongoose schemas
├── routes/ // API endpoints
├── services/ // Business logic
├── node_modules/
.env // Environment variables
app.js // Express app setup
server.js // Server entry point
package.json

## Setup Instructions

1. Install dependencies:
npm install

2. Create a `.env` file.

3. Start the server:
npm start

## API Overview

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – User login
- `POST /api/budgets` – Create a monthly budget
- `GET /api/budgets` – View your budget
- `POST /api/expenses` – Add an expense
- `GET /api/expenses` – View all expenses
- `GET /api/summary/:month` – Get budget vs expense summary for a month

> Note: All budget and expense routes require a valid JWT token.

## Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment configuration

## License

This project is licensed under the MIT License.
