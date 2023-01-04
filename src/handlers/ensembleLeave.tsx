import { redirect } from "react-router-dom";
import { ensembles } from "../lib/api";

export async function action({ params }: { params: { ensembleId: string } }) {
  const response = await ensembles.leave(params.ensembleId);

  return redirect("/ensembles/" + params.ensembleId);
}
