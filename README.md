# EventEase - College Event Management Platform 📅

[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.5-purple)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React%20Router-7.13.0-orange)](https://reactrouter.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-green)](https://getbootstrap.com)
[![License](https://img.shields.io/badge/License-MIT-yellow)](#license)

A modern, fast, and responsive Single Page Application (SPA) designed to simplify college event management. EventEase provides a centralized platform for discovering and managing college events, fests, workshops, seminars, and hackathons.

## ✨ Features

### 🏠 Home Dashboard
- Beautiful hero section with call-to-action
- Feature highlights showcasing platform benefits
- Event showcase with featured events
- Live statistics dashboard
- Responsive design for all devices

### 📅 Event Management
- **Browse Events** - Interactive event cards with key information
- **Advanced Search** - Find events by keywords
- **Filter by Category** - Workshop, Hackathon, Fest, Seminar
- **Event Details** - Comprehensive event information page
- **Registration Tracking** - Real-time attendance progress
- **Event Creation** - Easy form to add new events with validation

### 🎯 Additional Pages
- **About Section** - Learn about EventEase, technology stack, and team
- **Navigation** - Sticky navbar with smooth scrolling
- **Footer** - Contact information and social links

### 🎨 Design & UX
- Modern gradient color scheme
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Accessibility-friendly interface
- Professional typography and spacing

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ 
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

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Local: `http://localhost:5173/`
   - Network: `http://172.21.124.129:5173/` (or your network IP)

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

## 🏗️ Project Structure

```
src/
├── components/              # Reusable components
│   ├── Navbar.jsx          # Navigation bar
│   ├── EventCard.jsx       # Event card display
│   ├── SearchFilter.jsx    # Search and filter
│   └── Footer.jsx          # Footer component
│
├── pages/                   # Page components (routes)
│   ├── Home.jsx            # Home/dashboard
│   ├── Events.jsx          # Events listing
│   ├── EventDetail.jsx     # Event details
│   ├── CreateEvent.jsx     # Event creation form
│   └── About.jsx           # About page
│
├── context/                 # State management
│   └── EventContext.jsx    # Global event state
│
├── App.jsx                 # Main app with routing
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## 🌐 Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Home | Dashboard with featured events |
| `/events` | Events | List all events with filters |
| `/event/:id` | EventDetail | View full event information |
| `/create-event` | CreateEvent | Add new events |
| `/about` | About | Learn about EventEase |

## 🔄 State Management

EventEase uses **React Context API** for global state management with features:

```javascript
// Available context methods
addEvent(newEvent)           // Create new event
updateEvent(id, data)        // Update event details
deleteEvent(id)              // Remove event
getEventById(id)             // Retrieve specific event
filterEvents(category)       // Filter by category
searchEvents(query)          // Search by keywords
```

## 🎨 Design System

### Color Palette
- **Primary**: `#667eea` (Indigo)
- **Secondary**: `#764ba2` (Purple)
- **Success**: `#48bb78` (Green)
- **Danger**: `#f56565` (Red)
- **Text**: `#2d3748` (Dark Gray)
- **Background**: `#f7fafc` (Light)

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 📱 Responsive Features

✅ Mobile-optimized layouts
✅ Touch-friendly UI elements
✅ Flexible grid systems
✅ Readable font sizes on all devices
✅ Optimized images and assets
✅ Smooth scrolling behavior

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| React 19.2 | UI framework |
| React Router 7 | Client-side routing |
| Vite 7.2 | Build tool and dev server |
| Bootstrap 5.3 | Responsive CSS framework |
| Material UI 7.3 | Component library |
| Context API | State management |
| CSS3 | Styling |

## 💾 Sample Data

The app includes 4 pre-loaded events:

1. **React Workshop** - Learn React fundamentals
2. **Annual Hackathon 2024** - 24-hour coding competition
3. **College Fest 2024** - Cultural performances
4. **Web Development Seminar** - Industry expert talks

All events use reliable placeholder images and can be viewed, filtered, and searched immediately upon startup.

## ✅ Form Validation

The event creation form includes:
- Required field validation
- Error message display
- Input type validation
- Capacity minimum validation
- User-friendly error feedback

## 🔐 Security Features

✅ Input validation on all forms
✅ XSS protection with React
✅ Safe event data handling
✅ Error boundary handling
✅ No sensitive data exposure

## 📈 Performance

- ⚡ Lightning-fast page transitions (SPA)
- 🎯 Optimized bundle with Vite
- 🔄 Hot Module Replacement (HMR)
- 📦 Minimal dependencies
- 🚀 ~90+ Lighthouse score expected

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📋 Future Enhancements

- [ ] User authentication
- [ ] Event notifications
- [ ] Backend API integration
- [ ] Database persistence
- [ ] Payment processing
- [ ] Email reminders
- [ ] Social media sharing
- [ ] Admin dashboard
- [ ] Mobile app version
- [ ] Real-time updates

## 🐛 Troubleshooting

### Images not loading?
- Images use `picsum.photos` for reliability
- Check internet connection
- Clear browser cache

### Dev server not connecting?
- Ensure port 5173 is not in use
- Try: `npm run dev`
- Use Network URL if localhost fails

### Hot reload not working?
- Vite HMR should work automatically
- Restart dev server if needed
- Check browser console for errors

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💻 Author

**Mokshda Sharma**

## 📞 Contact & Support

- **Email**: info@eventease.com
- **Website**: Coming soon
- **Issues**: GitHub Issues

## 🙏 Acknowledgments

- React community for excellent documentation
- Bootstrap team for responsive CSS framework
- Material UI for modern components
- Vite team for fast development experience
- All contributors and testers

---

**EventEase** - Making college event management simple and enjoyable! 📅✨

Built with ❤️ using modern React and web technologies.
