import { createBrowserRouter, LoaderFunction } from "react-router-dom";
import EnsembleCreate, {
  action as ensembleCreateAction,
} from "../views/EnsembleCreate";
import EnsembleEdit, {
  loader as ensembleEditLoader,
  action as ensembleEditAction,
} from "../views/EnsembleEdit";
import EnsembleIndex, {
  loader as ensembleIndexLoader,
} from "../views/EnsembleIndex";
import EnsembleShow, {
  loader as ensembleShowLoader,
} from "../views/EnsembleShow";
import Home from "../views/Home";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "../views/Login";
import ProfileCreate, {
  action as profileCreateAction,
} from "../views/ProfileCreate";
import ProfileEdit, {
  loader as profileEditLoader,
  action as profileEditAction,
} from "../views/ProfileEdit";
import { action as ensembleJoinAction } from "../handlers/ensembleJoin";
import { action as ensembleLeaveAction } from "../handlers/ensembleLeave";
import { loader as logoutLoader } from "../handlers/logout";
import Root, { loader as rootLoader } from "../views/Root";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <ProfileCreate />,
        action: profileCreateAction,
      },
      {
        path: "/profile/edit",
        element: <ProfileEdit />,
        loader: profileEditAction,
        action: profileEditAction,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
        loader: loginLoader,
      },
      {
        path: "/logout",
        loader: logoutLoader,
      },
      {
        path: "/ensembles",
        element: <EnsembleIndex />,
        loader: ensembleIndexLoader,
      },
      {
        path: "/ensembles/new",
        element: <EnsembleCreate />,
        action: ensembleCreateAction,
      },
      {
        path: "/ensembles/:ensembleId",
        element: <EnsembleShow />,
        loader: ensembleShowLoader,
      },
      {
        path: "/ensembles/:ensembleId/join",
        action: ensembleJoinAction,
      },
      {
        path: "/ensembles/:ensembleId/leave",
        action: ensembleLeaveAction,
      },
      {
        path: "/ensembles/:ensembleId/edit",
        element: <EnsembleEdit />,
        loader: ensembleEditLoader,
        action: ensembleEditAction,
      },
    ],
  },
]);
