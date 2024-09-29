import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard"
import MOCKA_DATA from '../mocks/resCardmock.json'
import '@testing-library/jest-dom'

it("Should render restaurant card component data with props data",() => {
     render(<RestaurantCard resData={MOCKA_DATA} />);
   
      const res =  screen.getByText("Theobroma", {id:"732719"})

      expect(res).toBeInTheDocument();

})