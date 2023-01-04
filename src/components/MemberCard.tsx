import { Member, User } from "../lib/types";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div>
      <p className="text-2xl flex items-center justify-between bg-slate-50 p-6 rounded-md hover:bg-slate-200 transition">
        <div className="left flex items-center">
          <span className="w-12 h-12 bg-slate-400 inline-block rounded-full mr-6"></span>
          {member.user.name} in{" "}
          <span className="opacity-40">{member.user.location}</span>
        </div>
        <p className="role uppercase text-base tracking-widest opacity-50">
          {member.role}
        </p>
      </p>
    </div>
  );
}
