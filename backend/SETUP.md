# Portfolio Backend - Setup Guide

## 📊 MongoDB Collections (4 Total)

Your backend uses **4 MongoDB collections**:

1. **About** - Your personal information
2. **Skills** - Your technical skills by category
3. **Projects** - Your project portfolio
4. **Experience** - Your work experience

## 🚀 Getting Started

### Step 1: Install Dependencies

```bash
cd backend
npm install
```

### Step 2: Make Sure MongoDB is Running

- **Local MongoDB**: `mongod` should be running on `localhost:27017`
- **MongoDB Atlas**: Update `MONGODB_URI` in `.env` with your connection string

### Step 3: Seed the Database

```bash
npm run seed
```

This will populate your database with all your portfolio information extracted from your frontend.

### Step 4: Start the Server

```bash
npm run dev
```

Server will run on `http://localhost:5000`

## 📋 API Endpoints

### About

- `GET /api/about` - Get your personal info
- `POST /api/about` - Create/Update your info

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills

- `GET /api/skills` - Get all skill categories
- `POST /api/skills` - Create new skill category
- `PUT /api/skills/:id` - Update skill category
- `DELETE /api/skills/:id` - Delete skill category

### Experience

- `GET /api/experience` - Get all experience
- `POST /api/experience` - Create new experience
- `PUT /api/experience/:id` - Update experience
- `DELETE /api/experience/:id` - Delete experience

### Contact

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)
- `DELETE /api/contact/:id` - Delete contact submission

## 📝 Your Portfolio Data Included

**Name**: Muhammad Sarim Rehan Shami  
**Title**: Full Stack Developer (MERN Stack) | Electrical Engineer  
**Email**: m.sarimrehanshami@gmail.com  
**Phone**: +923084218922  
**Location**: Lahore, Pakistan

### Skills (4 Categories)

- Programming
- Web Frameworks
- Tools & Software
- Hardware & Embedded

### Projects (6)

1. Automated Solar Panel Cleaning Robot
2. Line Following Robot Car
3. Inverted Pendulum Control
4. Gas/Smoke Detection Device
5. PCB Circuit Switch Board
6. Vets Taxi

### Experience (6 Positions)

1. Descon Engineering - Intern
2. Emerald Solutions Hub - Operations Manager
3. Twin Brothers - Supervisor Sales Department
4. D-Hoppers Pvt Ltd - Project Head
5. Digitech Outstanding Solution - Customer Service Representative
6. Trans Global Service - Customer Sales Representative

## 🔄 Frontend Integration

To fetch data from the backend in your React frontend:

```javascript
// Example: Fetch About Info
const [about, setAbout] = useState(null);

useEffect(() => {
  fetch("http://localhost:5000/api/about")
    .then((res) => res.json())
    .then((data) => setAbout(data))
    .catch((err) => console.error(err));
}, []);
```

## ⚙️ Environment Variables

Update `.env` with your MongoDB connection:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

For MongoDB Atlas:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

---

Your backend is ready! 🎉
