import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoBlue from "../_assets/img/logo-blue.png";
import {
  XCircleIcon,
  Bars2Icon,
  PhoneArrowUpRightIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import axios from "../_api/axios";
import LoadingSpinner from "./LoadingSpinner";

const URL_GET_LATEST_NOTICE = "/notice/find";
const navLinks = [
  {
    name: "Notices",
    href: "/notices",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const location = useLocation();
  const currentRoute = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [latestNotice, setLatestNotice] = useState([]);
  const [noticeLoader, setNoticeLoader] = useState(false);

  const getLatestNotice = async () => {
    setNoticeLoader(true);
    try {
      const res = await axios.get(URL_GET_LATEST_NOTICE, {
        params: {
          latest: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLatestNotice(res.data);
      setNoticeLoader(false);
    } catch (error) {
      setNoticeLoader(false);
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  const openMenu = () => {
    setIsMenuActive(true);
  };

  useEffect(() => {
    getLatestNotice();
  }, []);

  return (
    <header className="relative">
      <div className="p mx-auto flex max-w-[85rem] items-center justify-between p-4 lg:px-6 lg:py-4">
        <div className="leftHeader flex items-center gap-14">
          <Link to="/" className="logo flex items-center gap-3 lg:gap-4">
            <img
              src={logoBlue}
              alt="Skyview Public School Logo"
              className="h-14 lg:h-[3.5rem]"
            />
            <div className="logo__text flex flex-col items-start font-medium tracking-wide text-gray-primary lg:items-center">
              <h5 className="text-2xl lg:text-3xl">SKYVIEW</h5>
              <h5 className="mt-[-5px] text-lg lg:pt-[1px] lg:text-[17px]">
                PUBLIC SCHOOL
              </h5>
            </div>
          </Link>

          {currentRoute !== "/notices" && (
            <div className="top-notice-wrapper text-center lg:w-96">
              {noticeLoader ? (
                <LoadingSpinner
                  colorLight="text-blue-600/20"
                  colorDark="text-blue-primary"
                  h="h-5"
                  w="w-5"
                />
              ) : (
                <div className="top-notice relative flex items-center">
                  <div
                    onClick={openModal}
                    className="top-notice__icon mt-2 cursor-pointer lg:absolute lg:top-2 lg:mt-0"
                  >
                    <span className="absolute top-0 right-0 h-3 w-3 animate-ping rounded-full bg-blue-primary"></span>
                    <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-blue-primary"></span>
                  </div>
                  <div
                    onClick={openModal}
                    className="top-notice__title ml-4 hidden cursor-pointer text-lg lg:block"
                  >
                    {latestNotice[0]?.title.slice(0, 34) + `...`}
                  </div>
                </div>
              )}
            </div>
          )}

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
                        {latestNotice[0]?.title}
                      </Dialog.Title>
                      <div className="mt-6">
                        <p className="text-base text-gray-500">
                          {latestNotice[0]?.description}
                        </p>
                      </div>

                      <div className="mt-6">
                        <a
                          href={latestNotice[0]?.attachments[0]?.attachmentUrl}
                          target="_blank"
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                        >
                          <ArrowDownTrayIcon className="mr-3 h-5 w-5" />
                          Download notice
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

export default Navbar;
