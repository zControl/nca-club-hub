import { apiClient } from "@/api/apiClient";
import { AuthContext } from "@/features/auth/AuthContext";
import type { User } from "@/types/user";
import { sleep } from "@/utils/sleep";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const loginMutation = useMutation({
    mutationFn: (credentials: { username: string; password: string }) =>
      apiClient.post<{ accessToken: string; user: User }>(
        "/auth/login",
        credentials,
      ),
    onSuccess: (data) => {
      const { accessToken, user } = data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });

  const login = React.useCallback(
    async (username: string, password: string) => {
      await sleep(500);
      const result = await loginMutation.mutateAsync({ username, password });
      return result.user; // Return the user object
    },
    [loginMutation],
  );

  const logout = React.useCallback(async () => {
    await sleep(250);
    setUser(null);
    localStorage.removeItem("user");
  }, []);

  //const isAuthenticated = !!user;
  const isAuthenticated = false;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
