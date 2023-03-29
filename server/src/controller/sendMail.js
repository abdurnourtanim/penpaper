const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const sendMail = async (req, res) => {
  const { userEmail, username } = req.body;

  try {
    const config = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    };

    const transporter = await nodemailer.createTransport(config);

    const MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Mailgen",
        link: "https://mailgen.js/",
      },
    });

    const response = {
      body: {
        name: username,
        intro: "Your bill has arrived!",
        table: {
          data: [
            {
              item: "Nodemailer Stack Book",
              description: "A Backend application",
              price: "$10.99",
            },
          ],
        },
        outro: "Looking forward to do more business",
      },
    };

    const mail = MailGenerator.generate(response);

    const message = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: "Place Order",
      html: mail,
    };

    transporter
      .sendMail(message)
      .then(() => {
        return res.status(201).json({
          msg: "you should receive an email",
        });
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;
