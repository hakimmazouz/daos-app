import { Form, redirect, useActionData } from "react-router-dom";
import ErrorBox from "../components/ErrorBox";
import IndexHero from "../components/IndexHero";
import Layout from "../components/Layout";
import { ensembles } from "../lib/api";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const response = await ensembles.create({
    name,
    description,
  });

  if (response.errors) return { errors: response.errors };
  return redirect("/ensembles/" + response.data._id);
}

export default function EnsembleCreate() {
  const data = useActionData() as {
    errors?: { name?: string[]; description?: string[] };
  };

  return (
    <Layout title="Create ensemble">
      <IndexHero title="Create an ensemble" />
      <div className="container mx-auto">
        <Form method="post" className="max-w-xl bg-white p-10 rounded-lg">
          <div className="inputs space-y-4">
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
              placeholder="Ensemble name"
            />
            {data?.errors?.description && (
              <ErrorBox>
                {data.errors.description.map((error) => (
                  <p>{error}</p>
                ))}
              </ErrorBox>
            )}
            <input
              name="description"
              className="p-4 text-xl rounded-md shadow-md bg-slate-100 block w-full"
              type="text"
              required
              placeholder="Description of ensemble"
            />
          </div>
          <div className="actions flex mt-10">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-10 py-3 text-base font-bold uppercase hover:bg-blue-600 transition"
            >
              Create
            </button>
          </div>
        </Form>
      </div>
    </Layout>
  );
}
