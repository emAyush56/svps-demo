import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <section className="container mx-auto flex h-[600px] max-w-6xl flex-col items-center justify-center gap-6 px-10">
        <h3 className="text-center text-4xl font-semibold leading-[3.5rem] text-blue-primary lg:text-[40px]">
          PAGE IS UNDER CONSTRUCTION
        </h3>
        <p className="text-center text-lg">
          We are a newly established school. Kindly vist us after sometime.
        </p>
        <Link to="/" className="text-lg">
          Back to{" "}
          <span className="font-semibold underline decoration-2 underline-offset-4">
            Home
          </span>
        </Link>
      </section>
    </>
  );
}
