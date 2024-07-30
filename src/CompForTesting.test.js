import { fireEvent, getByAltText, getByTestId, render, screen } from "@testing-library/react";
import CompForTesting from "./CompForTesting";

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

// it('should call the handleClick with Helloworld',()=>{

//      const handleClickMock = jest.fn();

//      const {getByTestId}=render(
//         <CompForTesting name={"ramesh"} handleclick={handleClickMock}>
//           </CompForTesting>
//           )

//           fireEvent.click(getByTestId("btn4"))

//           expect(handleClickMock).toHaveBeenCalledWith('thanks')
     
// })



    
    
    