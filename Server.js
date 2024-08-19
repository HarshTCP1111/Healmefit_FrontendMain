const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const XLSX = require('xlsx');
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json());

let contacts = []; // Array to store contact data

// POST API to receive contact form data
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Send data to external API
  try {
    await axios.post('https://api.healmefit.io/v1/contact', { name, email, phone, message });

    // Send an email notification
    sendEmail({ name, email, phone, message });

    // Save contact data to Excel
    saveToExcel({ name, email, phone, message });

    res.status(200).send({ message: 'Contact details received successfully.' });
  } catch (error) {
    console.error('Error posting to external API:', error);
    res.status(500).send({ message: 'Error submitting contact details.' });
  }
});

// GET API to retrieve stored contact data
app.get('/api/contact', (req, res) => {
  res.status(200).json(contacts);
});

// Function to send email
const sendEmail = ({ name, email, phone, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Contact Form Submission',
    text: `You have a new contact form submission:
           Name: ${name}
           Email: ${email}
           Phone: ${phone}
           Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Function to save contact data to Excel
const saveToExcel = (contact) => {
  const filePath = './contacts.xlsx';

  let workbook;
  let worksheet;

  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets['Contacts'];
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
  }

  XLSX.utils.sheet_add_json(worksheet, [contact], { skipHeader: true, origin: -1 });
  XLSX.writeFile(workbook, filePath);
};

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
