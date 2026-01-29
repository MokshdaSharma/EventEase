# EventEase - Quick Reference Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📍 What's Inside

### Pages (5 Routes)
- **Home** (`/`) - Dashboard with featured events
- **Events** (`/events`) - Event listing with filters
- **Event Detail** (`/event/:id`) - Full event information
- **Create Event** (`/create-event`) - Add new events
- **About** (`/about`) - About EventEase

### Components (4 Reusable)
- **Navbar** - Navigation with responsive menu
- **EventCard** - Event display with badges
- **SearchFilter** - Search & category filtering
- **Footer** - Contact and social links

### Features
✅ Event browsing with grid layout
✅ Real-time search and filtering
✅ Event creation form with validation
✅ Detailed event pages
✅ Registration status tracking
✅ Social sharing buttons
✅ Fully responsive design
✅ Modern gradient UI
✅ Smooth page transitions

## 🎨 Design Colors

```
Primary: #667eea (Indigo)
Secondary: #764ba2 (Purple)
Success: #48bb78 (Green)
Danger: #f56565 (Red)
Background: #f7fafc (Light Gray)
Text: #2d3748 (Dark Gray)
```

## 📊 Sample Events

The app includes 4 pre-loaded events:
1. React Workshop
2. Annual Hackathon 2024
3. College Fest 2024
4. Web Development Seminar

## 🔄 State Management

**EventContext** provides:
- `events` - All events array
- `filteredEvents` - Filtered display
- `addEvent()` - Create event
- `filterEvents()` - Filter by category
- `searchEvents()` - Search events
- `getEventById()` - Get single event

## 📱 Responsive Design

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

All pages are fully responsive!

## 🗂️ File Organization

```
src/
  components/     # Reusable components
  pages/         # Page components
  context/       # State management
  App.jsx        # Main app with routing
  index.css      # Global styles
```

## 🎯 Key Files

| File | Purpose |
|------|---------|
| `App.jsx` | Routing & main layout |
| `EventContext.jsx` | Global state |
| `pages/Home.jsx` | Dashboard |
| `pages/Events.jsx` | Event listing |
| `pages/EventDetail.jsx` | Event details |
| `pages/CreateEvent.jsx` | Create form |
| `components/Navbar.jsx` | Navigation |
| `components/EventCard.jsx` | Event card |

## 💻 Development Tips

1. **Hot Reload**: Changes auto-update in browser
2. **Component Isolation**: Test each component independently
3. **Context Usage**: Use EventContext in any component
4. **CSS Organization**: Each component has its own CSS file
5. **Form Validation**: Built into CreateEvent component

## 🔗 Component Props

### EventCard
```jsx
<EventCard event={eventObject} />
```

### SearchFilter
- No props needed (uses context)

### Navbar & Footer
- No props needed (stateless)

## 📦 Dependencies

- **react**: 19.2.0
- **react-dom**: 19.2.0
- **react-router-dom**: 7.13.0
- **bootstrap**: 5.3.8
- **@mui/material**: 7.3.7

## 🚀 Deployment Steps

1. Run `npm run build`
2. Deploy `dist/` folder to hosting
3. Set up environment variables if needed
4. Test all routes work correctly

## 🐛 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Node modules issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styles not loading?**
- Clear browser cache
- Restart dev server

## 📞 Contact

- Email: info@eventease.com
- Phone: +91 (0) 123-456-7890

## 📚 Docs

- `README_EVENTEASE.md` - Full documentation
- `BUILD_SUMMARY.md` - Build details
- This file - Quick reference

---

**EventEase** - Simplifying college event management! 📅
