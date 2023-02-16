import nodemailer from "nodemailer";

const Email = (options) => {
    let transpoter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    transpoter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
    });
};

const EmailSender = ({ name, email, message }) => {
    const options = {
        from: `Portfolio 🛍️ <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: "Message From Portfolio",
        html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
          <a href="${process.env.CLIENT_URL}" ><img
              src="https://res.cloudinary.com/zpune/image/upload/v1652256707/random/favicon_hybtfj.png"
              style="width: 100%; height: 70px; object-fit: contain"
            /></a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              Form Portfolio Murtazina Diana
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>name: <b>${name}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Message: <i>${message}</i></p>
            </div>
          </div>
        </div>
      </div>
        `,
    };

    Email(options);
};

export default EmailSender;
