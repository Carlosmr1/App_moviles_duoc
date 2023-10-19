const express = require('express')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const cors = require('cors'); // Importa el módulo cors


app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8100' // Reemplaza esto con el origen correcto de tu aplicación Ionic
  }));

app.listen(port, () =>{
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
});

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'duoconwheels49@gmail.com',
      pass: 'duoconwheels1234',
      clientId: '1096175534255-3eimmbp8hfrpc1t55o26m6i6f4raaq7r.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken: '1//04IK0RuKlFyCXCgYIARAAGAQSNwF-L9Irenr0NHqIJ2b61cwDMy4NE_5kCZOmfhn40IctsAP5h0wnPuOcDnk3NDZvMRS4vUikVUg'
    }
  });

  app.post('/correo', (req, res) => {
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