import nodemailer from 'nodemailer'



 export const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "dipakpunde2000@gmail.com",
          pass: "dhcd bqxr okiw hcmd",
          //  pass: "fkiq ubgr jjpx dobk",
          
        },
      });