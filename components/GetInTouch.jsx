'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';

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
      const response = await fetch(`https://supreme-backsof-both-fb.vercel.app/api/contact`, {
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
    <div className="w-full py-12 px-6 bg-blue-800 text-white">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">Get In Touch</h2>
          <div className="w-12 h-1 bg-white my-4"></div>
          <p>For general inquiries</p>
          <p>Address: 110, 16th Road, Chembur, Mumbai - 400071</p>
          <p>Phone: <a href="tel:+912225208822" className="underline">+91 22 25208822</a></p>
          <p>Email: <a href="mailto:info@supremegroup.co.in" className="underline">info@supremegroup.co.in</a></p>
        </div>

        <div className="flex-1">
          <form onSubmit={submitForm} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-300 focus:border-white outline-none py-2 placeholder-gray-200"
              />
              {isFormValid.fullName && <p className="text-red-400 text-sm">Please enter Full Name</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-300 focus:border-white outline-none py-2 placeholder-gray-200"
              />
              {isFormValid.email && <p className="text-red-400 text-sm">Please enter a valid email</p>}
            </div>

            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full bg-transparent border-b border-gray-300 focus:border-white outline-none py-2 placeholder-gray-200"
              />
              {isFormValid.company && <p className="text-red-400 text-sm">Please enter Company name</p>}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full bg-transparent border-b border-gray-300 focus:border-white outline-none py-2 placeholder-gray-200"
              />
              {isFormValid.message && <p className="text-red-400 text-sm">Please enter a message</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
