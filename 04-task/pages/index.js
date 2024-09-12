import Header from "@/components/Header";
import { useSession, signOut, signIn } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <Header />
      {status === "loading" ? <p>Loading...</p> : null}
      <h1 className="text-center text-3xl mt-4">Dashboard</h1>
      {session && status !== "loading" && (
        <p className="text-center mt-4 text-xl">
          Welcome back, {session.user.name}!
        </p>
      )}
      {!session && status !== "loading" && (
        <p className="text-center mt-4 text-xl">
          You are not signed in, please sign in to continue.
        </p>
      )}
    </>
  );
};

export default Home;
