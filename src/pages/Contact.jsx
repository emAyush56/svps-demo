import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function Contact() {
  const [contactDetails, setContactDetails] = useState({
    fullName: "",
    emailOrPhone: "",
    subject: "",
    message: "",
  });

  const handleContactDetailsChange = (event) => {
    setContactDetails((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmitContact = (event) => {
    event.preventDefault();
    console.log("contact form submitted");
    setContactDetails({
      fullName: "",
      emailOrPhone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto mt-10 mb-20 max-w-6xl px-6 md:mb-36 lg:px-0">
      <section className="header">
        <h3 className="bg-red-200x text-3xl font-medium leading-10 text-blue-primary md:text-center lg:text-[40px] lg:leading-[3.5rem]">
          Contact
        </h3>
      </section>

      <section className="mt-8 flex flex-col gap-y-12 md:mt-14">
        <div className="form-info flex flex-col-reverse gap-14 md:flex-row md:gap-8">
          <div className="left space-y-8 md:w-1/2 md:pt-1 md:pr-4">
            <p className="text-gray-primary">
              <span className="font-semibold">Address:</span> Near Kalibari GS
              Steel Furniture, Uttar Andaran Fulbari, Tufanganj - 736160,
              Coochbehar.
            </p>

            <div className="flex flex-col justify-between gap-2 text-gray-primary">
              <a
                href="tel:8653554323"
                className="w-fit font-semibold underline decoration-2 underline-offset-4"
              >
                WhatsApp
              </a>
              <a
                href="tel:8653554323"
                className="w-fit font-semibold underline decoration-2 underline-offset-4"
              >
                +91-86535-54323
              </a>

              <a
                href="mailto:skyviewpublicschool@gmail.com"
                className="w-fit font-semibold underline decoration-2 underline-offset-4"
              >
                skviewpublicschool@gmail.com
              </a>
            </div>

            <div className="map">
              <iframe
                className="h-80 w-full border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6528938869587!2d89.67111720000001!3d26.3377369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2f5f190fee3d3%3A0x87b749a4168639a8!2sSKYVIEW%20PUBLIC%20SCHOOL!5e0!3m2!1sen!2sin!4v1669375371775!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>

          <div className="right md:w-1/2">
            <form onSubmit={handleSubmitContact} className="space-y-4">
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <div className="fullName w-full">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    name="fullName"
                    className="mt-2 block w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
                    type="text"
                    value={contactDetails.fullName}
                    onChange={handleContactDetailsChange}
                    placeholder="Full Name"
                  />
                </div>
                <div className="emailOrPhone w-full">
                  <label htmlFor="emailOrPhone" className="text-sm font-medium">
                    Email or Phone
                  </label>
                  <input
                    name="emailOrPhone"
                    className="mt-2 block w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
                    type="text"
                    value={contactDetails.emailOrPhone}
                    onChange={handleContactDetailsChange}
                    placeholder="Email or Phone number"
                  />
                </div>
              </div>

              <div className="subject">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  name="subject"
                  className="mt-2 block w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
                  type="text"
                  value={contactDetails.subject}
                  onChange={handleContactDetailsChange}
                  placeholder="You full name"
                />
              </div>

              <div className="message">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={10}
                  value={contactDetails.message}
                  onChange={handleContactDetailsChange}
                  placeholder="Your message"
                  className="mt-2 block w-full resize-none rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
                ></textarea>
              </div>
              <button className="h-10 w-full rounded border border-blue-700 bg-blue-700 px-4 py-1 text-white  transition-all hover:border-blue-800 hover:bg-blue-800 md:h-12 md:px-8 md:text-base">
                {false ? <LoadingSpinner /> : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
