import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { user } from "../lib/api";
import { useAuthStore } from "../lib/store";

export async function loader() {
  const response = await user.me();
  if (response.data) {
    const accessToken = localStorage.getItem("accessToken");
    useAuthStore.setState((state) => ({
      ...state,
      user: response.data,
      accessToken,
    }));
  }
}

export default function Root() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
