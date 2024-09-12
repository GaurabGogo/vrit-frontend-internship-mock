import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "./UserList";

// Mock the fetch function globally
global.fetch = jest.fn();

afterEach(() => {
  jest.resetAllMocks();
});

test("renders UserList component and shows loading initially", () => {
  // Mock fetch to resolve with an empty array
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => [],
  });

  render(<UserList />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test("displays error message when fetch fails", async () => {
  // Mock fetch to reject with an error
  fetch.mockRejectedValueOnce(new Error("Failed to fetch"));

  render(<UserList />);
  expect(
    await screen.findByText(/Error: Failed to fetch/i)
  ).toBeInTheDocument();
});

test('displays "No users found" when no users are returned', async () => {
  // Mock fetch to resolve with an empty array
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => [],
  });

  render(<UserList />);
  await waitFor(() => {
    expect(screen.getByText(/No users found/i)).toBeInTheDocument();
  });
});

test("displays list of users when users are returned", async () => {
  // Mock fetch to resolve with a list of users
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => users,
  });

  render(<UserList />);
  await waitFor(() => {
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
  });
});
