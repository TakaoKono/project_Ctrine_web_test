'use client';
// Contextを作成
import { createContext, useContext, useState } from 'react';

// ユーザ情報の型
type User = {
    name: string;
    name_kana: string;
    email: string;
    password: string;
    passwordConfirm: string;
    isChecked: boolean;
};

// Contextの型
export type UserContextType = {
    user: User;
    setUser: (user: User) => void;
};

// Contextの初期値
const initialUser: User = {
    name: '',
    name_kana: '',
    email: '',
    password: '',
    passwordConfirm: '',
    isChecked: false,
};

export const SignupContext = createContext<UserContextType | undefined>(undefined);

export function SignupContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User>(initialUser);

    return <SignupContext.Provider value={{ user, setUser }}>{children}</SignupContext.Provider>;
}

export const useUser = () => {
    const context = useContext(SignupContext);

    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};
