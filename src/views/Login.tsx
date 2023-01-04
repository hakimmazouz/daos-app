import { Form, redirect, useActionData } from "react-router-dom";
import Layout from "../components/Layout";
import { user } from "../lib/api";
import { useAuthStore } from "../lib/store";

export async function loader() {
  const { user } = useAuthStore.getState();
  if (user) return redirect("/");
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const response = await user.login({ email, password });
  if (response.data) {
    console.log(response.data);
    localStorage.setItem("accessToken", response.data.accessToken);
    useAuthStore.setState((state) => ({
      ...state,
      user: response.data.user,
      accessToken: response.data.accessToken,
    }));

    return redirect("/ensembles");
  } else {
    return { error: "No matching credentials" };
  }
}

export default function Login({}) {
  const data = useActionData() as { error?: string };
  return (
    <Layout title="Login to Maestro">
      <Form method="post" className="max-w-md mx-auto bg-white p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-10">Log in</h1>
        {data?.error && (
          <div className="border-red-300 bg-red-100 rounded-md p-6 text-amber-800 mb-4">
            {data.error}
          </div>
        )}
        <div className="inputs space-y-4">
          <input
            name="email"
            className="p-4 text-xl rounded-md shadow-md bg-slate-100 block w-full"
            type="email"
            required
            placeholder="Email"
          />
          <input
            name="password"
            className="p-4 text-xl rounded-md shadow-md bg-slate-100 block w-full"
            type="password"
            required
            placeholder="Password"
          />
        </div>
        <div className="actions flex justify-center mt-10">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-10 py-3 text-base font-bold uppercase hover:bg-blue-600 transition"
          >
            Log in
          </button>
        </div>
      </Form>
    </Layout>
  );
}
