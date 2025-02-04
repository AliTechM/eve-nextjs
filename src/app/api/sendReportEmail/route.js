import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the incoming request body
    const {
      fname,
      lname,
      email,
      phone,
      location,
      investment,
      startRange,
      endRange,
      code,
    } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // host
      port: process.env.EMAIL_PORT, // port
      // secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Your username
        pass: process.env.EMAIL_PASS, // Replace with your email password
      },
      // tls: {
        // tls_certcheck: false,
        // rejectUnauthorized: false, // Allow self-signed certificates (use only for testing)
      // },
    });
    await transporter.sendMail({
      from: `"EVE Solution" <${process.env.EMAIL_USER}>`, // Sender address
      to: email, // Recipient email
      subject: "New ROI Tailored Report", // Subject line
      text: `Hello EVE Solution Team,

A new investment inquiry has been submitted through the website. Here are the details:

 ● Name: ${fname + " " + lname}
 ● Phone Number: ${code + phone}
 ● Email Address: ${email}
 ● Location: ${location}
 ● Investment Interests: ${investment}
 ● Budget Range: ${startRange + " - " + endRange}

Please review this inquiry and respond to the user promptly.


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
