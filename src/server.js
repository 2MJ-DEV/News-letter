// Fichier: server.js
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
  try {
    const { email, name } = req.body;
    
    const response = await fetch('https://api.smadmail.com/api/v1/email/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name: name || null,
        project_id: process.env.PROJECT_ID,
        private_key: process.env.PRIVATE_KEY
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return res.status(400).json({ message: data.error || 'Failed to save email' });
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));