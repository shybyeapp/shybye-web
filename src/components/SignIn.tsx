import GoogleButton from "react-google-button";
import { useRouter } from "next/router";

import { useAuthContext } from "@/components/AuthProvider";

export default function SignIn() {
  const { googleSignIn } = useAuthContext();
  const router = useRouter();

  const handleGoogleSignIn = () =>
    googleSignIn().then(() => router.push("/dashboard"));

  return (
    <div className="sign-in">
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
}
