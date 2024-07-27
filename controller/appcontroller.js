const nodemailer =require('nodemailer')
const Mailgen =require('mailgen')
const dotenv =require('dotenv')
dotenv.config()

{/**const sendmessage=async (req,res)=>{
    const {message}=req.body
    let testAccount =await nodemailer.createTestAccount()
    let transporter =nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
    });

    let messag ={
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "hello", // Subject line
    text: "successfuly", // plain text body
    html: "<b>successfuly</b>", 
    }
    transporter.sendMail(messag).then((info)=>{
        return res.status(201).json({
            msg:"message send successfully",
            preview:nodemailer.getTestMessageUrl(info)
        })
    }).catch(error=>{
        return res.status(500).json({
            msg:"some thing went wrong"
        })
    })
    return res.status(500).json({
        msg:"something went wrong"
    })
}**/}



const sendmess=async(req,res)=>{
    const {email,message,name}=req.body;

    if (!email || !message || !name){
       return res.status(205).json({
        success:false,
        msg:"Please Enter all field"
       })
    }
      let config={
       service:'gmail',
       auth:{
           user:`${process.env.Email}`,
           pass:`${process.env.password}`
       }
      }
      let transporter=nodemailer.createTransport(config);
      let Mailgenerator=new Mailgen({
       theme:"default",
       product:{
           name:'Mailgen',
           link:'https://mailgen.js/'
       }
      })
      let responce={ 
       body:{
           name:",Shankar kumar",
           intro:"New message arrived from Portfolio",
           table:{
            data:[
                {
                    Name:name,
                    email:email,
                    message:message,
                }
            ]
        }, 
           outro:"Thats All Shankar "
       }
      };
      let mail=Mailgenerator.generate(responce)
       let messagss={
           from : process.env.Email,
           to: process.env.Email,
           subject:"Contact from portfolio",
           html:mail
       }
   
      await transporter.sendMail(messagss).then(()=>{
           return res.status(201).json({
            success:true,
               msg:"Message send successfully"
           })
       }).catch(error=>{
           return res.status(500).json({
               msg:"can't send mail at the moment",
               error,
           })
       })
   }

module.exports=sendmess 