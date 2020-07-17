import React from 'react'

import logo from '../images/gatsby-icon.png'
import appstore from '../images/appstore-min.jpg'
import googleplay from '../images/googleplay.jpg'
import facebook from '../images/facebook.jpg'
import linkedin from '../images/linkedin.jpg'
import youtube from '../images/youtube.jpg'



// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

export default function Footer() {
  return (
    <div className='footer'>
      <div>
        <div className='footerMain'>
          <ul>
            <h3>Main</h3>
            <li>
              <a href='/'> Home </a>
            </li>
            <li>
              <a href='/architectsInsulation/'> Insulation </a>
            </li>
            <li>
              <a href='/architectsRoofing/'> Roofing </a>
            </li>
            <li>
              <a href='/projects/'> Projects </a>
            </li>
            <li>
              <a href='/details/'> Details & Drawings </a>
            </li>
            
          </ul>
        </div>
      </div>
      
      <div className='footerQuestions'>
        <h3 className='questionsTitle'>Questions? Call Us.</h3>
        <p>We’re here to help. Call us to speak with a foam specialist or visit our corporate website.</p>
        <h3 className='number'>800-828-1394</h3>
        <a className='domain'href='http://swdurethane.com/'> swdurethane.com </a>
      </div>
      <div className='ogLogoContainer'>
      <div className='logosContainer'>
        
        <a href='https://www.youtube.com/channel/UChAwoFSfTCE5gv5YCUR-6VA' target='_blank rel='noreferrer>
          <img className='socialLogo1' src={youtube}></img>
        </a>
        <a href='https://www.facebook.com/swdurethane/' target='_blank' rel='noreferrer'>
          <img className='socialLogo'src={facebook}></img>
        </a>
        <a href='https://www.linkedin.com/company/swd-urethane/?viewAsMember=true'target='_blank' rel='noreferrer'>
          <img className='socialLogo' src={linkedin}></img>
        </a>
        </div>
        </div>
    </div>
  )
}
