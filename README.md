# Veridian Company Website

This is the official website for Veridian, a company specializing in AI automations, particularly for WhatsApp. Built using React, Vite, and Tailwind CSS, the site showcases Veridian's services, mission, and contact information.

## Project Structure

The project is organized as follows:

```
veridian-site
├── src
│   ├── assets
│   │   └── images          # Directory for image assets (if any)
│   ├── components          # Reusable components
│   │   ├── About.jsx      # About Veridian section
│   │   ├── Contact.jsx    # Contact information
│   │   ├── Header.jsx     # Navigation and title (mobile)
│   │   ├── Hero.jsx       # Introduction section
│   │   ├── Layout.jsx     # Layout wrapper
│   │   └── Sidebar.jsx    # Sidebar navigation
│   ├── pages              # Page components
│   │   └── HomePage.jsx   # Main landing page
│   ├── styles             # Styles directory
│   │   └── index.css      # Tailwind CSS and custom styles
│   ├── context            # React Context (e.g., ThemeContext)
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Entry point of the application
├── index.html             # Main HTML file
├── package.json           # npm configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```
   git clone <repository-url>
   cd veridian-site
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the development server:**

   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` (or the port specified by Vite) to view the site.

## Features

- Responsive design using Tailwind CSS
- Dynamic routing with React Router (for potential future expansion)
- Components for each section of the site
- Dark/Light mode theme
- Multilingual support (EN/PT)

## License

This project is proprietary to Veridian.
