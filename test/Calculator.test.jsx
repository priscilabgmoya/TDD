import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, afterEach, expect } from "vitest";
import { Calculator, numbers, operations } from "../src/components/Calculator";

describe("Testing Calculator", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<Calculator />);
  });
  it("should render title correctly", () => {
    render(<Calculator />);

    screen.getByText("Calculator");
  });
  it("should render numbers", () => {
    render(<Calculator />);

    numbers.forEach((number) => {
      screen.getByText(number);
    });
  });
  it("should render 4 row", () => {
    render(<Calculator />);

    const row = screen.getAllByRole("row");
    expect(row).toHaveLength(4);
  });
  it("should render operations", () => {
    render(<Calculator />);

    operations.forEach((operation) => {
      screen.getByText(operation);
    });
  });
  it("should render equal sing" , ()=>{
    render(<Calculator />);

    screen.getAllByText("="); 
  }); 
  it("should render a input", () =>{
    render(<Calculator />);

    screen.getByRole("textbox");
  }); 
  it("should user input after clicking a number", ()=>{
    render(<Calculator />);

    const one = screen.getByText('1'); 
    fireEvent.click(one); 

    const input = screen.getByRole('textbox'); 
    expect(input.value).toBe("1")
  });
  it("should user input after clicking several numbers", ()=>{
    render(<Calculator />);

    const one = screen.getByText('1'); 
    fireEvent.click(one); 

    const two = screen.getByText('2'); 
    fireEvent.click(two); 

    const three = screen.getByText('3'); 
    fireEvent.click(three); 

    const input = screen.getByRole('textbox'); 
    expect(input.value).toBe("123")

  }); 
  it("should show user input after clicking  numbers and operations", ()=>{
    render(<Calculator />);

    const one = screen.getByText('1'); 
    fireEvent.click(one); 

    const plus = screen.getByText('+'); 
    fireEvent.click(plus); 

    const two = screen.getByText('2'); 
    fireEvent.click(two); 

    const input = screen.getByRole('textbox'); 
    expect(input.value).toBe("1+2");

  }); 
  it("should calculate based on user input and show the calculation", ()=>{
    render(<Calculator />);
    const one = screen.getByText('1'); 
    fireEvent.click(one); 

    const plus = screen.getByText('+'); 
    fireEvent.click(plus);

    fireEvent.click(one); 

    const equalSing = screen.getByText('='); 
    fireEvent.click(equalSing); 

    const input = screen.getByRole('textbox'); 
    expect(input.value).toBe("2");
  }); 
  it("clear operation", ()=>{
    render(<Calculator />);
    
    const cleatSing = screen.getByText('clear'); 
    fireEvent.click(cleatSing); 

    const input = screen.getByRole('textbox'); 
    expect(input.value).toBe('');
  })
});
