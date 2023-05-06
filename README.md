# Messaging-App-BE
Backend of a messaging up with JWT Auth

Messaging App Backend
This is the backend for a messaging app that uses JWT for authentication. It is built using Node.js and Express and uses MongoDB as its database.

Technologies Used
Node.js: A JavaScript runtime built on Chrome’s V8 JavaScript engine.
Express: A fast, unopinionated, minimalist web framework for Node.js.
MongoDB: A cross-platform document-oriented database program.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
Bcryptjs: A library for hashing and comparing passwords.
JSON Web Token (JWT): An open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
Features
User registration and login: Users can register for an account and log in using their email and password.
JWT authentication: Once logged in, users receive a JSON Web Token (JWT) that authenticates them for subsequent requests.
CRUD operations for messages: Users can create, read, update, and delete messages.
Getting Started
Clone the repository and navigate to the project directory.
Install dependencies by running npm install.
Create a .env file in the root of the project and add the following variables:
MONGO_URI: The connection string for your MongoDB database.
JWT_SECRET: A secret key for signing JWTs.
Start the server by running npm start.
API Endpoints
Users
GET /user: Fetch all users.
GET /user/:userId: Fetch a user by their ID.
POST /user: Register a new user. The request body should include username, email, and password fields.
POST /user/login: Log in a user. The request body should include email and password fields.
Messages
GET /messages: Fetch all messages.
GET /messages/:messageId: Fetch a message by its ID.
POST /messages: Create a new message. The request body should include a text field.
PUT /messages/:messageId: Update an existing message. The request body should include a text field.
DELETE /messages/:messageId: Delete a message by its ID.