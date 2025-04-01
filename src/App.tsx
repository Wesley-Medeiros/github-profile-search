import { useState, useEffect } from 'react';
import { User } from './components/types';
import { Header } from './components/header';
import { SearchForm } from './components/searchForm';
import { ErrorCard } from './components/errorCard';
import { UserCard } from './components/userCard';

export function App() {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (!searchInput.trim()) return;

    const fetchData = async () => {
      setLoading(true);
      setHasSearched(true);
      
      try {
        const response = await fetch(`https://api.github.com/users/${searchInput}`);
        await new Promise(resolve => setTimeout(resolve, 500));
        const data = await response.json();
        
        if (response.ok) {
          setUserData({
            name: data.name || searchInput,
            avatar: data.avatar_url,
            bio: data.bio || 'Este usuário não possui bio cadastrada.',
            login: data.login
          });
        } else {
          setUserData(null);
        }
      } catch {
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 800);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const handleSearch = (username: string) => {
    setSearchInput(username);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img 
        src="/camada.png" 
        alt="" 
        className="absolute w-[200px] h-[200px] opacity-20"
        style={{
          top: 'calc(50% - 268.5px)',
          left: 'calc(50% - 578px)',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="absolute rounded-full"
        style={{
          width: '800px',
          height: '800px',
          top: 'calc(50% - 268.5px)',
          right: 'calc(50% - 578px)',
          transform: 'translate(50%, -50%)',
          background: 'radial-gradient(circle, #005CFF 0%, #00000000 70%)',
          filter: 'blur(24px)'
        }}
      ></div>
      <div 
        className="absolute rounded-full"
        style={{
          width: '674px',
          height: '674px',
          bottom: 'calc(50% - 134px)',
          left: '0',
          transform: 'translate(-50%, 50%)',
          background: 'radial-gradient(circle, #005CFF 0%, #00000000 70%)',
          filter: 'blur(24px)',
          opacity: '0.2'
        }}
      ></div>
      <div 
        className="bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1156px] h-[537px] py-[39px] flex flex-col items-center space-y-[27px]">
        <Header />
        <SearchForm onSearch={handleSearch} loading={loading} />
        
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-blue-400 animate-pulse">Buscando perfil...</p>
          </div>
        ) : hasSearched ? (
          userData ? (
            <UserCard user={userData} />
          ) : (
            <ErrorCard />
          )
        ) : null}
      </div>
    </div>
  );
}