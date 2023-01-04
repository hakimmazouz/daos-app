import IndexHero from "../components/IndexHero";
import Layout from "../components/Layout";

export default function Home({}) {
  return (
    <Layout title="Maestro">
      <IndexHero title="Welcome to Maestro" tagline="Find other musicians" />
    </Layout>
  );
}
