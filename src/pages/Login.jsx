import { LockClosedIcon } from "@heroicons/react/24/outline";
export default function Login() {
  return (
    <div className="mx-auto flex min-h-screen items-center bg-white">
      <div className="mx-auto w-fit p-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          Login as Admin
        </h2>
        <form>
          <input
            required
            autoFocus
            placeholder="Access Identity"
            type="email"
            className="mb-3 block w-80 rounded border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 transition ease-in focus:border-gray-900 focus:outline-none"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="mb-5 block w-80 rounded border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 transition ease-in focus:border-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="relative flex w-80 rounded border border-gray-900 bg-gray-900 px-3 py-3 font-medium text-white transition-all hover:bg-white hover:text-gray-900"
          >
            <span className="absolute">
              <LockClosedIcon className="inline h-5 w-5 stroke-2" />
            </span>
            <span className="mx-auto">Login</span>
          </button>
        </form>
      </div>
    </div>
  );
}
