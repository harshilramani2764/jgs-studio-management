# JGS Studio Management App - Complete Setup Guide

## Step-by-Step Setup Instructions

### Step 1: Create Supabase Account

1. Go to [Supabase](https://supabase.com)
2. Click "Start Your Project" or "Sign Up"
3. Use your email or GitHub to create account
4. Create a new organization (or use existing)

### Step 2: Create a New Project

1. Click "New Project"
2. Fill in details:
   - **Project Name:** JGS Studio
   - **Database Password:** Create a strong password
   - **Region:** Choose closest to you (India: Singapore)
3. Click "Create new project" and wait (2-3 minutes)

### Step 3: Get Your Credentials

Once project is created:

1. Go to **Settings** → **API**
2. You'll see:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **API Key** (anon public key)
   - **Service Role Key** (keep this secret!)

3. Copy these values:
   ```
   SUPABASE_URL = your_project_url
   SUPABASE_ANON_KEY = your_api_key
   SUPABASE_SERVICE_ROLE_KEY = your_service_role_key
   ```

### Step 4: Create Database Tables

1. In Supabase, go to **SQL Editor**
2. Click **New Query**
3. Copy the entire SQL from `src/supabase/schema.sql`
4. Paste it in the SQL Editor
5. Click **Run** (or Ctrl + Enter)
6. Wait for tables to be created ✅

### Step 5: Setup Environment Variables

1. In your project folder, create `.env` file:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
PORT=3000
NODE_ENV=development
```

**⚠️ IMPORTANT:**
- Never commit `.env` to GitHub
- `.env` is already in `.gitignore`
- Keep `SUPABASE_SERVICE_ROLE_KEY` private!

### Step 6: Install Dependencies

```bash
# Install Node.js packages
npm install

# Verify installation
npm list
```

### Step 7: Run Locally

```bash
# Start development server
npm run dev

# Server will run at http://localhost:3000
```

Visit in browser:
- Main page: `http://localhost:3000`
- Login page: `http://localhost:3000/login`
- Health check: `http://localhost:3000/api/health`

### Step 8: Verify Supabase Connection

1. Open browser console (F12)
2. Go to `http://localhost:3000/api/health`
3. You should see:
   ```json
   {
     "status": "success",
     "message": "Supabase connected successfully ✅",
     "database": "Connected"
   }
   ```

### Step 9: Setup GitHub

1. Go to [GitHub](https://github.com)
2. Repository already created: `jgs-studio-management`
3. Clone it locally:

```bash
git clone https://github.com/harshilramani2764/jgs-studio-management.git
cd jgs-studio-management
```

### Step 10: Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "Add New" → "Project"
3. Select "jgs-studio-management" repository
4. Click "Import"
5. Add Environment Variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
6. Click "Deploy"

**Your app will be live at:** `https://jgs-studio-management.vercel.app`

---

## Supabase Features You Can Use

### 1. Authentication
```javascript
const { error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
});
```

### 2. Database Queries
```javascript
// Select
const { data } = await supabase
  .from('clients')
  .select('*')
  .eq('owner_id', userId);

// Insert
const { data } = await supabase
  .from('bookings')
  .insert([{ client_id, function_type, event_date }]);

// Update
const { data } = await supabase
  .from('bookings')
  .update({ status: 'Confirmed' })
  .eq('id', bookingId);

// Delete
const { error } = await supabase
  .from('bookings')
  .delete()
  .eq('id', bookingId);
```

### 3. File Storage
```javascript
const { data, error } = await supabase
  .storage
  .from('galleries')
  .upload(`booking-${bookingId}/photo.jpg`, file);
```

### 4. Real-time Subscriptions
```javascript
supabase
  .from('bookings')
  .on('*', payload => {
    console.log('Change received!', payload)
  })
  .subscribe();
```

---

## Troubleshooting

### ❌ "Cannot find module '@supabase/supabase-js'"

```bash
npm install @supabase/supabase-js
```

### ❌ "SUPABASE_URL is missing"

- Check `.env` file exists
- Verify values are correct
- Restart server: `npm run dev`

### ❌ "Database connection failed"

1. Check Supabase project is running
2. Verify credentials in `.env`
3. Try `/api/health` endpoint
4. Check Supabase dashboard for errors

### ❌ "Port 3000 already in use"

```bash
# Use different port
PORT=3001 npm run dev
```

---

## Next Steps

1. ✅ Build authentication pages
2. ✅ Create owner dashboard
3. ✅ Create client dashboard
4. ✅ Build API endpoints
5. ✅ Connect frontend to backend
6. ✅ Test all features
7. ✅ Deploy to Vercel

---

## Security Checklist

- [ ] `.env` file not committed to GitHub
- [ ] Service Role Key kept private
- [ ] Environment variables added to Vercel
- [ ] Authentication checks implemented
- [ ] SQL Injection prevention (use Supabase client, not raw SQL)
- [ ] Row-level security (RLS) policies set up
- [ ] CORS properly configured

---

## Support

- **Supabase Docs:** https://supabase.com/docs
- **Express Docs:** https://expressjs.com
- **Vercel Docs:** https://vercel.com/docs

