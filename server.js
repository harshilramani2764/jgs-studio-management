const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('src/public'));

// Test Route
app.get('/', (req, res) => {
  res.send('JGS Studio Management App - Server Running ✅');
});

// Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/src/pages/login.html');
});

// Test Supabase Connection
app.get('/api/health', async (req, res) => {
  try {
    const { supabase } = require('./src/config/supabase');
    const { data, error } = await supabase.from('users').select('count');
    
    if (error) {
      return res.status(500).json({ 
        status: 'error', 
        message: 'Supabase connection failed',
        error: error.message 
      });
    }

    res.status(200).json({ 
      status: 'success', 
      message: 'Supabase connected successfully ✅',
      database: 'Connected'
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Server error',
      error: error.message 
    });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n🎬 JGS Studio Management App`);
  console.log(`📌 Server running at http://localhost:${PORT}`);
  console.log(`🧪 Test Supabase: http://localhost:${PORT}/api/health`);
  console.log(`\n✅ Ready for development!\n`);
});
