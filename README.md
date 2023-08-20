# User Location Management System

This project implements a RESTful API for managing user locations.

## Table of Contents

- [Features](#features)
- [Deployment-Link](#deployment-link)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

## Features

- There will be 2 users (ADMIN, READER).
- ADMIN can perform CRUDE operations like POST, DELETE, PATCH, etc.
- READER can perform only GET operation.
- Create a REST API called create_data which creates a table in the database with the name
'user_location'.
- user_location will have three fields NAME, Latitude, Longitude and excluded.
- user can update the user_location table using another REST API called update_data
- READER can call the get_users/N which returns the nearest N users from the location (0,0).

## Deployment-Link

 Deployed Link for this project, Visit [https://spectacled-third-zephyr.glitch.me/]

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```sh
   git clone <https://github.com/vipulchandan/userlocationproject.git>
   ```

2. Navigate to the project directory:

   ```sh
   cd userlocationproject
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the server:

   ```sh
   npm start
   ```

5. Application runs on `http://localhost:5000`.

## Usage

1. Access the API using endpoints described in the [API Endpoints](#api-endpoints) section.

## API Endpoints

- `POST /create_data`: Create a new user location (ADMIN).
- `PATCH /update_data/:id`: Update user location (ADMIN).
- `GET /get_users/:N`: Get nearest N users (READER).

## Testing

Unit tests can be written using testing frameworks like Mocha and assertion libraries like Chai. Test the API endpoints and functions to ensure proper functionality and error handling.

To run tests:

```sh
npm test
```

## Code Quality

Linting tools like ESLint can be used to maintain code quality and adhere to coding standards. Ensure your code is clean, readable, and follows best practices.

To run linting:

```sh
npm run lint
```

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request.
