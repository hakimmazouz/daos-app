import Layout from "../components/Layout";
import { Form, redirect, useActionData } from "react-router-dom";
import ErrorBox from "../components/ErrorBox";
import { user } from "../lib/api";
import { useAuthStore } from "../lib/store";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const location = formData.get("location") as string;
  const password = formData.get("password") as string;
  const passwordConfirmation = formData.get("passwordConfirmation") as string;
  const response = await user.signup({
    name,
    location,
    email,
    password,
    passwordConfirmation,
  });

  if (response.errors) return { errors: response.errors };

  localStorage.setItem("accessToken", response.data.accessToken);
  useAuthStore.setState((state) => ({
    ...state,
    user: response.data.user,
    accessToken: response.data.accessToken,
  }));

  return redirect("/ensembles");
}
export default function ProfileCreate({}) {
  const data = useActionData() as {
    errors?: {
      name?: string[];
      email?: string[];
      location?: string[];
      password?: string[];
      passwordConfirmation: string[];
    };
  };
  return (
    <Layout title="Create profile">
      <Form method="post" className="max-w-md mx-auto bg-white p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-10">Sign up</h1>
        <div className="inputs space-y-4">
          {data?.errors?.email && (
            <ErrorBox>
              {data.errors.email.map((error) => (
                <p>{error}</p>
              ))}
            </ErrorBox>
          )}
          <input
            name="email"
            className="p-4 text-xl rounded-md shadow-md bg-slate-100 block w-full"
            type="email"
            required
            placeholder="Email"
          />
          {data?.errors?.name && (
            <ErrorBox>
              {data.errors.name.map((error) => (
                <p>{error}</p>
              ))}
            </ErrorBox>
          )}
          <input
            name="name"
            className="p-4 text-xl rounded-md shadow-md bg-slate-100 block w-full"
            type="text"
            required
            placeholder="Name"
          />
          {data?.errors?.location && (
            <ErrorBox>
              {data.errors.location.map((error) => (
                <p>{error}</p>
              ))}
            </ErrorBox>
          )}
          <input
            name="location"
            className="p-4 text-xl rounded-md shadow-md bg-slate-100 block w-full"
            type="text"
            required
            placeholder="Location"
          />
          {data?.errors?.password && (
            <ErrorBox>
              {data.errors.password.map((error) => (
                <p>{error}</p>
              ))}
            </ErrorBox>
          )}
          <input
            name="password"
            className="p-4 text-xl rounded-md shadow-md bg-slate-100 block w-full"
            type="password"
            required
            placeholder="Password"
          />
          {data?.errors?.passwordConfirmation && (
            <ErrorBox>
              {data.errors.passwordConfirmation.map((error) => (
                <p>{error}</p>
              ))}
            </ErrorBox>
          )}
          <input
            name="passwordConfirmation"
            className="p-4 text-xl rounded-md shadow-md bg-slate-100 block w-full"
            type="password"
            required
            placeholder="Confirm password"
          />
        </div>
        <div className="actions flex justify-center mt-10">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-10 py-3 text-base font-bold uppercase hover:bg-blue-600 transition"
          >
            Sign up
          </button>
        </div>
      </Form>
    </Layout>
  );
}
