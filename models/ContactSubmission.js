// models/ContactSubmission.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite during hot reload in dev
const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;
