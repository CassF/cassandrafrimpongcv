//requires sendgrid, with the sendgrid function (API key)
// const sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY);
// const request = sg.emptyRequest();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


class Email {

    static sendEmail(obj){
      //  return new Promise((resolve, reject) => {
            const msg = {
                to: 'cassandrafrimpong@gmail.com',
                from: obj.Email,
                subject: "A new website contact request",
                text: "test",
                html: `<p> ${obj.firstName} ${obj.lastName} has sent you an email</p>
                <p> ${obj.message} </p> `
            };
            sgMail.send(msg);
            // sgMail.send(msg).then(() => {
            //     res.redirect("/");
            //     resolve();
            // }).catch((error) => {
            //     console.log('error', error);
            //     reject();
            // });
     //  });
    }
}


module.exports = Email;