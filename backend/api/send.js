const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Resend } = require('resend');

dotenv.config();
const app = express();

// DIT IS DE FIX: Vertel de backend dat hij poort 5173 moet vertrouwen
app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mateovukoje16@gmail.com',
      subject: `Nieuwe aanvraag van ${name}`,
      html: `<p>Bericht van: ${name} (${email})</p><p>${message}</p>`
    });
    console.log('Verzonden naar Resend:', data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Resend Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log('🚀 Backend draait op poort 3001'));