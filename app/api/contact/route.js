/*app/api/contact/route.js */
// app/api/contact/route.js
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/ContactSubmission';

export async function POST(request) {
  const body = await request.json();
  const { fullName, email, company, message } = body;

  if (!fullName || !email || !company || !message) {
    return Response.json(
      { errors: [{ msg: 'All fields are required' }] },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const newContact = new Contact({
      fullName,
      email,
      company,
      message,
    });

    await newContact.save();

    return Response.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact POST error:', error);
    return Response.json(
      { errors: [{ msg: 'Database error' }] },
      { status: 500 }
    );
  }
}

