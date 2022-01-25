import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

// type guard function to check if error object has message property
function isError(something: any): something is NodeJS.ErrnoException {
  return something instanceof Error;
}
export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log(typeof req.body.message);
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'heiner.s.behrends@gmail.com',
    from: 'heinerbehrends@hotmail.com',
    subject: `A new message from ${req.body.name} arrived`,
    html: `Emailadres: ${req.body.email} <br /> Message: ${req.body.message}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error: any) => {
      if (isError(error)) {
        console.error(error);
      }
    });
  res.status(200).json({ message: 'Message was sent succesfully' });
}
