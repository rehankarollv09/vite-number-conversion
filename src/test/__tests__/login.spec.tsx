import { render, fireEvent } from "@testing-library/react";
import Login from '../../Login'

describe("Login component", () => {
  it("displays error message when required fields are not filled in", () => {
    const { getByText,getByPlaceholderText } = render(<Login />);

    const emailInput = getByPlaceholderText("email");
    const passwordInput = getByPlaceholderText("password");
    const submitButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.click(submitButton);

    expect(getByText("Please enter compulsory fields")).toBeInTheDocument();
  });

  it("displays error message when incorrect credentials are entered", () => {

    const { getByText, getByPlaceholderText } = render(<Login />);

    const emailInput = getByPlaceholderText("email");
    const passwordInput = getByPlaceholderText("password");
    const submitButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: "wrong" } });
    fireEvent.change(passwordInput, { target: { value: "wrong" } });
    fireEvent.click(submitButton);

    expect(getByText("Invalid Username password")).toBeInTheDocument();
  });

  it("logs in when correct credentials are entered", () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const { getByText, getByPlaceholderText } = render(<Login />);

    const emailInput = getByPlaceholderText("email");
    const passwordInput = getByPlaceholderText("password");
    const submitButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: "rehan" } });
    fireEvent.change(passwordInput, { target: { value: "rehan" } });
    fireEvent.click(submitButton);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('login'.toUpperCase())
  });
});
