const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Resend } = require('resend');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.RECEIVER_EMAIL,
      subject: `Portfolio Message: ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));