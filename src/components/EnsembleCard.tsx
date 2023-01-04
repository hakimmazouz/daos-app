import { Link } from "react-router-dom";
import { Ensemble } from "../lib/types";

interface EnsembleCardProps {
  ensemble: Ensemble;
}

export default function EnsembleCard({ ensemble }: EnsembleCardProps) {
  const memberUnit = ensemble.members.length == 1 ? "member" : "members";
  return (
    <Link
      to={ensemble._id}
      className="h-[20rem] flex flex-col justify-between rounded-md p-6 bg-white hover:opacity-60 transition"
    >
      <div className="top">
        <h3 className="text-2xl font-bold">{ensemble.name}</h3>
        <p className="text-xl">{ensemble.description}</p>
      </div>
      <div className="bottom">
        <p>
          {ensemble.members.length} {memberUnit}
        </p>
      </div>
    </Link>
  );
}
