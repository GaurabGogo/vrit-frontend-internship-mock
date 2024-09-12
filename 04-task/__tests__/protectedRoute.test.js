import { render } from "@testing-library/react";
import ProtectedPage, { getServerSideProps } from "@/pages/protected";
import Header from "@/components/header";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

// Mock getSession from next-auth
jest.mock("next-auth/react", () => ({
  getSession: jest.fn(),
}));

// Mock useRouter for proper router functionality
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Protected Page", () => {
  it("redirects to the login page if user is not authenticated", async () => {
    // Mock getSession to return null (no session)
    getSession.mockResolvedValueOnce(null);

    // Call getServerSideProps
    const context = {};
    const response = await getServerSideProps(context);

    // Assert that it redirects to /auth/signin
    expect(response).toEqual({
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    });
  });

  it("renders the protected page if the user is authenticated", async () => {
    // Mock getSession to return a valid session
    getSession.mockResolvedValueOnce({ user: { name: "User" } });

    // Render the protected page
    const { getByText } = render(<ProtectedPage />);

    // Assert that the protected content is displayed
    expect(getByText("This is a server protected page")).toBeInTheDocument();
  });
});
