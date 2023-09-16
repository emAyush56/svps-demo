import {
  BookOpenIcon,
  MusicalNoteIcon,
  PresentationChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import BannerImg from "../_assets/img/boy-in-blue-t-min.jpg";
import photosHighlight from "../__edits/edits";

const featuresDescribed = [
  {
    name: "☑ CCTV surveillance",
    description:
      "Our prominent surveillance provides a safe and secure environment on the school premises. The authority can keep a close watch on students and staff on regular basis, to moderate and supervise the activities. We will ensure proper safety. ",
  },
  {
    name: "☑ Smart classroom facility",
    description:
      "The smart-classroom comprises of interactive whiteboard, computers, and projectors. As a school of the 21st century, smart and effective use of technology is the prime goal of the hour. It will our students learn and understand the concepts interactively.",
  },
  {
    name: "☑ School buses with GPS",
    description:
      "Our advanced GPS tracking system ensures the safety of our students traveling by bus and other transport provided by the school authority. It keeps the school administration informed about every location in real-time. Our student's safety is on top priority.",
  },
  {
    name: "☑ Spacious playground",
    description:
      "The school playground is one of the most important things to keep students fit, healthy and motivated. Playing creates a positive psychological effect on students' minds. Playing and outdoor activities will help our students to boost their confidence.",
  },
];

const featuresHighlight = [
  {
    name: "CBSE based curriculum",
    icon: BookOpenIcon,
  },
  {
    name: "Qualified faculty ",
    icon: UsersIcon,
  },
  {
    name: "Extracurricular activites",
    icon: MusicalNoteIcon,
  },
  {
    name: "Free demo class",
    icon: PresentationChartBarIcon,
  },
];

function Home() {
  return (
    <div className="container mx-auto my-20 max-w-6xl px-6 lg:my-36 lg:px-0">
      <section className="hero mx-auto text-center sm:max-w-3xl">
        <h1 className="hero-text w-full text-6xl font-medium leading-[4.5rem] text-gray-primary lg:text-[80px] lg:leading-[6rem]">
          Learning <br /> Towards Excellence
        </h1>
        <p className="hero-desc mt-6 w-full text-base text-gray-primary lg:text-lg">
          As a school of the 21st century, we intend to guide our students into
          pursuing excellence. Our course curiculum is{" "}
          <span className="font-semibold underline decoration-2 underline-offset-4">
            based on CBSE.
          </span>
        </p>
      </section>

      <section className="gallery mt-28 lg:mt-36">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-14 lg:gap-x-20">
          {photosHighlight.map((item) => {
            return (
              <div
                key={item.id}
                className="group overflow-hidden bg-gray-alt duration-300 ease-in-out hover:bg-white"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="content p-8">
                  <h3 className="select-none text-3xl font-medium leading-10 text-gray-primary lg:text-4xl lg:leading-[3rem]">
                    {item.title}
                  </h3>
                  <p className="mt-5 select-none text-base font-medium text-gray-primary md:text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="featuresDescribed mt-20 lg:mt-40">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-14 lg:gap-x-20">
          {featuresDescribed.map((item) => {
            return (
              <div key={item.name}>
                <h3 className="text-3xl font-medium leading-10 text-blue-primary lg:text-4xl lg:leading-[3rem]">
                  {item.name}
                </h3>
                <p className="mt-5 text-base text-gray-primary md:text-lg">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="banner mt-20 lg:mt-28">
        <div className="banner_board group flex flex-col items-center overflow-hidden bg-gray-alt pb-4 duration-300 ease-in-out hover:bg-white lg:flex-row lg:pb-0">
          <img
            src={BannerImg}
            alt="Student in blue uniform holding a book"
            className="duration-300 ease-in-out group-hover:scale-105 lg:w-1/2"
          />
          <div className="banner__content px-8 py-6 text-gray-primary lg:px-16 lg:py-10">
            <h3 className=" text-3xl font-medium leading-10 lg:text-[40px] lg:leading-[3.5rem]">
              Courses open from class Nursery to class V
            </h3>
            <p className="mt-6 text-base font-medium lg:text-lg">
              We propose to be 10+2 as we grow in the near future. However, our
              courses are currently available up to the 5th standard (class V).
            </p>
            <p className="mt-6 text-base font-medium lg:text-lg">
              Have queries? Call us at{" "}
              <a
                href="tel:8653554323"
                className="cursor-pointer font-semibold underline decoration-2 underline-offset-4"
              >
                +91-86535-54323
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 md:mt-28">
        <div className="grid gap-y-6 gap-x-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-20">
          {featuresHighlight.map((item) => {
            return (
              <div
                key={item.name}
                className="flex w-full items-center gap-8 md:gap-5"
              >
                <div className="icon ">
                  <item.icon
                    className={
                      "h-12 w-12 stroke-1 text-gray-primary  md:h-14 md:w-14"
                    }
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-primary md:text-2xl">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="contact"
        className="quickContact mt-14 md:mt-36 lg:h-[315px]"
      >
        <div className="quickContact__warp flex h-full flex-col gap-y-12 md:flex-row md:gap-4">
          <div className="quickContact__mapEmbed h-full w-full basis-1/2">
            <iframe
              className="h-full w-full border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6528938869587!2d89.67111720000001!3d26.3377369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2f5f190fee3d3%3A0x87b749a4168639a8!2sSKYVIEW%20PUBLIC%20SCHOOL!5e0!3m2!1sen!2sin!4v1669375371775!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
          <div className="quickContact__contactDetails h-full basis-1/2 lg:px-16">
            <h3 className="text-3xl font-medium leading-10 text-blue-primary lg:text-[40px] lg:leading-[3.5rem]">
              Contact Us
            </h3>
            <p className="mt-5 text-base text-gray-primary md:text-lg">
              Address: Near Kalibari GS Steel Furniture, Uttar Andaran Fulbari,
              Tufanganj - 736160, Coochbehar.
            </p>
            <div className="quickContact__contactLinks mt-5 flex h-full flex-col gap-4 text-gray-primary md:gap-6">
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
        </div>
      </section>
    </div>
  );
}

export default Home;
