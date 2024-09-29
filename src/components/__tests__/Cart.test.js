import { screen, render, act, fireEvent} from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_RES_MENU from "../mocks/resMockMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_RES_MENU)
        }
    })
})
it("Should render restaurant menu", async () => {
    await act(async () => render(
        <BrowserRouter>
    <Provider store={appStore} >
        <Header/>
        <RestaurantMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>
        ))
  
    const accordionHeaderBtn = screen.getByText("Desserts & Cupcakes (11)")
  
    fireEvent.click(accordionHeaderBtn);

    expect(screen.getAllByTestId("foodItems").length).toBe(11)
    
    const addBtns = screen.getAllByRole("button", {name:"Add +"})

    fireEvent.click(addBtns[0])
        fireEvent.click(addBtns[1])


    expect(screen.getByText("Cart(2-items)")).toBeInTheDocument();

     expect(screen.getAllByTestId("foodItems").length).toBe(13)

     const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"})

     fireEvent.click(clearCartBtn)

    expect(screen.getAllByTestId("foodItems").length).toBe(11)

    expect(
        screen.getByText("Go Back")
    ).toBeInTheDocument()

})







