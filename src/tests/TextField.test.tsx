import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import TextField from "../components/fields/TextField";

it("renders the text input", () => {
  render(
    <TextField
      name="textField"
      initialValue=""
      fieldId={1}
      onChange={vi.fn()}
    />
  );
  const textInput = screen.getByRole("textbox"); // Select the input by role
  expect(textInput).toBeInTheDocument();
});

it("renders TextField with the correct className", () => {
  render(
    <TextField
      name="textField"
      initialValue=""
      fieldId={1}
      onChange={vi.fn()}
    />
  );

  const textField = screen.getByRole("textbox"); // Select the input by role

  expect(textField).toHaveClass(
    "block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
  );
});
