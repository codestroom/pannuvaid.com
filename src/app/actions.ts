"use server";

import nodemailer from "nodemailer";

interface EnquiryInput {
  name: string;
  phone: string;
  treatment: string;
  message?: string;
}

export async function sendEnquiry(data: EnquiryInput) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Pannu Vaid Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Consultation Enquiry: ${data.name}`,
      text: `
New Appointment/Enquiry received from the website:

Name: ${data.name}
Phone: ${data.phone}
Concern/Treatment: ${data.treatment}
Message: ${data.message || "N/A"}

Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #fcfdfc;">
          <h2 style="color: #2e6f1c; margin-bottom: 20px;">New Consultation Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #555; width: 150px;">Name:</td>
              <td style="padding: 10px 0; color: #333;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone Number:</td>
              <td style="padding: 10px 0; color: #333;"><a href="tel:${data.phone}" style="color: #2e6f1c; text-decoration: none; font-weight: bold;">${data.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Treatment/Concern:</td>
              <td style="padding: 10px 0; color: #333; font-weight: bold;">${data.treatment}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #333; line-height: 1.5;">${data.message || "N/A"}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <p style="font-size: 11px; color: #888; text-align: center; margin: 0;">
            This email was sent automatically from the Pannu Vaid website form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Unable to send email at this time." };
  }
}
