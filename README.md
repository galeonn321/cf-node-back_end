# Central Film Backend

This repository contains the backend of the Central Film application. It is built using Node.js, Express, and MongoDB, with bcrypt for password hashing. The backend provides APIs for user authentication, profile management, movie data handling, and interactions such as saving, rating, and commenting on movies.

## Tech Stack

- **Node.js**
- **Express**
- **MongoDB**
- **bcrypt**
- **TMDB API** (for fetching movie data)

## Features

- **User Authentication**: Register and log in users securely.
- **User Profile Management**: Create, update, and delete user profiles.
- **Movie Data Handling**: Fetch and store movie data from the TMDB API.
- **User Interactions**: Allow users to save movies, rate them, and leave comments.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- TMDB API Key

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/Central-Film-Backend.git
    cd Central-Film-Backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=your_port_number
    MONGO_URI=your_mongodb_connection_string
    TMDB_API_KEY=your_tmdb_api_key
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

### User Profile

- **GET /api/users/profile**: Get the profile of the logged-in user.
- **PUT /api/users/profile**: Update the profile of the logged-in user.
- **DELETE /api/users/profile**: Delete the profile of the logged-in user.

### Movies

- **GET /api/movies**: Get a list of movies from the TMDB API.
- **GET /api/movies/:id**: Get details of a specific movie by ID.

### User Interactions

- **POST /api/movies/save**: Save a movie to the user's profile.
- **POST /api/movies/rate**: Rate a movie.
- **POST /api/movies/comment**: Comment on a movie.
- **GET /api/movies/comments/:id**: Get comments for a specific movie by ID.

## Security

- **Password Hashing**: Passwords are hashed using bcrypt before being stored in the database.
- **JWT**: JSON Web Tokens are used for authenticating users and securing endpoints.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under a proprietary license. See the [MIT LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Contact

For any inquiries or feedback, please reach out to [santiagomaruriramos@gmail.com](mailto:santiagomaruriramos@gmail.com).

---

Happy Coding! 🎬📱
