import { Link } from "react-router-dom";
import { useAuthStore } from "./../lib/store";

export default function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="fixed top-0 left-0 flex justify-between w-full container py-6">
      <div className="logo">Tutti</div>
      <nav className="">
        <ul className="flex space-x-12">
          <li>
            <Link to="/ensembles">Ensembles</Link>
          </li>
          {user ? (
            <li>
              <Link to="/logout">{user.name} (Log out)</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/sign-up">Join</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
