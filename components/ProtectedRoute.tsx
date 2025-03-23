"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({
  children,
  allowedRoles = [],
}: {
  children: React.ReactNode;
  allowedRoles: string[];
}) {
  const { isAuthenticated, userRole } = useAuth();
  const router = useRouter();
  console.log("auth provider", isAuthenticated);
  console.log("auth provider", userRole);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(userRole!)) {
      router.push("/unauthorized");
    }
  }, [isAuthenticated, userRole, router, allowedRoles]);

  return isAuthenticated ? <>{children}</> : <p>Loading...</p>;
}
