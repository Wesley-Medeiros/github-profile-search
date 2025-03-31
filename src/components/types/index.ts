export interface User {
    name: string;
    avatar: string;
    bio: string;
    login: string;
  }
  
  export interface SearchFormProps {
    onSearch: (username: string) => void;
    loading: boolean;
  }
  
  export interface UserCardProps {
    user: User;
  }
  
  export interface ErrorCardProps {
    message: string;
  }