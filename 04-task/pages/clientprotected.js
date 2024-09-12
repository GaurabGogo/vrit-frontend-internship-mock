import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";

const ProtectedComponent = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) router.push("/auth/signin"); // Redirect if not authenticated
  }, [session, status, router]);

  return (
    <>
      <Header />
      {status === "loading" ? (
        <p className="text-xl text-center mt-4">Loading...</p>
      ) : (
        session && (
          <h1 className="text-xl text-center mt-4">
            This is a client protected page
          </h1>
        )
      )}
    </>
  );
};

export default ProtectedComponent;
