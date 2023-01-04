import { Link, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import EnsembleCard from "../components/EnsembleCard";
import IndexHero from "../components/IndexHero";
import Layout from "../components/Layout";
import { ensembles as ensemblesApi } from "../lib/api";
import { useAuthStore } from "../lib/store";
import { Ensemble } from "../lib/types";

export async function loader() {
  const { data } = await ensemblesApi.index();
  return data;
}

export default function EnsembleIndex() {
  const user = useAuthStore((state) => state.user);
  const ensembles = useLoaderData() as Ensemble[];

  return (
    <Layout title="All ensembles">
      <IndexHero title="Ensembles" tagline={ensembles.length.toString()}>
        {user && (
          <Link to="new">
            <Button>Create ensemble</Button>
          </Link>
        )}
      </IndexHero>
      <div className="container mx-auto grid grid-cols-3 gap-x-7">
        {ensembles.map((ensemble) => (
          <EnsembleCard key={ensemble._id} ensemble={ensemble} />
        ))}
      </div>
    </Layout>
  );
}
