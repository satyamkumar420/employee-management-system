# Employee Management System 🏢

A modern, full-stack Employee Management System built with Next.js 15+, React 19+, and TypeScript. This application provides a complete CRUD interface for managing employee data with a clean, responsive UI and RESTful API backend.

## ✨ Features

- **📋 Complete Employee Management**: Add, view, edit, and delete employee records
- **🔍 Real-time Search**: Filter employees by name with instant search
- **🎨 Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **⚡ Fast Performance**: Built with Next.js 15 and React 19 for optimal performance
- **🔒 Type Safety**: Full TypeScript implementation for better development experience
- **📱 Responsive Design**: Works seamlessly across desktop and mobile devices
- **🗄️ SQLite Database**: Lightweight, file-based database with better-sqlite3

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4.0
- **Database**: SQLite with better-sqlite3
- **API**: Next.js API Routes (RESTful)
- **Development**: ESLint, PostCSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd employee-management-system
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action!

## 📊 Database Schema

### Employees Table

| Column     | Type    | Description                 |
| ---------- | ------- | --------------------------- |
| `id`       | INTEGER | Primary key, auto-increment |
| `name`     | TEXT    | Employee full name          |
| `email`    | TEXT    | Employee email address      |
| `position` | TEXT    | Employee job position/role  |

```sql
CREATE TABLE IF NOT EXISTS employees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  position TEXT
);
```

## 🔌 API Documentation

### Base URL

```
http://localhost:3000/api
```

### Endpoints

#### Get All Employees

- **GET** `/api/employees`
- **Description**: Retrieve all employee records
- **Response**: Array of employee objects

#### Get Employee by ID

- **GET** `/api/employees/[id]`
- **Description**: Retrieve a specific employee by ID
- **Parameters**: `id` (number) - Employee ID
- **Response**: Single employee object

#### Create Employee

- **POST** `/api/employees`
- **Description**: Create a new employee record
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@company.com",
    "position": "Software Engineer"
  }
  ```
- **Response**: Created employee object with generated ID

#### Update Employee

- **PUT** `/api/employees/[id]`
- **Description**: Update an existing employee record
- **Parameters**: `id` (number) - Employee ID
- **Body**:
  ```json
  {
    "name": "John Doe Updated",
    "email": "john.doe.updated@company.com",
    "position": "Senior Software Engineer"
  }
  ```
- **Response**: Updated employee object

#### Delete Employee

- **DELETE** `/api/employees/[id]`
- **Description**: Delete an employee record
- **Parameters**: `id` (number) - Employee ID
- **Response**: Success message

## 🎯 Usage Guide

### Managing Employees

1. **View Employees**: All employees are displayed in a table format on the main page
2. **Add Employee**: Click the "Add Employee" button to open the creation modal
3. **Edit Employee**: Click the "Edit" button next to any employee to modify their details
4. **Delete Employee**: Click the "Delete" button to remove an employee
5. **Search Employees**: Use the search bar to filter employees by name in real-time

### User Interface

- **Responsive Design**: Works on all screen sizes
- **Modal Forms**: Clean, focused forms for adding and editing employees
- **Search Functionality**: Instant search results as you type
- **Hover Effects**: Interactive buttons with smooth transitions
- **Loading States**: Visual feedback during API operations

## 📁 Project Structure

```
assignments-3/
├── src/
│   ├── app/
│   │   ├── api/employees/           # API routes
│   │   │   ├── route.ts            # GET, POST /api/employees
│   │   │   └── [id]/route.ts       # GET, PUT, DELETE /api/employees/[id]
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Main page component
│   ├── components/                 # React components
│   │   ├── AddEmployee.tsx         # Add employee modal
│   │   ├── EditEmployee.tsx        # Edit employee modal
│   │   ├── EmployeeForm.tsx        # Reusable form component
│   │   └── Modal.tsx               # Modal wrapper component
│   ├── hooks/
│   │   └── useEmployeeForm.ts      # Custom hook for form logic
│   ├── lib/
│   │   └── db.ts                   # Database configuration
│   └── types/
│       └── index.ts                # TypeScript type definitions
├── employees.db                    # SQLite database file
├── package.json                    # Dependencies and scripts
└── README.md                       # Project documentation
```

## 🧪 Development Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🌟 Key Components

### Frontend Components

- **AddEmployee**: Modal component for creating new employees
- **EditEmployee**: Modal component for updating existing employees
- **EmployeeForm**: Reusable form component with validation
- **Modal**: Wrapper component for modal dialogs

### Backend Features

- **RESTful API**: Complete CRUD operations
- **SQLite Integration**: File-based database with better-sqlite3
- **Type Safety**: Full TypeScript coverage
- **Error Handling**: Proper error responses

## 🔧 Configuration

### TypeScript

- Strict type checking enabled
- Custom types for Employee data structures
- Form state management types

### Database

- SQLite database with better-sqlite3 for performance
- Auto-creation of employees table on startup
- Prepared statements for security

### Styling

- Tailwind CSS 4.0 for utility-first styling
- Responsive design patterns
- Custom color scheme with indigo theme

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Database file will be included in deployment

### Other Platforms

- The SQLite database file (`employees.db`) needs to be accessible
- Node.js 18+ runtime required
- All dependencies are included in `package.json`

---

**Built with ❤️ using Next.js 15+, React 19+, and TypeScript**
