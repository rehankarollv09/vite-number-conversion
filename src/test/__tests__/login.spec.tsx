import { render, fireEvent, act, waitFor } from "@testing-library/react";
import Login from "../../container/Login/Login";
import { signIn } from "../../container/Login/utils";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
jest.mock("../../container/Login/utils");
describe("Login component", () => {
  afterEach(()=>{
    jest.resetAllMocks();
  })
  it("displays error message when required fields are not filled in", () => {
    const { getByText, getByTestId } = render(<BrowserRouter><Login /></BrowserRouter>);

    const emailInput = getByTestId("username");
    const passwordInput = getByTestId("password");
    const submitButton = getByTestId("login");

    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.click(submitButton);

    expect(getByText("Enter Required Field")).toBeInTheDocument();
  });

  it("displays error message when incorrect credentials are entered", async () => {
    const mockSignIn = jest.fn();
    mockSignIn.mockReturnValue({ error: "Invalid Credentials", });
    (signIn as any).mockImplementation(mockSignIn);
    
      const { getByTestId,getByText } = render(<BrowserRouter><Login /></BrowserRouter>);

      const emailInput = getByTestId("username");
      const passwordInput = getByTestId("password");
      const submitButton = getByTestId("login");
     await act(async() => {
      fireEvent.change(emailInput, { target: { value: "testuser" } });
      fireEvent.change(passwordInput, { target: { value: "testpassword" } });
      await fireEvent.click(submitButton);
    });

    await waitFor(()=>expect(getByText("Invalid Credentials")).toBeInTheDocument());
  });

  it("logs in when correct credentials are entered", async() => {
    

    const mockSignIn = jest.fn();
    mockSignIn.mockReturnValue({ status:200,data:{id:'90',token:'faketoken'} });
    (signIn as any).mockImplementation(mockSignIn);
    
      const { getByTestId } = render(<BrowserRouter><Login /></BrowserRouter>);

      const emailInput = getByTestId("username");
      const passwordInput = getByTestId("password");
      const submitButton = getByTestId("login");
     await act(async() => {
      fireEvent.change(emailInput, { target: { value: "testuser" } });
      fireEvent.change(passwordInput, { target: { value: "testpassword" } });
      await fireEvent.click(submitButton);
    });

    
    await waitFor(()=>{
      expect((emailInput as any).value).toBe('')
      expect((passwordInput as any).value).toBe('')
    });
  });
});
