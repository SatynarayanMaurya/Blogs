
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
```
2. **Login**
   **POST** `/login`
   **Request Body**:
```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```


### **Blogs**

1. **create**  
   **POST** `/create`  
   **Request Body**:
  ```json
   {
     "title": "Blog Title",
     "content": "Blog Content"
    }
```



