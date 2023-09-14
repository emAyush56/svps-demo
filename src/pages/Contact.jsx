function Contact() {
  return (
    <div className="container mx-auto mt-10 mb-20 max-w-6xl px-6 sm:mb-36 lg:px-0">
      <section className="header">
        <h3 className="bg-red-200x text-3xl font-medium leading-10 text-blue-primary sm:text-center lg:text-[40px] lg:leading-[3.5rem]">
          Contact
        </h3>
      </section>

      <section className="mt-10 flex flex-col gap-y-12 sm:mt-14">
        <div className="w-full">
          <iframe
            className="h-96 w-full border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6528938869587!2d89.67111720000001!3d26.3377369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2f5f190fee3d3%3A0x87b749a4168639a8!2sSKYVIEW%20PUBLIC%20SCHOOL!5e0!3m2!1sen!2sin!4v1669375371775!5m2!1sen!2sin"
          ></iframe>
        </div>

        <div className="mt-4 h-full">
          <p className="text-base text-gray-primary sm:text-center md:text-lg">
            <span className="font-semibold">Address:</span> Near Kalibari GS
            Steel Furniture, Uttar Andaran Fulbari, Tufanganj - 736160,
            Coochbehar.
          </p>

          <div className="mt-10 flex flex-col justify-between gap-4 text-gray-primary sm:mt-14 sm:flex-row sm:items-center md:gap-6">
            <a
              href="tel:8653554323"
              className="text-lg font-semibold underline decoration-2 underline-offset-4 md:text-2xl lg:text-3xl"
            >
              WhatsApp
            </a>
            <a
              href="tel:8653554323"
              className="text-lg font-semibold underline decoration-2 underline-offset-4 md:text-2xl lg:text-3xl"
            >
              +91-86535-54323
            </a>

            <a
              href="mailto:skyviewpublicschool@gmail.com"
              className="text-lg font-semibold underline decoration-2 underline-offset-4 md:text-2xl lg:text-3xl"
            >
              skviewpublicschool@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
