




import Button from "../../HomePage/BannerHomePage/BannerButton";
import './index.css';
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function EmailForm() {
  const validationSchema = Yup.object({
    fullName: Yup.string().min(4, 'Must have at least 4 characters').max(10, 'Must have at most 10 characters'),
    email: Yup.string().email('Invalid email address'),
    company: Yup.string().min(4, 'Must have at least 4 characters').max(10, 'Must have at most 10 characters'),
    subject: Yup.string().min(4, 'Must have at least 4 characters').max(10, 'Must have at least 10 characters'),
    message: Yup.string().min(4, 'Must have at least 4 characters').max(10, 'Must have at least 10 characters'),
  });

const [isSubmitted, setIsSubmitted] = useState(false);
  
  
  const handleSubmit = (values) => {
    console.log(values);
    setIsSubmitted(true)
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        company: '',
        subject: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="email-form">
          {!isSubmitted ? (
            <>
          <label className="LabelInput"><span className="titleInput">Full Name*</span>
          <Field
            title="Full Name*"
            name="fullName"
            type="text"
            placeholder="Your Full Name"
          />
         {
           touched?.email && <ErrorMessage component={"h4"} name="fullName" className="errorsInput"/>
           }
          </label>
          <label className="LabelInput"><span className="titleInput">Your Email*</span>
          <Field
            title="Your Email*"
            name="email"
            type="email"
            placeholder="example@yourmail.com"
          />
           {
           touched?.email && <ErrorMessage component={"h4"} name="email" className="errorsInput"/>
           }
          </label>
         
          <label className="LabelInput"><span className="titleInput">Company*</span>
          <Field
            title="Company*"
            name="company"
            type="text"
            placeholder="your company name here"
          />
           {
           touched?.email && <ErrorMessage component={"h4"} name="company" className="errorsInput"/>
           }
          </label>
          
          <label className="LabelInput"><span className="titleInput">Subject*</span>
          <Field
            title="Subject*"
            name="subject"
            type="text"
            placeholder="how can we help"
          />
           {
           touched?.email && <ErrorMessage component={"h4"} name="subject" className="errorsInput"/>
           }
          </label>
          
          <label className="LabelInput"><span className="titleInput">Message*</span>
          <Field
            title="Message*"
            name="message"
            as = "textarea"
            placeholder="hello there,i would like to talk about how to..."
            className = "textAreaContactUs"
          />
          {
           touched?.email && <ErrorMessage component={"h4"} name="message" className="errorsInput"/>
           }
          </label>
          <Button className="emailBtn" text="Send Message" style={{ color: "#FFFFFF", backgroundColor: "#274C5B" }} />
           </>
             ): (
            <p>Thank you! Your form has been submitted.</p>)
          }
        </Form>
      )}
    </Formik>
  );
}






























