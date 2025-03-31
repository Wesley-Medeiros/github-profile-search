export function ErrorCard() {
    return (
      <div className="bg-[#D9D9D9] rounded-[10px] p-6 w-full max-w-[800px] text-center">
        <p className="text-[#FF0000] text-[20px] font-[400]">
            Nenhum perfil foi encontrado com ese nome de usuário.<br />
            Tente novamente
        </p>
      </div>
    );
  }