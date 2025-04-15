import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received data:", body); // Log the received data

    const { name, email, message } = body;

    // Check if all required fields are present
    if (!name || !email || !message) {
      console.error("Missing fields:", {
        name,
        email,
        message,
      });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ["noaligpitan@gmail.com", "mendozaliraann@gmail.com", email],
      subject: "New transaction process.",
      html: `
        <h2 style="color: black">Thank you for message me. ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product:</strong> ${message}</p>
        <img src="https://votalonlj1l4oc3d.public.blob.vercel-storage.com/nayomi-logo-n33RJAwi6y7rIFSti0zSc7VVQCMTAb.jpg" alt="Payment Proof" style="max-width: 10%;" />
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
