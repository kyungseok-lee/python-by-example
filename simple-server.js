const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// For SPA routing, serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Python by Example server running on http://0.0.0.0:${PORT}`);
});