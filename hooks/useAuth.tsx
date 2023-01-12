import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../firebase';

//Creating Auth Context
interface IAuth {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState<User | null>(null); //User type from firebase;
  const [initialLoading, setInitialLoading] = useState(true);

  // Persisting the user
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user);
          setLoading(false);
        } else {
          // Not logged in...
          setUser(null);
          setLoading(true);
          router.push('/login'); //
        }

        setInitialLoading(false);
      }),
    [auth]
  );

  // 1) Create user
  const signUp = async (email: string, password: string) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        // then go to home page
        router.push('/');
        setLoading(false);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setLoading(false));
  };

  // 2) Sign In user
  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        // then go to home page
        router.push('/');
        setLoading(false);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setLoading(false));
  };

  // 3) Log out user
  const logout = async () => {
    setLoading(true);

    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({ user, signUp, signIn, error, loading, logout }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {/* if initialLoading is NULL then... */}
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}