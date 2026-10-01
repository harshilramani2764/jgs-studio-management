# JGS Studio Management App - V1

🎬 A complete photography business management system built with Node.js, Express, and Supabase.

## Features

### Owner Dashboard
- 📊 Complete business overview
- 📋 Inquiry management
- 📅 Booking management
- 💰 Payment tracking
- 🎬 Project management
- 🖼️ Gallery management
- 📦 Delivery tracking
- 💸 Expense tracking
- 📊 Business reports

### Client Dashboard
- 🏠 Personal dashboard
- 📅 Booking details
- ✏️ Requirements management
- 💳 Payment tracking
- 🧸 Shoot preparation guide
- 🖼️ Gallery access
- 📦 Delivery status
- 💬 Direct messaging

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** Supabase (PostgreSQL)
- **Storage:** Supabase Storage
- **Authentication:** Supabase Auth
- **Deployment:** Vercel

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Supabase account
- GitHub account
- Vercel account

### 1. Setup Supabase

1. Go to [Supabase](https://supabase.com)
2. Create a new project called "JGS Studio"
3. Copy your Project URL and API Key
4. Go to SQL Editor and run the schema from `src/supabase/schema.sql`

### 2. Clone & Setup

```bash
git clone https://github.com/harshilramani2764/jgs-studio-management.git
cd jgs-studio-management

npm install
```

### 3. Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Update with your Supabase credentials:

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
PORT=3000
NODE_ENV=development
```

### 4. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`

### 5. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add your environment variables in Vercel dashboard.

## Project Structure

```
jgs-studio-management/
├── src/
│   ├── config/
│   │   └── supabase.js
│   ├── pages/
│   │   ├── owner/
│   │   │   ├── dashboard.html
│   │   │   ├── inquiries.html
│   │   │   ├── bookings.html
│   │   │   ├── calendar.html
│   │   │   ├── clients.html
│   │   │   ├── payments.html
│   │   │   ├── projects.html
│   │   │   ├── deliveries.html
│   │   │   ├── gallery.html
│   │   │   ├── packages.html
│   │   │   ├── expenses.html
│   │   │   ├── reports.html
│   │   │   └── settings.html
│   │   ├── client/
│   │   │   ├── dashboard.html
│   │   │   ├── my-booking.html
│   │   │   ├── requirements.html
│   │   │   ├── payments.html
│   │   │   ├── preparation.html
│   │   │   ├── gallery.html
│   │   │   ├── deliveries.html
│   │   │   ├── messages.html
│   │   │   └── profile.html
│   │   └── login.html
│   ├── components/
│   │   ├── navbar.html
│   │   ├── dashboard-card.html
│   │   └── modal.html
│   ├── services/
│   │   ├── auth.js
│   │   ├── booking.js
│   │   ├── payment.js
│   │   ├── gallery.js
│   │   └── client.js
│   ├── supabase/
│   │   └── schema.sql
│   └── public/
│       ├── css/
│       │   └── style.css
│       └── js/
│           └── main.js
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Database Tables

- users
- clients
- inquiries
- bookings
- booking_services
- payments
- projects
- project_tasks
- galleries
- gallery_photos
- deliveries
- invoices
- expenses
- packages
- notifications
- messages
- reviews
- settings

## API Endpoints (Coming Soon)

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Owner - Bookings
- `GET /api/owner/bookings`
- `POST /api/owner/bookings`
- `PUT /api/owner/bookings/:id`
- `DELETE /api/owner/bookings/:id`

### Client - Profile
- `GET /api/client/profile`
- `PUT /api/client/profile`

## Development Phases

### V1 (Current)
✅ Login & Role System
✅ Owner Dashboard
✅ Client Dashboard
✅ Booking Management
✅ Payment Tracking
✅ Gallery Management
✅ Delivery Tracking
✅ Reports

### V2 (Planned)
- Online contracts
- E-signatures
- Automated WhatsApp reminders
- Online invoices
- Album selection
- Referral system
- Coupons
- Staff accounts
- AI photo culling
- Automated follow-ups

## License

MIT License - see LICENSE file for details

## Support

For support, contact: support@jgsstudio.com

## Author

JGS Studio
