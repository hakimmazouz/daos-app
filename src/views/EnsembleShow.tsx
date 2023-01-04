import {
  Form,
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
} from "react-router-dom";
import Button from "../components/Button";
import IndexHero from "../components/IndexHero";
import Layout from "../components/Layout";
import MemberCard from "../components/MemberCard";
import { ensembles } from "../lib/api";
import { memberAmount } from "../lib/helpers";
import { useAuthStore } from "../lib/store";
import { Ensemble } from "../lib/types";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.ensembleId) {
    const { data, error } = await ensembles.show(params.ensembleId);
    if (error) return redirect("/ensembles");
    return data;
  }

  return redirect("/ensembles");
}

export default function EnsembleShow() {
  const ensemble = useLoaderData() as Ensemble;
  const user = useAuthStore((state) => state.user);
  const isAdmin = ensemble.membership?.role == "admin";

  return (
    <Layout title="Showing ensemble">
      <IndexHero tagline="Ensemble" title={ensemble.name}>
        {user && !isAdmin && (
          <Form
            method="post"
            action={ensemble.membership ? "leave" : "join"}
            className="inline"
          >
            {ensemble.membership ? (
              <Button>Leave ensemble</Button>
            ) : (
              <Button>Join ensemble</Button>
            )}
          </Form>
        )}
      </IndexHero>
      <div className="container mx-auto">
        <h2 className="meta text-4xl opacity-60 mb-10">
          {ensemble.description}
        </h2>
        <div className="member-list rounded-md bg-white p-10">
          <p className="text-4xl opacity-50 mb-8">
            {memberAmount(ensemble.members.length)}
          </p>
          <div className="space-y-4">
            {ensemble.members.map((member) => (
              <MemberCard key={member._id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
