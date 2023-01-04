import { redirect } from "react-router-dom";
import { useAuthStore } from "../lib/store";

export async function loader() {
  localStorage.removeItem("accessToken");
  useAuthStore.setState((state) => ({
    ...state,
    accessToken: null,
    user: null,
  }));

  return redirect("/ensembles");
}
