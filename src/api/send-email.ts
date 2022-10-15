import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

// type guard function to check if error object has message property
function isError(something: any): something is NodeJS.ErrnoException {
  return something instanceof Error;
}
export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'heiner.s.behrends@gmail.com',
    from: 'heinerbehrends@hotmail.com',
    subject: `Je hebt een nieuw bericht van ${req.body.name}`,
    html: `Emailadres van de afzender: ${req.body.email} <br /> <p>${req.body.message}</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: 'Het bericht is succesvol verzonden' });
    })
    .catch((error: any) => {
      if (isError(error)) {
        res.status(500).json(error);
      }
    });
}
