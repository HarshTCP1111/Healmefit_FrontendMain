const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/HMF-contact-form-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema and Model
const contactSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  phoneNumber: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Save to Excel function
const saveToExcel = (data) => {
  const filePath = './contacts.xlsx';
  let workbook;
  let worksheet;

  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
    xlsx.utils.sheet_add_json(worksheet, [data], { skipHeader: true, origin: -1 });
  } else {
    worksheet = xlsx.utils.json_to_sheet([data]);
    workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Contacts');
  }

  xlsx.writeFile(workbook, filePath);
};

// POST route to handle form submission
app.post('/submit', async (req, res) => {
  const { firstName, email, phoneNumber, message } = req.body;
  const newContact = new Contact({ firstName, email, phoneNumber, message });

  try {
    await newContact.save();
    saveToExcel(req.body);
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving form data', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
