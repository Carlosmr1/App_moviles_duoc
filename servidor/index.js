const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8100',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204
}));

// Manejamos las solicitudes OPTIONS explícitamente
app.options('*', cors());

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'duoconwheels49@gmail.com',
    pass: 'duoconwheels1234',
    clientId: '1096175534255-3eimmbp8hfrpc1t55o26m6i6f4raaq7r.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '4/0AfJohXmJ1mb3K_vx3KMVdmwi8Dc_jHrXQ4Q3v_93SW3m1EPWnYkZK6BfsNboTO453KF3Vw'
  }
});

app.post('/enviar-correo', (req, res) => {
  const { destinatario, asunto, cuerpo } = req.body;

  const mailOptions = {
    from: 'duoconwheels49@gmail.com',
    to: destinatario,
    subject: asunto,
    text: cuerpo
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error " + error);
      res.status(500).json({ mensaje: 'Error al enviar el correo' });
    } else {
      console.log("Correo enviado: " + info.response);
      res.json({ mensaje: 'Correo enviado con éxito' });
    }
  });
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
