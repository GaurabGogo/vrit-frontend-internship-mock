import { render, fireEvent, waitFor } from "@testing-library/react";
import SignIn from "@/pages/auth/signin";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

// Mock the signIn function from next-auth
jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

// Mock useRouter to handle navigation
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SignIn Page", () => {
  it("redirects to the dashboard after successful login", async () => {
    const push = jest.fn();
    useRouter.mockReturnValue({ push, query: {} });

    // Mock signIn to return successful login
    signIn.mockResolvedValueOnce({ ok: true });

    const { getByLabelText, getByText } = render(<SignIn />);

    // Enter username and password
    fireEvent.change(getByLabelText(/Username/i), {
      target: { value: "user" },
    });
    fireEvent.change(getByLabelText(/Password/i), {
      target: { value: "pass" },
    });

    // Simulate form submission
    fireEvent.click(getByText(/Sign In/i));

    // Wait for the redirect to be called
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith("/");
    });
  });

  it("displays an error message on failed login", async () => {
    const push = jest.fn();
    useRouter.mockReturnValue({ push, query: {} });

    // Mock signIn to return failed login
    signIn.mockResolvedValueOnce({ ok: false });

    const { getByLabelText, getByText, findByText } = render(<SignIn />);

    // Enter username and password
    fireEvent.change(getByLabelText(/Username/i), {
      target: { value: "user" },
    });
    fireEvent.change(getByLabelText(/Password/i), {
      target: { value: "wrong-pass" },
    });

    // Simulate form submission
    fireEvent.click(getByText(/Sign In/i));

    // Check for error message or error console
    const errorMessage = await findByText("Login failed");
    expect(errorMessage).toBeInTheDocument();
  });
});
