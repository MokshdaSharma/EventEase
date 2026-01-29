# EventEase - College Event Management Platform

EventEase is a modern Single Page Application (SPA) designed to simplify and digitize the management of college events, fests, workshops, seminars, and hackathons. Built with React, React Router, Bootstrap, and Material UI, it provides a fast, responsive, and intuitive user experience where all interactions happen without page reloads.

## 🎯 Overview

EventEase provides a centralized platform where users can:
- Explore upcoming events with interactive cards
- View detailed information about each event
- Create new events using a clean form interface
- Filter events by category (Workshop, Hackathon, Fest, Seminar)
- Search events by keywords
- Track attendance and registration status
- Share events on social media

## ✨ Key Features

### 1. **Home Dashboard**
- Hero section with call-to-action
- Feature highlights explaining why use EventEase
- Showcase of upcoming events
- Statistics about active events
- Responsive design optimized for all devices

### 2. **Event Listing Page**
- Browse all available events
- Filter by event category
- Search functionality for finding specific events
- Interactive event cards with key information
- Real-time attendance tracking
- Responsive grid layout

### 3. **Event Details Page**
- Comprehensive event information
- Event date, time, and location
- Registration status with progress bar
- Organizer information
- Detailed description
- Event sharing options
- Registration button

### 4. **Event Creation Form**
- Easy-to-use form for creating new events
- Form validation with error messages
- Input fields for:
  - Event title and description
  - Date and time selection
  - Location
  - Event category
  - Maximum capacity
  - Organizer name
  - Event image URL
  - Detailed description
- Success confirmation and redirect

### 5. **About Section**
- Mission statement
- Feature list with details
- Technology stack information
- Team information
- Contact details
- Social media links

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 7.13.0
- **State Management**: Context API
- **UI Framework**: Bootstrap 5.3.8
- **Component Library**: Material UI 7.3.7
- **Build Tool**: Vite (Rolldown-based)
- **Styling**: CSS3 with custom designs
- **HTTP Client**: Native Fetch API (can be extended)

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── EventCard.jsx       # Event card display component
│   ├── EventCard.css
│   ├── Navbar.jsx          # Navigation bar
│   ├── Navbar.css
│   ├── SearchFilter.jsx    # Search and filter component
│   ├── SearchFilter.css
│   ├── Footer.jsx          # Footer component
│   └── Footer.css
│
├── pages/                   # Page components
│   ├── Home.jsx            # Home/dashboard page
│   ├── Home.css
│   ├── Events.jsx          # Events listing page
│   ├── Events.css
│   ├── EventDetail.jsx     # Event details page
│   ├── EventDetail.css
│   ├── CreateEvent.jsx     # Event creation form
│   ├── CreateEvent.css
│   ├── About.jsx           # About page
│   └── About.css
│
├── context/                 # State management
│   └── EventContext.jsx    # Event context provider and hooks
│
├── styles/                  # Global styles (if needed)
│   └── variables.css       # CSS variables and theme
│
├── App.jsx                 # Main app component with routing
├── App.css                 # Global app styles
├── main.jsx               # React DOM entry point
├── index.css              # Global styles
└── assets/                # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eventease.git
   cd eventease
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`

### Available Scripts

- **`npm run dev`** - Start development server with hot module replacement
- **`npm run build`** - Build the application for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📖 Usage Guide

### Creating an Event
1. Navigate to "Create Event" from the navigation menu
2. Fill in the event details:
   - Event title and description
   - Date and time
   - Location
   - Category (Workshop, Hackathon, Fest, or Seminar)
   - Maximum capacity
   - Organizer name
   - Optional image URL and detailed description
3. Click "Create Event" to submit
4. You'll be redirected to the events listing page

### Browsing Events
1. Visit the "Events" page
2. Use the search bar to find specific events
3. Click category buttons to filter by event type
4. Click "View Details" on any event card to see more information

### Event Registration
1. Navigate to an event's details page
2. View attendance statistics and available spots
3. Click "Register Now" to register for the event
4. Share the event using social media buttons

## 🎨 Design System

### Color Scheme
- **Primary**: #667eea (Indigo)
- **Secondary**: #764ba2 (Purple)
- **Success**: #48bb78 (Green)
- **Danger**: #f56565 (Red)
- **Text Primary**: #2d3748 (Dark Gray)
- **Text Secondary**: #718096 (Light Gray)
- **Background**: #f7fafc (Light Blue-Gray)
- **White**: #ffffff

### Typography
- **Headlines**: Bold, sans-serif
- **Body**: Regular weight, readable line height
- **Emphasis**: Medium to bold weight for important information

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🔄 State Management

The application uses React's Context API for global state management. The `EventContext` provides:

- **`events`**: Array of all events
- **`filteredEvents`**: Currently displayed events (after filtering/searching)
- **`addEvent()`**: Add a new event
- **`updateEvent(id, updatedEvent)`**: Update event details
- **`deleteEvent(id)`**: Remove an event
- **`getEventById(id)`**: Retrieve specific event
- **`filterEvents(category)`**: Filter events by category
- **`searchEvents(query)`**: Search events by keyword

## 🌐 Routing

The application uses React Router for client-side routing:

- **`/`** - Home page
- **`/events`** - Events listing page
- **`/event/:id`** - Event details page
- **`/create-event`** - Event creation form
- **`/about`** - About page

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on interactive elements
- Screen reader friendly content

## 📱 Responsive Design

EventEase is fully responsive and optimized for:
- Mobile phones (320px and above)
- Tablets (480px and above)
- Desktop computers (768px and above)
- Large displays (1200px and above)

Features include:
- Flexible grid layouts
- Mobile-first approach
- Touch-friendly buttons and controls
- Readable font sizes on all devices
- Optimized images and assets

## 🔒 Security Best Practices

- Input validation on all forms
- Error handling and user feedback
- Safe event data handling
- No sensitive data storage in localStorage
- Protected against XSS attacks

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Future Enhancements

- [ ] User authentication and profiles
- [ ] Event notifications and reminders
- [ ] Real-time registration updates
- [ ] Event calendar view
- [ ] Advanced analytics dashboard
- [ ] Payment integration for paid events
- [ ] Email notifications
- [ ] Social media integration
- [ ] Mobile app version
- [ ] Backend API integration

## 🐛 Known Issues

Currently, the application uses mock data. Future versions will integrate with a backend API for persistent data storage.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Mokshda Sharma** - Initial development

## 📞 Contact

- **Email**: info@eventease.com
- **Phone**: +91 (0) 123-456-7890

## 🙏 Acknowledgments

- React community for excellent documentation
- Bootstrap for responsive design framework
- Material UI for modern component library
- Vite team for fast development experience

---

**EventEase** - Making college event management simple and enjoyable! 📅✨

Built with ❤️ using React and modern web technologies.
