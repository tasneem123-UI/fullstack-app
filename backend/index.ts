import express from 'express';

const app = express();
const PORT = 5002;
//

app.get('/', (req, res) => {
  res.send('🚀 Backend is working!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});