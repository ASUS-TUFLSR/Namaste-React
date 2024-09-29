import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'


describe("Testing Contact Us Page button Component ", () => {
      
  it("Should Load Contact Us Component", () => {
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  })

  it("Should Load Contact Us Button Component", () => {
    render(<Contact/>)

    //Querying
    const button = screen.getAllByRole("button");


    //Assertion
    
  })

  test("Should Load all Contact Us Button Component", () => {
    render(<Contact/>)

    //Querying
    const button = screen.getAllByRole("button")

   // console.log(button.length)
    //Assertion
   expect(button.length).toBe(2);
  })
  // We can either use it || test both are same
});


