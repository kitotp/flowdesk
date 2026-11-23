import { useState } from "react";
import { useRegister } from "../api/use-register";
import { useLogin } from "../api/use-login";

export default function LoginWindow() {
  const [email, setEmail] = useState<string>("");
  const register = useRegister();
  const login = useLogin();

  return (
    <div className="flex flex-col items-start">
      <div>
        <label>Register</label>
        <input
          type="text"
          placeholder="email"
          className="border border-white rounded-md p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          disabled={register.isPending}
          onClick={() => register.mutate(email)}
          className="border border-white text-white rounded-md p-2 ml-3"
        >
          {register.isPending ? "Creating user..." : "Register"}
        </button>
      </div>

      <div>
        <label>Login</label>
        <input
          type="text"
          placeholder="email"
          className="border border-white rounded-md p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={() => login.mutate(email)}
          className="border border-whit text-white rounded-md p-2 ml-3"
        >
          {login.isPending ? "Logging in..." : "Login"}
        </button>
      </div>

      {register.isError && <p>{register.error.message}</p>}
      {register.isSuccess && <p>User created.</p>}
    </div>
  );
}
