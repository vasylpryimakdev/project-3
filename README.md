# DiaryFlow - Personal Journal Application

A modern full-stack diary/journal application built with React, Node.js, and MongoDB. Users can create, read, update, and delete personal diary entries with rich content including images, locations, and dates.

## 🚀 Live Demo

👉 [https://diary-flow.vercel.app/](https://diary-flow.vercel.app/)

## 🚀 Features

- **User Authentication**: Secure signup and login system
- **Diary Management**: Create, view, edit, and delete diary entries
- **Rich Content**: Support for titles, descriptions, images, and locations
- **Modern UI**: Beautiful Material-UI design with responsive layout
- **State Management**: Redux for efficient state management
- **RESTful API**: Clean and organized backend API

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Material-UI (MUI)** - UI component library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/vasylpryimakdev/diary-flow.git
cd diary-flow
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file with your MongoDB URI
MONGO_URI=your_mongodb_connection_string

# Start the development server
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file if needed (default should work)
REACT_APP_API_URL=http://localhost:5000

# Start the development server
npm start
```

The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
project-3/
├── backend/
│   ├── controllers/     # Route controllers
│   ├── models/          # MongoDB models
│   ├── routing/         # API routes
│   ├── app.js           # Express app setup
│   └── package.json     # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── api-helpers/ # API helper functions
│   │   ├── auth/        # Authentication components
│   │   ├── diaries/     # Diary components
│   │   ├── header/      # Header component
│   │   ├── home/        # Home component
│   │   ├── profile/     # Profile component
│   │   ├── store/       # Redux store
│   │   └── App.jsx      # Main App component
│   └── package.json     # Frontend dependencies
└── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /user/signup` - Register a new user
- `POST /user/login` - User login
- `GET /user/:id` - Get user details

### Diary Posts
- `GET /posts` - Get all diary posts
- `POST /posts` - Create a new diary post
- `GET /posts/:id` - Get a specific diary post
- `PUT /posts/:id` - Update a diary post
- `DELETE /posts/:id` - Delete a diary post

## 📊 Data Models

### User
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, min 6 chars),
  posts: [ObjectId] (references Post)
}
```

### Post
```javascript
{
  title: String (required),
  description: String (required),
  image: String (required),
  location: String (required),
  date: Date (required),
  user: ObjectId (required, references User)
}
```

## 🎨 UI Components

- **Header**: Navigation and user authentication status
- **Home**: Landing page and app introduction
- **Auth**: Login and signup forms
- **Diaries**: List of all diary entries
- **DiaryItem**: Individual diary entry display
- **Add**: Form to create new diary entries
- **DiaryUpdate**: Form to edit existing entries
- **Profile**: User profile and settings

## 🔧 Environment Variables

### Backend (.env)
```
MONGO_URI=your_mongodb_connection_string
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## 🚀 Deployment

### Backend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy - Vercel will automatically build using the `npm run build` script

### Frontend (Vercel/Netlify)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy - Build command: `npm run build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Issues

If you encounter any issues or have suggestions, please open an issue on GitHub.

## 📞 Contact

Created by Vasyl Pryimak - [GitHub](https://github.com/vasylpryimakdev)

---

**Happy Journaling! 📖✨**
