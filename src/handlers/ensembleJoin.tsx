import { ActionFunctionArgs, redirect } from "react-router-dom";
import { ensembles } from "../lib/api";

export async function action({ params }: ActionFunctionArgs) {
  if (params.ensembleId) {
    const response = await ensembles.join(params.ensembleId);
    return redirect("/ensembles/" + params.ensembleId);
  }

  return redirect("/ensembles");
}
