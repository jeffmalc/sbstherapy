import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthContextValue {
  authed: boolean;
  loading: boolean;
  signIn: (password: string) => boolean;
  signOut: () => Promise<void>;
}

const STORAGE_KEY = "sbs-site-auth";
const SITE_PASSWORD = "sidebyside2026";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setAuthed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      // ignore
    }
    setLoading(false);
  }, []);

  const signIn = (password: string) => {
    if (password === SITE_PASSWORD) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
      setAuthed(true);
      return true;
    }
    return false;
  };

  const signOut = async () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ authed, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
