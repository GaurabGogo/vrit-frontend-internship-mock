import Header from "@/components/Header";
import { getSession } from "next-auth/react";

const ProtectedPage = () => {
  return (
    <>
      <Header />
      <h1 className="text-xl text-center mt-4">
        This is a server protected page
      </h1>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // If there is no session, redirect to sign-in page
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default ProtectedPage;
