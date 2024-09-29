import { screen, render, act, fireEvent} from "@testing-library/react"
// import {act} from "react-dom/test-utils"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => { 
     return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
     })
})

it("Should render body component with search button", async () => {
 
     await act(async () =>  render(<BrowserRouter><Body/></BrowserRouter>))

     const searchBtn = screen.getByRole("button", {name:"Search"})

     const searchInput = screen.getByTestId("searchInput")

     fireEvent.change(searchInput, {target : {value: "ice cream" }})

     fireEvent.click(searchBtn)

     const card = screen.getAllByTestId("resCard")

     expect(card.length).toBe(1);

})

it("Should match searchInput of displayed restaurants", async () => {
 
     await act(async () =>  render(<BrowserRouter><Body/></BrowserRouter>))

     const searchBtn = screen.getByRole("button", {name: "Search"})

     const searchInput = screen.getByTestId("searchInput")

     fireEvent.change(searchInput, {target : {value: "ice cream" }})

     fireEvent.click(searchBtn)

     const card = screen.getAllByTestId("resCard")

     expect(card.length).toBe(1);

})

it("Should render top-rated restaurants", async () => {
 
     await act(async() => render(<BrowserRouter><Body/></BrowserRouter>))

     const topRatedRes = screen.getByRole("button", {name: "Top Rated Restaurants"})

     fireEvent.click(topRatedRes)

     const topResCard = screen.getAllByTestId("resCard")

     expect(topResCard.length).toBe(19);

})