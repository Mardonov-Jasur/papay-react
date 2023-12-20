import React, { useEffect } from "react";
import { Statistics } from "./statistics";
import { TopRestaurant } from "./topRestaurant";
import { BestRestaurants } from "./bestRestaurant";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import "../../../css/home.css";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopRestaurants } from "./slice";
import { retrieveTopRestaurants } from "./selector";
import { Restaurant } from "../../../types/user";

/**REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data))
});
/**REDUX SELECTOR */
const topRestaurantRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants
  })
);

export function HomePage() {
  /**INITIALIZATION */
  const { setTopRestaurants } = actionDispatch(useDispatch());
  const { topRestaurants } = useSelector(topRestaurantRetriever);

  console.log("topRestaurants:::", topRestaurants);

  useEffect(() => {
    //backend data request => data
    setTopRestaurants([]);
  }, []);

  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurant />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}
