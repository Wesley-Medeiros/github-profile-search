export function Header() {
  return (
    <div className="flex items-center gap-[11px]">
      <img 
        src="/githubIcon.png" 
        className="w-[58px] h-[58px]"
        alt="GitHub Icon"
      />
      <h1 className="text-6xl leading-[100%] flex gap-[11px] tracking-[0px] font-[600]">
        Perfil <span className="font-bold tracking-[0px]">GitHub</span>
      </h1>
    </div>
  );
}