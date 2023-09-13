import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "../_api/axios";
import { encryptAndSetAccessToken } from "../_utils/authUtils";
import { useNavigate } from "react-router-dom";

const URL_POST_LOGIN = "/auth/login";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLoader, setButtonLoader] = useState(false);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setButtonLoader(true);

    try {
      const res = await axios.post(
        URL_POST_LOGIN,
        JSON.stringify({
          username: email,
          password: password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const rawAccessToken = res?.data.accessToken;
      encryptAndSetAccessToken(rawAccessToken);

      setButtonLoader(false);
      window.location.href = "/dashboard";
    } catch (error) {
      setButtonLoader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken"))
      navigate("/dashboard", { replace: true });
  });

  return (
    <div className="mx-auto flex min-h-screen items-center bg-white">
      <div className="mx-auto w-fit p-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          Login as Admin
        </h2>
        <form onSubmit={handleSubmitLogin}>
          <input
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Access Identity"
            type="email"
            className="mb-3 block w-80 rounded border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 transition ease-in focus:border-gray-900 focus:outline-none"
          />
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-5 block w-80 rounded border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 transition ease-in focus:border-gray-900 focus:outline-none"
          />
          <button
            disabled={buttonLoader}
            type="submit"
            className="relative flex w-80 rounded border border-gray-900 bg-gray-900 px-3 py-3 font-medium text-white transition-all hover:bg-white hover:text-gray-900"
          >
            <span className="absolute">
              <LockClosedIcon className="inline h-5 w-5 stroke-2" />
            </span>
            <span className="mx-auto">
              {buttonLoader ? "Logging in" : "Login"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
