import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDataBase from "./config/database.js";
import cors from "cors";
import nodemailer from "nodemailer";
import blogRoutes from "./routes/apiRouter.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import categoryRouter from "./routes/categoryRouter.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import locationRouter from "./routes/locationRouter.js";
import compression from "compression";

dotenv.config();
connectDataBase();

const app = express();

app.use(compression())
app.use(cors());
app.use(express.json({ limit: "1500kb" }));
 
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use('/api/categories', categoryRouter);
app.use("/", blogRoutes);
app.use('/api/locationpages', locationRouter);


let transport = {
  service: "hotmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
};
let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/send-appointment", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let formType = req.body.formType;
  let phone = req.body.phoneNum;
  let message = req.body.message;
  let appointment = req.body.appointmentType;
  let date = req.body.date;
  let content = `Form-type: ${formType} \n Appointment type: ${appointment} \n date: ${date} \n name: ${name} \n email: ${email} \n phone number: ${phone} \n message: ${message}`;

  let mail = {
    from: name,
    to: process.env.USER,
    subject: "New Message From Creative Fusion",
    text: content,
    replyTo:email
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});


app.post("/send-contact-form-main", (req, res, next) => {
  let formType = req.body.formType;
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let phone = req.body.phoneNum;
  let content = `Form-type: ${formType} \n name: ${name} \n email: ${email} \n phone number: ${phone} \n message: ${message}`;

  let mail = {
    from: name,
    to: process.env.USER,
    subject: "New Message From Creative Fusion",
    text: content,
    replyTo:email
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

app.post("/send-quote", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let message = req.body.message;
  let formType = req.body.formType;
  let content = `Form-type: ${formType} \n name: ${name} \n email: ${email} \n phone number: ${phone} \n message : ${message}`;

  let mail = {
    from: name,
    to: process.env.USER,
    subject: "New Message From Creative Fusion",
    text: content,
    replyTo:email
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});
app.post("/send-plan-quote", (req, res, next) => {
  let q1 = req.body.q1;
  let q2 = req.body.q2;
  let q3 = req.body.q3;
  let q4 = req.body.q4;
  let q5 = req.body.q5;
  let formType = req.body.formType;
  let question = [
    "Is there an existing IT team at your company?",
    "How many operational locations does your business have?",
    "What is the current number of servers in use?",
    "How many users are in need of support?",
    "What volume of data requires backup? (in Terabytes)"
  ]

  let content = `Form-type: ${formType} \n ${question[0]}: \n ${q1} \n ${question[1]}: \n ${q2} \n ${question[2]}: \n ${q3} \n ${question[3]} : \n ${q4} \n ${question[4]} : \n ${q5}`;

  let mail = {
    from: process.env.USER,
    to: process.env.USER,
    subject: "New Message From Creative Fusion",
    text: content,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

app.post("/send-newsletter", (req, res, next) => {
  let email = req.body.email;
  let formType = req.body.formType;
  let content = `Form-type: ${formType} \n client-email: ${email}`;

  let mail = {
    to: process.env.USER,
    subject: "New Message From Creative Fusion",
    text: content,
    replyTo:email
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

  
const __dirname=path.resolve()

// HTTPS Redirection Middleware
if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}



app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve(), "/frontend/build"))); 
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(path.resolve(), "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running!");
  });
}



app.use(notFound);
app.use(errorHandler);

const Port = process.env.PORT || 5000;


app.listen(
  Port,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${Port}`)
);