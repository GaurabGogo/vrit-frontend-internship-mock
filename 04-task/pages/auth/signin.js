import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(""); // State for login error
  const router = useRouter();

  useEffect(() => {
    if (router.query.error) {
      setLoginError("Invalid username or password. Please try again.");
    }
  }, [router.query.error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: true,
      username,
      password,
      callbackUrl: "/", // Optional: specify a custom redirect URL
    });
  };

  const closeModal = () => {
    setLoginError(""); // Reset error state when closing the modal
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-2 h-[50vh] rounded-lg shadow-lg">
          <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="overflow-hidden bg-white w-full h-full">
            <img
              src="/images/login.jpg"
              alt="logo"
              className="w-full object-contain h-full"
            />
          </div>
        </div>
      </div>

      {/* Modal for login error */}
      {loginError && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              Login Failed
            </h3>
            <p className="text-gray-700 mb-4">{loginError}</p>
            <button
              onClick={closeModal}
              className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
