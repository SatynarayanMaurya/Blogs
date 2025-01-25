
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

1. **Create Blog**  
   **POST** `/create`  
   **Request Body**:
  ```json
   {
     "title": "Blog Title",
     "content": "Blog Content"
    }
```

2. **Get All Blog**  
   **GET** `/all`  
 

3. **Get Blog by id**  
   **GET** `//byId/:id`  
   For example id = 67927411e69f8d78a64bb72b
 

4. **Update Blog by id**  
   **PUT** `/update/:id`
   For example id = 67927411e69f8d78a64bb72b
   **Request Body**:
  ```json
   {
     "title": "Blog Title",
     "content": "Blog Content"
    }
```

5. **Delete Blog by id**  
   **POST** `//delete/:id`
   For example id = 67927411e69f8d78a64bb72b 
  


