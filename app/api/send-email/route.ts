import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { to, subject, replyTo, data } = body;

    // Configure your email transport
    const transporter = nodemailer.createTransport({
      // Your email service configuration
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587,
      secure: false,
      auth: {
        user: "AKIASMLEQIZA4NP7ZB53",
        pass: "BHEXu6LFdRaKVJ0Ggkirl18PeQfLGGVaQ539k5Ly4MNL",
      },
    });

    await transporter.sendMail({
      from: replyTo,
      to,
      subject,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Type:</strong> ${data.type}</p>
        <p><strong>Date:</strong> ${data.date}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
