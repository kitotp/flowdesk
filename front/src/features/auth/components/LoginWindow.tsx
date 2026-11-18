import { useState } from "react";
import { useRegister } from "../api/use-register";

export default function LoginWindow() {
  const [email, setEmail] = useState<string>("");
  const register = useRegister();

  return (
    <div>
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

      {register.isError && <p>{register.error.message}</p>}
      {register.isSuccess && <p>User created.</p>}
    </div>
  );
}
