import { fireEvent, getByAltText, getByTestId, render, screen } from "@testing-library/react";
import CompForTesting from "./CompForTesting";
import userEvent from "@testing-library/user-event";

it("increments the counter", () => {
  const { getByTestId } = render(<CompForTesting />);

  fireEvent.click(getByTestId("incBtn"));

  expect(getByTestId("para1")).toHaveTextContent("1");
});

it("decrements the counter", () => {
    const { getByTestId } = render(<CompForTesting />);
  
    fireEvent.click(getByTestId("decBtn"));
  
    expect(getByTestId("para1")).toHaveTextContent("-1")

  });

  it('when rendered it has button with a reset role',()=>{

     render(<CompForTesting/>)
     expect(screen.getByRole('resetBtn')).toBeInTheDocument()
  })

it('should call the handleClick with Helloworld',()=>{

     const handleClickMock = jest.fn();

     render(
        <CompForTesting name={"ramesh"} handleClick={handleClickMock}>
          </CompForTesting>
          )

          userEvent.click(screen.getByRole("testing"))

          expect(handleClickMock).toHaveBeenCalled()
          expect(handleClickMock).toHaveBeenCalledWith("HelloWorld")
     
})



    
    
    