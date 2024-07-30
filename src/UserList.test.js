import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserList from "./UserList";

test("renders user list", async () => {
  // Mock the fetch function

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, name: "ram" },
          { id: 2, name: "shyam" },
        ]),
    })
  );

  render(<UserList />);

  // Wait for the component to fetch data
  await waitFor(() => {
    const userList = screen.getByText(/user list/i);
    expect(userList).toBeInTheDocument();

    const user1 = screen.getByText(/ram/i);
    expect(user1).toBeInTheDocument();

    const user2 = screen.getByText(/shyam/i);
    expect(user2).toBeInTheDocument();
  });
});
