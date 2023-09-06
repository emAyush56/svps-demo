import { Link } from "react-router-dom";
import logoWhite from "../_assets/img/logo-white.png";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-10 bg-gray-primary p-16">
      <Link to="/" className="logo flex w-fit flex-col items-center gap-4">
        <img
          src={logoWhite}
          alt="Skyview Public School Logo"
          className="h-[6rem]"
        />
        <div className="logo__text flex flex-col items-center tracking-wide text-white">
          <h5 className="text-[42px] font-medium">SKYVIEW</h5>
          <h5 className="mt-[-9px] text-2xl font-medium">PUBLIC SCHOOL</h5>
        </div>
      </Link>
      <p className="text-center text-sm text-gray-400">
        &copy; Copyright 2022-23 Skyview Public School. All rights reserved.
      </p>
    </footer>
  );
}
