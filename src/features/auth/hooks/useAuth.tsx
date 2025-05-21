import { AuthContext } from "@/features/auth/AuthContext";
import React from "react";

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}