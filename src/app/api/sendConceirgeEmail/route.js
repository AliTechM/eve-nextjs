import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the incoming request body
    const { email, subject, name, phone } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, //  host
      port: process.env.EMAIL_PORT, //  port
      // secure: false, 
      auth: {
        user: process.env.EMAIL_USER, // Your  username
        pass: process.env.EMAIL_PASS, // Replace with your email password
      },
      // tls: {
      //   tls_certcheck: false,
      //   rejectUnauthorized: false, // Allow self-signed certificates (use only for testing)
      // },
    });

    await transporter.sendMail({
      from: `"EVE Solution" <${process.env.EMAIL_USER}>`, // Sender address
      to: email, // Recipient email
      subject: "New Inquiry from Website Contact Form", // Subject line
      text: `Hello EVE Solution Team,

A new submission has been received from the website contact form. Here are the details:

 ●	Name: ${name}
 ●	Phone Number: ${phone}
 ●	Email Address: ${email}
 ●	Subject: ${subject}

Please follow up with the user promptly regarding their inquiry.


Best regards,
EVE Solution
`, // Plain text body
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
