import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "@/components/AuthProvider";

interface Props {
  children: JSX.Element;
}

export default function Protected({ children }: Props) {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    !user && router.push("/");
  }, []);

  return children;
}
