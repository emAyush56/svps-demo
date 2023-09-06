import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logoBlue from "../_assets/img/logo-blue.png";
import {
  XCircleIcon,
  Bars2Icon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Campus",
    href: "/campus",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsMenuActive(false);
  }

  function openMenu() {
    setIsMenuActive(true);
  }

  return (
    <header className="relative">
      <div className="p mx-auto flex max-w-[90rem] items-center justify-between p-4 lg:px-6 lg:py-8">
        <div className="leftHeader flex items-center gap-10">
          <Link to="/" className="logo flex items-center gap-3 lg:gap-4">
            <img
              src={logoBlue}
              alt="Skyview Public School Logo"
              className="h-14 lg:h-[4.6rem]"
            />
            <div className="logo__text flex flex-col items-start font-medium tracking-wide text-gray-primary lg:items-center">
              <h5 className="text-2xl lg:text-4xl">SKYVIEW</h5>
              <h5 className="mt-[-5px] text-lg lg:mt-[4px] lg:text-xl">
                PUBLIC SCHOOL
              </h5>
            </div>
          </Link>
          <div className="topNotice relative flex items-center">
            <div
              className="topNotice__icon mt-2 cursor-pointer lg:absolute lg:top-2 lg:mt-0"
              onClick={openModal}
            >
              <span className="absolute top-0 right-0 h-3 w-3 animate-ping rounded-full bg-blue-primary"></span>
              <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-blue-primary"></span>
            </div>
            <div
              onClick={openModal}
              className="topNotice__title ml-4 hidden cursor-pointer text-lg lg:block"
            >
              Admissions Open For Session 2023
            </div>
          </div>

          {/* MODAL */}

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-30" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h4"
                        className="text-xl font-medium leading-6 text-gray-900"
                      >
                        Admissions Open For Session 2023
                      </Dialog.Title>
                      <div className="mt-6">
                        <p className="text-base text-gray-500">
                          Admissions are open for session 2023-24. Course
                          admissions are available from class Nursery to class
                          V.{" "}
                          <span className="font-semibold underline decoration-2 underline-offset-4">
                            FREE demo classes
                          </span>{" "}
                          are available before admission. Please visit the
                          school office or call to know more.
                        </p>
                      </div>

                      <div className="mt-6">
                        <a
                          href="tel:8653554323"
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          <PhoneArrowUpRightIcon className="mr-3 h-5 w-5" />
                          +91-86535-54323
                        </a>
                      </div>

                      <div className="fixed top-0 right-4 mt-4 ">
                        <XCircleIcon
                          onClick={closeModal}
                          className="h-6 w-6 cursor-pointer text-gray-400 transition-all ease-in-out hover:text-gray-primary"
                        />
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
        <nav className="hidden gap-8 text-lg lg:flex">
          {navLinks.map((item) => {
            return (
              <Link
                key={item.name}
                className="hover-underline-animation cursor-pointer"
                to={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU */}
        <nav
          className={`fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-8 bg-gray-primary text-xl text-white transition-all lg:hidden ${
            isMenuActive ? "translate-y-0" : "translate-y-[-100vh]"
          }`}
        >
          {navLinks.map((item) => {
            return (
              <a key={item.name} className="cursor-pointer" href={item.href}>
                {item.name}
              </a>
            );
          })}

          <button onClick={closeMenu}>
            <XCircleIcon className="fixed top-7 right-5 h-7 w-7 cursor-pointer text-gray-200" />
          </button>
        </nav>
        <button className="lg:hidden" onClick={openMenu}>
          <Bars2Icon className="h-6 w-6 cursor-pointer text-gray-primary" />
        </button>
      </div>
    </header>
  );
}
