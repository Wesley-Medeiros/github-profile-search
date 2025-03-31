import { UserCardProps } from '../types';

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex items-center bg-[#D9D9D9] rounded-[25px] px-[33px] py-[19px] gap-8">
      <img 
        src={user.avatar} 
        alt={`${user.name} profile`}
        className="rounded-full w-[220px] h-[220px] border-2 border-[#005CFF] object-cover"
      />
      <div className="max-w-112 w-full space-y-4">
        <h2 className="text-[#005CFF] font-bold text-[20px] leading-[100%]">
          {user.name}
        </h2>
        <p className="text-[15px] text-[#000000] leading-[100%]">
          {user.bio}
        </p>
      </div>
    </div>
  );
}