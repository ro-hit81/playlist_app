# 🎵 Playlist App - Full Stack Music Streaming Platform

[![Vue.js](https://img.shields.io/badge/Vue.js-2.6.11-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vuetify](https://img.shields.io/badge/Vuetify-2.2.11-1976D2?style=for-the-badge&logo=vuetify&logoColor=white)](https://vuetifyjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://sqlite.org/)
[![YouTube](https://img.shields.io/badge/YouTube-API-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://developers.google.com/youtube)

A modern full-stack music streaming application built with Vue.js frontend and Node.js backend, featuring YouTube integration, user authentication, song management, and bookmark functionality. Perfect for music enthusiasts who want to create and manage their personal playlists with integrated YouTube playback.

---

## 🌟 Key Features

### **🎧 Music Streaming**
- **YouTube Integration**: Seamless YouTube video embedding and playback
- **Song Management**: Complete CRUD operations for music library
- **Album Artwork**: Visual album covers and metadata display
- **Music Player**: Integrated YouTube player with responsive controls

### **👤 User Management**
- **User Authentication**: Secure JWT-based login and registration
- **User Profiles**: Personalized user experience with profile management
- **Session Management**: Persistent user sessions across browser visits

### **📚 Content Organization**
- **Smart Search**: Real-time search functionality across songs, artists, and albums
- **Bookmarks System**: Save favorite songs for quick access
- **Play History**: Track recently played songs for easy discovery
- **Genre Classification**: Organize music by genres and albums

### **🎼 Music Creation Tools**
- **Lyrics Editor**: Add and edit song lyrics with formatted display
- **Tab Editor**: Guitar/music tabs integration for musicians
- **Metadata Management**: Comprehensive song information (artist, album, genre)
- **URL Management**: Album artwork and YouTube link management

---

## 🏗️ Technology Stack

### **Frontend Framework**
- **Vue.js 2.6.11**: Progressive JavaScript framework
- **Vuetify 2.2.11**: Material Design component framework
- **Vue Router 3.2.0**: Client-side routing and navigation
- **Vuex 3.4.0**: State management with persistence

### **Backend Infrastructure**
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **SQLite**: Lightweight relational database
- **Sequelize**: Object-Relational Mapping (ORM)

### **Authentication & Security**
- **JWT (JSON Web Tokens)**: Secure authentication
- **bcrypt**: Password hashing and security
- **Cors**: Cross-origin resource sharing
- **Express Validator**: Input validation and sanitization

### **Media Integration**
- **vue-youtube-embed**: YouTube video integration
- **YouTube API**: Video streaming and metadata
- **Axios**: HTTP client for API communication

---

## 📱 Application Structure

```
playlist_app/
├── src/                    # Vue.js Frontend
│   ├── components/         # Vue components
│   │   ├── AddSongs.vue   # Song creation form
│   │   ├── EditSong.vue   # Song editing interface
│   │   ├── Login.vue      # User authentication
│   │   ├── Register.vue   # User registration
│   │   ├── Navbar.vue     # Navigation component
│   │   ├── Songs/         # Song browsing components
│   │   │   └── Songs.vue  # Main song list interface
│   │   ├── ViewSong/      # Song player components
│   │   │   ├── ViewSong.vue    # Main song view
│   │   │   ├── YouTube.vue     # YouTube player
│   │   │   ├── SongMetadata.vue # Song information
│   │   │   ├── Lyrics.vue      # Lyrics display
│   │   │   └── Tab.vue         # Music tabs
│   │   └── Users/         # User management
│   │       └── UserHome.vue    # User dashboard
│   ├── services/          # API communication layer
│   │   ├── Api.js         # Axios configuration
│   │   ├── SongsService.js      # Song CRUD operations
│   │   ├── AuthenticationService.js # Auth API calls
│   │   ├── BookmarksService.js  # Bookmark operations
│   │   └── SongHistoryService.js # History tracking
│   ├── store/             # Vuex state management
│   ├── router/            # Vue Router configuration
│   ├── plugins/           # Vue plugins (Vuetify)
│   └── main.js           # Application entry point
├── server/                # Node.js Backend
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   │   ├── AuthenticationController.js
│   │   │   ├── SongsController.js
│   │   │   ├── BookmarksController.js
│   │   │   └── HistoriesController.js
│   │   ├── models/        # Database models
│   │   │   ├── User.js    # User model
│   │   │   ├── Song.js    # Song model
│   │   │   ├── Bookmark.js # Bookmark model
│   │   │   └── History.js  # History model
│   │   ├── policies/      # Authentication middleware
│   │   ├── config/        # Database and app configuration
│   │   └── routes.js      # API route definitions
│   ├── seed/              # Database seeding
│   │   └── songs.json     # Sample song data
│   ├── playlist.sqlite    # SQLite database
│   └── app.js            # Express server setup
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

---

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

### **Frontend Setup**
```bash
# Clone the repository
git clone <repository-url>
cd playlist_app

# Install frontend dependencies
npm install

# Start development server
npm run serve

# Access application at http://localhost:8080
```

### **Backend Setup**
```bash
# Navigate to server directory
cd server

# Install backend dependencies
npm install

# Start backend server
npm start

# API available at http://localhost:8081
```

### **Database Initialization**
```bash
# The SQLite database will be automatically created
# Seed data is available in server/seed/songs.json
# Database file: server/playlist.sqlite
```

---

## 🔧 Configuration

### **Environment Variables**
```bash
# Server Configuration
PORT=8081                    # Backend server port
DB_NAME=playlist            # Database name
DB_USER=playlist            # Database user
DB_PASS=playlist            # Database password
DIALECT=sqlite              # Database type
HOST=localhost              # Database host
JWT_SECRET=your-secret-key  # JWT signing secret
```

### **API Configuration**
```javascript
// Frontend API configuration (src/services/Api.js)
export default() => {
  return axios.create({
    baseURL: 'http://localhost:8081'
  })
}
```

---

## 🎯 Core Features Implementation

### **1. YouTube Integration**
```vue
<!-- YouTube Player Component -->
<template>
  <youtube
    :video-id="youtubeId"
    :player-width="900"
    :player-height="400"
  />
</template>
```

### **2. Authentication System**
```javascript
// JWT-based authentication
const token = jwt.sign(userPayload, config.authentication.jwtSecret, {
  expiresIn: '1h'
})
```

### **3. Song Management**
```javascript
// RESTful API endpoints
GET    /songs           # Get all songs
POST   /songs           # Create new song
GET    /songs/:id       # Get specific song
PUT    /songs/:id       # Update song
DELETE /songs/:id       # Delete song
```

### **4. Bookmark System**
```javascript
// Bookmark management
GET    /bookmarks       # Get user bookmarks
POST   /bookmarks       # Add bookmark
DELETE /bookmarks/:id   # Remove bookmark
```

---

## 📊 Database Schema

### **Users Table**
```sql
CREATE TABLE Users (
  id INTEGER PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  createdAt DATETIME,
  updatedAt DATETIME
);
```

### **Songs Table**
```sql
CREATE TABLE Songs (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255),
  artist VARCHAR(255),
  genre VARCHAR(255),
  album VARCHAR(255),
  albumImageUrl TEXT,
  youtubeId VARCHAR(255),
  lyrics TEXT,
  tab TEXT,
  createdAt DATETIME,
  updatedAt DATETIME
);
```

### **Bookmarks Table**
```sql
CREATE TABLE Bookmarks (
  id INTEGER PRIMARY KEY,
  SongId INTEGER,
  UserId INTEGER,
  createdAt DATETIME,
  updatedAt DATETIME
);
```

---

## 🎵 Usage Examples

### **Adding a New Song**
1. Navigate to "Add Songs" from the main menu
2. Fill in song metadata (title, artist, genre, album)
3. Add YouTube video ID for playback
4. Include album artwork URL
5. Add lyrics and musical tabs (optional)
6. Submit to save to your library

### **Creating Playlists**
1. Browse the song library
2. Use the search function to find specific tracks
3. Bookmark favorite songs for quick access
4. View your bookmark collection in the user dashboard

### **Playing Music**
1. Click on any song from the library
2. Enjoy integrated YouTube playback
3. View lyrics and tabs while listening
4. Song automatically adds to your play history

---

## 🔒 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Authentication**: Secure token-based auth
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured cross-origin policies
- **SQL Injection Prevention**: Sequelize ORM protection

---

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Vuetify Components**: Material Design principles
- **Responsive Grid**: Flexible layouts for all screen sizes
- **Touch-Friendly**: Mobile gesture support

---

## 🚀 Development Commands

```bash
# Frontend Development
npm run serve          # Start development server
npm run build          # Build for production
npm run lint           # Lint and fix files

# Backend Development
cd server
npm start              # Start Express server
npm run dev           # Start with nodemon (development)
npm run seed          # Seed database with sample data
```

---

## 🔮 Future Enhancements

- **Real-time Collaboration**: Multi-user playlist sharing
- **Advanced Search**: Filters by genre, year, popularity
- **Spotify Integration**: Additional music service support
- **Social Features**: User following and playlist sharing
- **Mobile App**: React Native or Flutter implementation
- **AI Recommendations**: Machine learning-based suggestions

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Developer

**Rohit Khati**
- Full Stack Developer specializing in Vue.js and Node.js
- Focus on music applications and multimedia integration
- Expert in modern web development and database design

---

*Enjoy your music streaming experience! 🎵*
