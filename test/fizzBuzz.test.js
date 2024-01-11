import { describe , expect, it} from "vitest";
import FizzBuzz from "../src/fizzBuzz";
describe("FizzBuzz", () =>{
   it("should be a function" ,()=>{
        expect(typeof FizzBuzz).toBe("function"); 
    }); 
    it("should throw if not number is provided as parameter" ,()=>{
        expect(()=> FizzBuzz("4")).throw(); 
    }); 
    it("should throw a specific error message  if not number is provided as parameter" ,()=>{
        expect(()=> FizzBuzz("4")).throw(/It isn't a number/); 
    }); 
    it("should throw a specific error message  if not a number is provided " ,()=>{
        expect(()=> FizzBuzz(NaN)).throw(/It isn't a number. Is NaN/); 
    }); 
    it("should return 1 if number provided is 1 " , ()=>{
        expect(FizzBuzz(1)).toBe(1); 
    }); 
    it("should return 2 if number provided is 2 " , ()=>{
        expect(FizzBuzz(2)).toBe(2); 
    }); 
    it("should return fizz if number provided is 3 " , ()=>{
        expect(FizzBuzz(3)).toBe("fizz"); 
    }); 
    it("should return fizz if number provided is multiple of 3 " , ()=>{
        expect(FizzBuzz(6)).toBe("fizz"); 
        expect(FizzBuzz(9)).toBe("fizz"); 
        expect(FizzBuzz(12)).toBe("fizz"); 
    }); 
    it("should return buzz if number provided is 5 " , ()=>{
        expect(FizzBuzz(5)).toBe("buzz"); 
    }); 
    it("should return buzz if number provided is multiple of 5  " , ()=>{
        expect(FizzBuzz(10)).toBe("buzz"); 
        expect(FizzBuzz(20)).toBe("buzz"); 
        expect(FizzBuzz(25)).toBe("buzz"); 
    }); 
    it("should return fizzBuzz if number provided is multiple of 15  " , ()=>{
        expect(FizzBuzz(15)).toBe("fizzbuzz"); 
    }); 
    it("should return woff if number provided is 7 " , ()=>{
        expect(FizzBuzz(7)).toBe("woff"); 
    }); 
    it("should return fizzwoff if number provided is multiple of 3 and 7  " , ()=>{
        expect(FizzBuzz(21)).toBe("fizzwoff"); 
    }); 
}); 