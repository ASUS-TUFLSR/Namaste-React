import { Sum } from "../Sum"

// beforeAll(() => {
//        console.log("Before All")
// })

// beforeEach(() => {
//        console.log("Before Each")
// })

// afterAll(() => {
//        console.log("After All")
// })

// afterEach(() => {
//        console.log("After Each")
// })



test("Sum function should calculate the sum of two numbers", () => {
     
       const result = Sum(4 ,5);

       //Assertion
       expect(result).toBe(9);

})