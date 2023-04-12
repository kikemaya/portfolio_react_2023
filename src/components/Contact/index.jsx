import React from "react";

// import contact data
import { contact } from "../../data";

import emailjs from "@emailjs/browser";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const Contact = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_ID_E
      )
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: "Your email was sent successfully!",
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        Toast.fire({
          icon: "error",
          title:
            "There was a problem sending your email message. Please try again later...",
        });
      });
  };

  return (
    <section className="section bg-primary bg-hero-pattern" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-12 section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div
            className="flex flex-1 flex-col
            items-start space-y-8 mb-12
            lg:mb-0 lg:pt-2"
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;

              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>

                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <form className="space-y-8 w-full max-w-[780px]" onSubmit={sendEmail}>
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
              <input
                className="input"
                type="email"
                name="user_email"
                placeholder="Your email"
                required
              />
            </div>

            <input
              className="input"
              type="text"
              placeholder="Subject"
              name="user_subject"
            />

            <textarea
              className="textarea"
              placeholder="Your message"
              name="user_message"
              required
            ></textarea>

            <button
              className="btn btn-lg
            bg-accent hover:bg-secondary-hover"
            >
              Let's chat!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
