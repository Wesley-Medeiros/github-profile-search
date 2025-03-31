import { useState, KeyboardEvent } from 'react';
import { SearchFormProps } from '../types';

export function SearchForm({ onSearch, loading }: SearchFormProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="relative w-full max-w-[503px]">
      <input 
        type="text"
        placeholder="Digite um usuário do Github"
        className="text-[20px] text-black leading-[100%] font-[600] px-4 py-[18px] bg-white w-full rounded-[10px] pr-[60px]"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button 
        className="absolute right-[1px] top-1/2 -translate-y-1/2 bg-[#005CFF] px-4 h-[98%] aspect-square rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#0044CC] transition-colors disabled:opacity-50"
        onClick={handleSubmit}
        disabled={loading}
        aria-label="Buscar usuário"
      >
        {loading ? (
          <div className="border-2 border-white border-t-transparent rounded-full w-6 h-6 animate-spin"></div>
        ) : (
          <img src="/searchIcon.svg" className="w-6 h-6" alt="Search Icon" />
        )}
      </button>
    </div>
  );
}