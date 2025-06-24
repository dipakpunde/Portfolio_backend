import {
  transporter
} from "../../nodemailer/index.js";


export const ContactUs = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    message
  } = req.body;

  // HTML Email Design
  const emailContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background-color: #4CAF50;
            color: #ffffff;
            padding: 20px;
            border-radius: 8px 8px 0 0;
          }
          .header h2 {
            margin: 0;
            font-size: 24px;
          }
          .section {
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
          }
          .section:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #333;
          }
          .value {
            color: #555;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #999;
            padding-top: 20px;
          }
          .footer a {
            color: #4CAF50;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Us Submission</h2>
          </div>
          <div class="section">
            <p><span class="label">Full Name:</span> <span class="value">${firstName} ${lastName}</span></p>
          </div>
          <div class="section">
            <p><span class="label">Email:</span> <span class="value">${email}</span></p>
          </div>
          <div class="section">
            <p><span class="label">phone:</span> <span class="value">${phone}</span></p>
          </div>
          <div class="section">
            <p><span class="label">Message:</span></p>
            <p class="value">${message}</p>
          </div>
          <div class="footer">
            <p>Thank you for your interest. We will get back to you soon!</p>
            <p>If this message was not intended for you, please <a href="">contact support</a>.</p>
          </div>
        </div>
      </body>
    </html>
  `;


  // const mailOptions = {
  //   from: email, 
  //   to: 'bhujbalyukta2001@gmail.com', 
  //   subject: 'New Contact Us ',
  //   html: emailContent, 
  // };

  const mailOptions = {
    from: `"Portfolio Website" <dipakpunde2000@gmail.com>`, // your own Gmail (sender)
    to: "dipakpunde2000@gmail.com", // also you (receiver)
    replyTo: email,
    subject: "New Contact Us Submission",
    html: emailContent,
  };


  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({
        message: 'Error sending email',
        error
      });
    }
    return res.status(200).json({
      message: 'Your message has been successfully submitted!',
      info
    });
  });



}