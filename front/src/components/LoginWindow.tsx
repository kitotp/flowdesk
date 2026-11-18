import { useState } from "react";

export default function LoginWindow() {
  const [email, setEmail] = useState<string>("");

  async function registerUser() {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.log("error with res");
    }

    console.log(await res.json());
  }

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
        onClick={registerUser}
        className="border border-white text-white rounded-md p-2 ml-3"
      >
        Register
      </button>
    </div>
  );
}
