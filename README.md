# 📘 LMS Backend Project – Setup Guide

This project is a basic Learning Management System (LMS) backend built using **Node.js**, **Express.js**, **TypeScript**, and **MongoDB**. It supports CRUD operations for managing user data.

---

## 📌 Prerequisites

Before starting, make sure you have:

- Node.js and npm installed
- MongoDB account (MongoDB Atlas) or local MongoDB installed
- Basic knowledge of using Postman for API testing

---

## 🧩 Project Overview

This backend allows you to:

- Register users
- View all users
- View a user by ID
- Update a user
- Delete a user

User data is stored securely in **MongoDB**, and passwords are hashed for safety.

---

## 🛠️ Step-by-Step Setup

### 1. **Initialize the Project**

- Create a new folder for the project
- Run `npm init -y` to initialize the Node.js project
- Install TypeScript and configure it using `tsconfig.json`

### 2. **Install Required Packages**

Install the following:

- Express (for server)
- Mongoose (for MongoDB connection)
- Bcrypt (for password hashing)
- Dotenv (for environment variables)
- Nodemon / ts-node-dev (for development hot reload)
- Types for TypeScript (`@types/express`, etc.)

### 3. **Set Up Folder Structure**

Organize your project like this:

```
/models      → Mongoose schemas
/routes      → API routes
.env         → Environment variables
server.ts    → Main server file
```

---

## 🌐 MongoDB Connection

### 4. **Create a MongoDB Database**

- Use MongoDB Atlas for an online cluster
- OR use MongoDB locally on `localhost:27017`
- Get the connection string

### 5. **Configure `.env` File**

- Create a `.env` file in the root
- Add the MongoDB connection string like:
  ```
  MONGO_URI=your_connection_string
  ```

- Add `.env` to `.gitignore`

### 6. **Connect to MongoDB**

- In your main server file (`server.ts`), use Mongoose to connect to MongoDB using the connection string

---

## 🔐 Create User Model

### 7. **Define the User Schema**

- Create a schema with fields: name, email, and password
- Use Mongoose to define this in a file inside `/models`

---

## 🔄 Implement API Routes

### 8. **Create API Endpoints**

Create the following routes inside a file in `/routes`:

- `POST /register` → To register a new user (with password hashing)
- `GET /users` → To get all users
- `GET /user/:id` → To get a user by ID
- `PUT /user/:id` → To update a user’s info
- `DELETE /user/:id` → To delete a user

Link these routes to the main server file.

---

## 🚀 Run the Server

### 9. **Start the Server**

- Use `npm run dev` (if using `ts-node-dev`) for development
- Server will start at `http://localhost:3000` (or your specified port)

---

## 🧪 Test the APIs Using Postman

### 10. **Test All Routes**

1. `POST /register` → Provide name, email, password in body
2. `GET /users` → View all users
3. `GET /user/:id` → Replace `:id` with MongoDB user `_id`
4. `PUT /user/:id` → Send updated `name` or `email` in body
5. `DELETE /user/:id` → Deletes a user

Check MongoDB to confirm that the operations reflect there.

---

## ✅ Final Deliverables

Make sure you have completed and can demonstrate the following:

- Working APIs:
  - POST `/register`
  - GET `/users`
  - GET `/user/:id`
  - PUT `/user/:id`
  - DELETE `/user/:id`
- A user schema defined using Mongoose
- Connection to MongoDB (Atlas or local)
- Environment variables stored securely in `.env`
- Passwords hashed using bcrypt

---

## 📝 Notes

- Do not commit the `.env` file to GitHub.
- Make sure the MongoDB URI used is correct and working.
- You can view the database data using MongoDB Compass or the Atlas web interface.
- Handle errors like duplicate emails, user not found, etc., in your routes.

---

## 📎 Optional Extras

If time permits, you can add:

- JWT Authentication for login and session handling
- Input validation using libraries like Joi or express-validator
- Pagination for user listing
- Logging and error reporting

---

## 🙌 Author

**Dimple**  
B.Tech CSE | Deep Learning & Full Stack Enthusiast