
# Blog Application Backend

This repository contains the backend for a blog application, enabling users to perform CRUD operations on blog posts. The backend is built with Node.js, Express.js, and MongoDB, and includes user authentication with JSON Web Tokens (JWT).

---

## Features

- **Blog Management**:
  - Create, Read, Update, and Delete blog posts.
  - Fetch all blogs or a specific blog by its ID.
- **Authentication & Authorization**:
  - Signup and login with token-based authentication.
  - Restricted access for creating, updating, and deleting blogs.
  - Public access for viewing blogs.

---

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JSON Web Token (JWT)

---

## API Endpoints

### **Authentication**
1. **Signup**  
   **POST** `/signup`  
   **Request Body**:
   ```json
   {
     "name": "John Doe",
     "email": "john@gmail.com",
     "password": "123456"
   }

   Login
POST /login
Request Body:
json
Copy
Edit
{
  "email": "john@gmail.com",
  "password": "123456"
}
Blog Management
Create Blog
POST /create
Request Body:

json
Copy
Edit
{
  "title": "Blog Title",
  "content": "Blog Content"
}
Get All Blogs
GET /all

Get Blog by ID
GET /byId/:id
Example: /byId/67927411e69f8d78a64bb72b

Update Blog by ID
PUT /update/:id
Request Body:

json
Copy
Edit
{
  "title": "Updated Blog Title",
  "content": "Updated Blog Content"
}
Delete Blog by ID
DELETE /delete/:id
Example: /delete/67927411e69f8d78a64bb72b

Getting Started
Prerequisites
Node.js installed
MongoDB running locally or on a cloud service
Installation
Clone the repository:
bash
Copy
Edit
git clone <repository_url>
Navigate to the project directory:
bash
Copy
Edit
cd <project_name>
Install dependencies:
bash
Copy
Edit
npm install
Set up environment variables:
MONGO_URI: MongoDB connection string
JWT_SECRET: Secret key for token generation
Start the server:
bash
Copy
Edit
npm start

