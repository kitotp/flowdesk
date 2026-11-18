const API_URL = import.meta.env.VITE_BACKEND_URL;

export async function request<T>(
  path: string,
  options: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_URL}/${path}`, options);

  if (!res.ok) {
    throw new Error(`error on fetch: ${res.status}`);
  }

  return res.json();
}
