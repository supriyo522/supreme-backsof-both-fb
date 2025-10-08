/*getTouch.jsx*/
'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from '../styles/GetInTouch.module.css';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });

  const [isFormValid, setIsFormValid] = useState({
    fullName: false,
    email: false,
    company: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsFormValid((prev) => ({ ...prev, [name]: value.trim() === '' }));
  };

  const validateForm = () => {
    const errors = {
      fullName: formData.fullName.trim() === '',
      email: formData.email.trim() === '',
      company: formData.company.trim() === '',
      message: formData.message.trim() === '',
    };
    setIsFormValid(errors);
    return !Object.values(errors).some((field) => field);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(`Hi ${formData.fullName}, Thanks for reaching out!`);
        setFormData({ fullName: '', email: '', company: '', message: '' });
      } else {
        const errorData = await response.json();
        toast.error(errorData.errors?.[0]?.msg || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className={styles['get-in-touch-container']} id="contact-us">
      <div className={styles['get-in-touch-wrapper']}>
        <div className={styles['get-in-touch-left']}>
          <h2 className={styles['get-in-touch-title']}>Get In Touch</h2>
          <div className={styles['get-in-touch-bar']}></div>
          <p>For general inquiries</p>
          <p>Address: 110, 16th Road, Chembur, Mumbai - 400071</p>
          <p>
            Phone: <a href="tel:+912225208822">+91 22 25208822</a>
          </p>
          <p>
            Email: <a href="mailto:info@supremegroup.co.in">info@supremegroup.co.in</a>
          </p>
        </div>

        <div className={styles['form-wrapper']}>
          <form onSubmit={submitForm} className={styles['get-in-touch-form']}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={styles['get-in-touch-input']}
            />
            {isFormValid.fullName && <span className={styles['get-in-touch-error']}>Please enter Full Name</span>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={styles['get-in-touch-input']}
            />
            {isFormValid.email && <span className={styles['get-in-touch-error']}>Please enter a valid email</span>}

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className={styles['get-in-touch-input']}
            />
            {isFormValid.company && <span className={styles['get-in-touch-error']}>Please enter Company name</span>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className={styles['get-in-touch-textarea']}
            ></textarea>
            {isFormValid.message && <span className={styles['get-in-touch-error']}>Please enter a message</span>}

            <button type="submit" className={styles['get-in-touch-button']}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
