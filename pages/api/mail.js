const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const MY_EMAIL = process.env.MY_EMAIL;
const EMAIL_SERVICE = process.env.EMAIL_SERVICE;
const AUTH_TYPE = process.env.AUTH_TYPE;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

async function sendMail(body, output) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: EMAIL_SERVICE,
            auth: {
                type: AUTH_TYPE,
                user: MY_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        let mailOptions = {
            from: `"${body.name}" <${body.email}>`,
            to: MY_EMAIL,
            subject: body.subject, // Subject line
            text: body.message, // plain text body
            html: output, // html body
        }
        
        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions, (error, info) => {
            if(error)
                return console.log(error);
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        });

    } catch (error) {
        return error;
    }
}

export default async(req, res) => {

    const body = JSON.parse(req.body);
    console.log(body);

    const output = `
        <p>You've got a new ${body.type} request from your website</p>
        <h3>Contact details</h3>
        <ul>
            <li>Name: ${body.name}</li>
            <li>Email: ${body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${body.message}</p>
    `;

    sendMail(body, output).then(
        result => {
            res.status(200).json({status: 'Ok'});
        },
        error => {
            console.log(error.message);
        }
    );
}