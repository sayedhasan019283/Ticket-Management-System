# Ticket Management System [Live Link](https://ticket-management-system-one.vercel.app/)

## Project Overview
The Ticket Management System is a backend solution designed for managing bus ticketing operations. The system enables users to register, log in, and purchase tickets for buses. Admin users can manage buses and tickets through a robust set of APIs. This project is built using Node.js, Express.js, and MongoDB with Mongoose, following a modular design pattern. TypeScript enhances the codebase for better type safety and maintainability.

## Features
### User Features:
- Register, login, and logout functionalities.
- View available buses and their schedules.
- Purchase tickets for specific buses at desired time slots.

### Admin Features:
- Add, update, and delete bus information.
- Manage tickets, including uploading, updating, and deleting them.

## Technology Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Language:** TypeScript

## Installation and Setup
1. **Clone the repository:**
   ```bash
   git clone <repository-link>
   cd ticket-management-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Run the production build:**
   ```bash
   npm run build
   npm start
   ```

## API Endpoints

### Authentication APIs
- **POST /auth/register** - Register a new user.
- **POST /auth/login** - Log in a user.
- **POST /auth/logout** - Log out a user.

### Admin APIs
- **POST /admin/bus** - Add a new bus.
- **PUT /admin/bus/:id** - Update bus information.
- **DELETE /admin/bus/:id** - Delete a bus.
- **POST /admin/ticket** - Add a new ticket for a specific bus.
- **PUT /admin/ticket/:id** - Update ticket information.
- **DELETE /admin/ticket/:id** - Delete a ticket.

### User APIs
- **GET /buses** - View all available buses.
- **GET /tickets** - View available tickets for specific buses.
- **POST /tickets/purchase** - Purchase a ticket for a specific bus and time.

## Postman Documentation
Access the full API documentation with sample requests and responses on [Postman](#).

## ER Diagram
The entity-relationship diagram outlines the relationships between Users, Buses, and Tickets. Access the diagram [here](#).

## File Structure
```
├── src
│   ├── controllers
│   │   ├── authController.ts
│   │   ├── busController.ts
│   │   ├── ticketController.ts
│   ├── models
│   │   ├── userModel.ts
│   │   ├── busModel.ts
│   │   ├── ticketModel.ts
│   ├── routes
│   │   ├── authRoutes.ts
│   │   ├── adminRoutes.ts
│   │   ├── userRoutes.ts
│   ├── services
│   │   ├── authService.ts
│   │   ├── busService.ts
│   │   ├── ticketService.ts
│   ├── utils
│   │   ├── errorHandler.ts
│   │   ├── jwt.ts
│   ├── app.ts
│   ├── server.ts
├── package.json
├── tsconfig.json
├── .env
```

## Testing
- Ensure all APIs are functional and return appropriate responses.
- Include test cases for critical flows.

## Contribution Guidelines
1. Fork the repository and clone it locally.
2. Create a new branch for your feature/bugfix.
3. Commit your changes with descriptive messages.
4. Push the branch and submit a pull request.

## Live Deployment
Access the live API deployment [here](#).

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

**Note:** Replace placeholders (#) with actual links to Postman documentation, ER diagram, and live deployment once available.
