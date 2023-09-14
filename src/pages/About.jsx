import ph4 from "../_assets/img/ph4.jpg";
import ph1 from "../_assets/img/ph1.jpg";
import {
  BookOpenIcon,
  MusicalNoteIcon,
  PresentationChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

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

function About() {
  return (
    <div className="container mx-auto mt-10 mb-20 max-w-6xl px-6 sm:mb-36 lg:px-0">
      <section className="header">
        <h3 className="bg-red-200x text-3xl font-medium leading-10 text-blue-primary sm:text-center lg:text-[40px] lg:leading-[3.5rem]">
          About
        </h3>
      </section>

      <section className="about-intro mt-10 flex flex-col gap-14 sm:mt-14 sm:flex-row">
        <div className="about-intro__content w-full space-y-6">
          <p>
            Skyview Public School was founded in January 2023. It is one of the
            most advanced school that provides co-educational English medium
            Dayschooling and Boarding facilities with the highest standard of
            academic excellence. The school has a conducive atmosphere where
            children enjoy learning. Through many activities, they gradually
            emerge as global leaders.
          </p>
          <p>
            Students are offered a comprehensive preparation in academics,
            spirituality, creativity, sports and recreation. A pragmatic and
            qualitative education is imparted for holistic development of the
            child. Spacious, airy classrooms supported by e-learning, well
            equipped composite laboratory, well stacked library, multimedia
            room, indoor as well as outdoor games facilities, art studio,
            gymnasium, dining room, etc. are some of the provisions here at
            Skyview Public School.
          </p>
        </div>
        <div className="about-intro__img w-full">
          <img src={ph1} alt="student's image" loading="lazy" />
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
    </div>
  );
}

export default About;
