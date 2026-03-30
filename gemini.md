# অঙ্কশালা (Ankoshala) - Project Progress

A specialized math preparation platform for BCS, NTRCA, Bank, and other Government recruitment exams.

## 🚀 Key Features & World-Class UI Enhancements

The platform has been simplified into a **Hardcoded Static Site** with premium aesthetics, sophisticated animations, and a seamless mobile-first experience.

### 1. Navigation & Header (Premium Glassmorphism)
- **Enhanced Glassmorphic Sticky Nav**: Navbar features a permanent `16px backdrop-blur` and refined transparency (`rgba(255, 255, 255, 0.35)` to `0.75`) with a subtle glowing border for a high-end feel.
- **Sticky Implementation**: Optimized by removing container-level overflow restrictions to ensure perfect stickiness during scroll.
- **Social-Only Branding**: Only the logo and direct social buttons (Facebook & WhatsApp) are present for a minimalist, action-oriented journey.

### 2. World-Class Hero Section
- **Dynamic Entrance**: Staggered scroll-reveal entrance using a custom `IntersectionObserver` that triggers CSS-driven `.active` states.
- **Content Updates**: Call-to-action buttons have been updated to **"কোর্স আউটলাইন"** (Course Outline) and **"ফ্রি ডেমো ক্লাস"** (Free Demo Class) for better clarity.
- **Mobile Centering**: The hero description is perfectly centered on mobile view, with a scaled-down responsive max-width for maximum readability.
- **Minimized CTA Bulk**: Buttons in the hero section are scaled down on mobile with reduced padding and font size for proportional balance.
- **Premium Typography**: Uses fluid `clamp()` and a combination of **Tiro Bangla** (Serif) and **Hind Siliguri** (Sans-serif).

### 3. Course Management (Premium Cards)
- **High-End Design**: Cards feature 20px border-radius, `var(--shadow-md)`, and color-coded accent sidebars.
- **Simplified Tagging**: Course chips have been simplified (e.g., just **"BCS"** or **"NTRCA"**) for a cleaner, ultra-minimalist aesthetic.
- **Comprehensive Coverage**: Feature descriptions now emphasize **"A to Z সিলেবাস কভারেজ"** to assure students of complete preparation.
- **Mobile CTA Optimization**: Card footers and buttons are scaled for mobile to reduce bulk and improve visual flow.
- **Visual Feedback**: Refined hover transforms with smooth shadow expansion.

### 4. Authoritative Mentor Section
- **Authority Focus**: Profile layout emphasizes the instructor's credentials (DU BSc/MSc) and "৪১তম বিসিএস মেধাক্রম-০১" achievement.
- **Clean Portrait**: The verification icon has been removed from the profile photo for a more natural, authoritative portrait feel.
- **Mobile Grid**: Personal statistics restructure into a clean **2x2 grid** with boxed appearance on smaller screens.

### 5. Exam Mentoring Grid
- **Sophisticated Grid**: Auto-fitting responsive layout that intelligently adapts from multi-column to single-column on small screens.
- **Iconic Sectors**: BCS, NTRCA, Bank, and Govt job categories utilize unique premium icons and subtle border highlights.

### 6. World-Class Footer (Minimalist & Dynamic)
- **Dynamic Year**: The copyright line utilizes a JavaScript-powered current year with Bengali numeral formatting (`toLocaleString('bn-BD')`).
- **Strategic Simplicity**: Footer has been further simplified by removing secondary social links/icons, focusing entirely on brand identity and security badges.
- **Centered Brand Identity**: All elements (Logo, Mission, Trust Badge) are center-aligned for a balanced, high-end closing for the page.

### 7. Core Logic & Architecture
- **Static Implementation**: All admin routes, auth logic, and dashboards have been removed to ensure a lean, fast static site.
- **CSS-Driven Reveal**: Initial opacities are handled in CSS, and the `IntersectionObserver` adds the `.active` class for a robust animation trigger.
- **Design Tokens**: Standardized CSS variables for `var(--shadow-lg)`, spacing, and a responsive design system.

### 8. World-Class Error Handling
- **Premium 404 Page**: A custom-designed "Page Not Found" experience that maintains the site's high-end aesthetic.
- **Visual Consistency**: Features staggered animations, Bengali numerals (`৪০৪`), and a floating diagnostic icon in the brand's mint color.
- **Smart Navigation**: Provides a clear "Back to Home" call-to-action to keep users within the platform.

## 🛠 Tech Stack
- **Frontend**: React.js 18 with Vite
- **Styling**: Vanilla CSS Design System (Advanced Glassmorphism & Shadow Tokens)
- **Icons**: Lucide React (Premium sets)
- **Animations**: CSS Transitions + JavaScript Intersection Observer
- **Routing**: React Router DOM (Single-route setup + Wildcard 404)

## 📂 Project Structure
- `/src/components`: Atomic UI modules (Hero, Navbar, Mentor, Courses, Footer, etc.)
- `/src/assets`: Logos and instructor portrait assets.
- `/src/pages`: Home page and NotFound error views.
- `/src/index.css`: Global design system and responsive tokens.
