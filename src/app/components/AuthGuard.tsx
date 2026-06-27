"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn === "true") {
      setAuthorized(true);
    } else {
      router.replace("/login");
    }
  }, [router]);

  if (!authorized) {
    return null;
  }

  return <>{children}</>;
}