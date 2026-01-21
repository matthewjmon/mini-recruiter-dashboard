# Mini Recruiter Dashboard

## What I Built

A React-based mini recruiter dashboard that allows users to:

- Browse applicant profiles
- Filter to show only favourited applicants
- View individual applicant details, including title, summary, and skills
- Toggle favourites with state shared across routes
- Navigate easily via a Navbar and view consistent layout with responsive design

The app demonstrates React fundamentals, proper state management, routing, and basic Firebase integration.

---

## Key Features / Technical Notes

- Initially had no nav links in Navbar; implemented "Applicants" and "Favourites" links
- Lifted favourites state from `Dashboard.jsx` to `App.jsx` for centralized state management
- Reused `Dashboard` component for both main and favourites views with conditional filtering
- Integrated Firebase by initializing the SDK and configuring via environment variables
- Logged a single event using Firebase Analytics
- Added flex container with 100vh to keep footer at the bottom of the page
- Moved `initialProfiles` out of components into `src/data/profiles.js` for separation of concerns
- Switched profile card layout from vertically centered to top-aligned for better scannability
- Refactored unnecessary state per profile property; now only profile state is used
- Implemented Firebase Anonymous Authentication to demonstrate basic Auth integration (no user accounts required)
- Used Bootstrap 5 for rapid responsive styling

---

## Assumptions / Trade-offs

- Local component state used for favourites and profiles; no backend needed for this frontend-focused app
- Firebase Authentication implemented anonymously purely to demonstrate integration
- Bootstrap chosen for styling speed and responsiveness; Tailwind could be an alternative
- Dashboard component reused for multiple views instead of creating separate components for simplicity

---

## Time Tracking

- Planning & brainstorming: 10–15 mins
- Setup & boilerplate: 20 mins (streamlined with AI)
- Component development & logic (Dashboard, ProfileDetail, Search, Favourites toggle): 40 mins
- Firebase setup & testing (Analytics + Anonymous Auth): 15–20 mins
- Styling & layout: 20–25 mins
- Testing, debugging & README: 15–20 mins

---

## Tech Stack

- React.js (functional components, hooks, routing)
- JavaScript (ES6+)
- Bootstrap 5
- Firebase (Analytics, Anonymous Authentication)
- Vite (build tool)
- React Router used for multi-page navigation (Dashboard, Favourites, ProfileDetail)

---

## AI Assistance Transparency

I used AI to help streamline repetitive boilerplate code and accelerate development. All architectural and logical decisions, component structure, and functionality were determined and reviewed by me. I fully understand every part of the codebase and can explain its behavior. AI was only used as a productivity aid, not to replace learning or core development effort.

This approach also ensured time-effective completion of the technical test and allowed me to focus on clean code, React fundamentals, state management, and UI/UX quality while completing the test efficiently.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/matthewjmon/mini-recruiter-dashboard.git
   ```
   
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file with Firebase keys (see firebase.js for required variables)

4. Run the app:
   ```bash
   npm run dev
   ```

