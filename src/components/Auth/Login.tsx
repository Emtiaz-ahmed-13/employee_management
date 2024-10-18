import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="border-2 border-transparent shadow-lg bg-white py-10 px-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Login to Your Account
        </h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col space-y-6 items-center justify-center"
        >
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="text-gray-700 outline-none bg-transparent border-2 border-emerald-600 py-3 px-6 text-xl rounded-full placeholder-gray-500 w-80 focus:ring-2 focus:ring-emerald-500 transition"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="text-gray-700 outline-none bg-transparent border-2 border-emerald-600 py-3 px-6 text-xl rounded-full placeholder-gray-500 w-80 focus:ring-2 focus:ring-emerald-500 transition"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="w-80 py-3 bg-emerald-600 text-white text-xl font-semibold rounded-full hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-emerald-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
