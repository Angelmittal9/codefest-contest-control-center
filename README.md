# 🚀 CodeFest Contest Control Center

## Project Overview

CodeFest Contest Control Center is a modern web-based dashboard designed for managing and monitoring competitive programming contests. The platform provides organizers with a centralized interface to track participants, submissions, rankings, contest activity, and overall contest performance.

The application is built entirely on the frontend using mock data and simulates real-world contest administration workflows such as leaderboard management, rejudging submissions, contest freezing, and analytics tracking.

---

# 🛠 Tech Stack Used

* **Next.js**
* **React.js**
* **TypeScript**
* **Tailwind CSS**
* **Recharts**
* **Lucide React Icons**
* **Local Storage**

---

# ⚙️ Project Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Angelmittal19/codefest-contest-control-center.git
```

### 2. Navigate to Project Directory

```bash
cd codefest-contest-control-center
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Open Browser

```text
http://localhost:3000
```

---

# 📁 Folder Structure Explanation

```text
src/
│
├── app/
│   ├── analytics/
│   ├── dashboard/
│   ├── leaderboard/
│   ├── participants/
│   ├── submissions/
│   ├── problems/
│   ├── rejudge/
│   ├── settings/
│   └── components/
│
├── data/
│   └── mockData.ts
│
└── globals.css
```

### Folder Responsibilities

* **dashboard/** → Contest overview and statistics
* **leaderboard/** → Rankings and leaderboard management
* **participants/** → Participant information and management
* **submissions/** → Submission monitoring system
* **rejudge/** → Rejudge functionality and controls
* **analytics/** → Contest analytics and charts
* **settings/** → Contest settings and configuration
* **components/** → Reusable UI components
* **data/** → Mock datasets used throughout the application

---

# 🧠 State Management Approach

The project uses React Hooks for state management.

Primary hooks used:

* useState
* useEffect

Local Storage is used to persist:

* Theme preferences
* Contest settings
* Freeze mode state
* User actions
* Activity feed updates

This approach keeps the application lightweight while demonstrating frontend state management techniques.

---

# 🔄 Data Flow Explanation

```text
Mock Data
     ↓
Page Components
     ↓
User Interaction
     ↓
State Updates
     ↓
UI Re-render
     ↓
Activity Feed / Dashboard Updates
```

Examples:

* Rejudge action updates contest activity feed.
* Freeze mode updates leaderboard status.
* Export action generates CSV output.

---

# 📌 Assumptions Made

* Backend implementation is not required.
* Contest data is simulated using mock data.
* Real-time updates are represented through frontend state changes.
* Authentication is not connected to a backend service.
* Rankings and statistics are demonstration data.
* Local Storage is used for persistence across refreshes.

---

# ✨ Implemented Features

### Contest Overview Dashboard

* Contest statistics cards
* Contest progress tracking
* Live contest timer
* Activity feed
* Contest status monitoring

### Participant Management

* Participant listing
* Rank display
* Contest information overview

### Submission Monitoring

* Submission analytics
* Verdict tracking
* Recent submission feed

### Leaderboard System

* Leaderboard display
* Freeze / Unfreeze controls
* Ranking visualization

### Rejudge System

* Rejudge functionality
* Undo rejudge support
* Activity feed integration

### Analytics

* Charts and graphs
* Submission trends
* Contest performance insights

### Additional Features

* CSV Export Functionality
* Responsive UI
* Sidebar Navigation
* Local Storage Persistence

---

# 📸 Screenshots

Add screenshots of:

### Dashboard

<img width="1366" height="677" alt="image" src="https://github.com/user-attachments/assets/feab07a7-e5df-4028-8620-630b160e313f" />


### Leaderboard

<img width="1350" height="683" alt="image" src="https://github.com/user-attachments/assets/e8834746-a973-4d9c-8543-ddabbb61ce4a" />
<img width="1190" height="658" alt="image" src="https://github.com/user-attachments/assets/9f26c6a4-85b2-4146-b6e1-2d8517d234c6" />


### Participants

<img width="1366" height="683" alt="image" src="https://github.com/user-attachments/assets/219e473c-fe9c-4382-8c24-36c911fcf106" />

### Analytics

<img width="1362" height="687" alt="image" src="https://github.com/user-attachments/assets/9991f80a-5ae2-403e-9f99-0dde24053924" />


### Rejudge System

<img width="1364" height="681" alt="image" src="https://github.com/user-attachments/assets/ac422b79-8a42-4f30-a4a1-5789ae23ea46" />


---

# 🌐 Deployment Link

Paste your deployed Vercel URL here:

https://codefest-contest-control-center.vercel.app/

---

# 👨‍💻 Author

**Angel Mittal**

B.Tech CSE (AI & Robotics)




