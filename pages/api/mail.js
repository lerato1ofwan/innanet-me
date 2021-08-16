const MY_EMAIL = process.env.MY_EMAIL;
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async(req, res) => {
    const body = JSON.parse(req.body);

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

    const msg = {
        to: MY_EMAIL, 
        from: MY_EMAIL,
        subject: body.subject,
        text: body.message,
        html: output,
      }

    sgMail.send(msg).then(
        () => {
            console.log('Email sent');
        })
        .catch((error) => {
            console.error(error.response.body);
        }
    );

    res.status(200).json({status: 'Ok'})
}