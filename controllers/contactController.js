const Contact = require("../models/contact");
const mailer = require("../lib/email");

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class ContactController {
    static sendContactRequest(req, res){

        // try {
            const contactRequest = new Contact(req.body);
            console.log(contactRequest);
           // mailer.sendEmail(contactRequest);
        //         .then(()=> {
        //             console.log("it worked!");
        //             res.redirect("/");
        //         })
        //         .catch(error => {
        //             console.log(`it didn't work because ${error}`);
        //             res.redirect("/");
        //         });

        // } catch (err){
        //     console.log(err);
        //     res.redirect("/");
        // }

        
   // static sendEmail(obj){
        //  return new Promise((resolve, reject) => {
              const msg = {
                  to: 'cassandrafrimpong@gmail.com',
                  from: contactRequest.Email,
                  subject: "A new website contact request",
                  text: "test",
                  html: `<p> ${contactRequest.firstName} ${contactRequest.lastName} has sent you an email</p>
                  <p> ${contactRequest.message} </p> `
              };
              //sgMail.send(msg);
              sgMail.send(msg).then(() => {
                  res.redirect("/");
                  resolve();
              }).catch((error) => {
                  console.log('error', error);
                  res.redirect("/");
                  
                  reject();
              });
       //  });
     // }
    }
}

module.exports = ContactController;