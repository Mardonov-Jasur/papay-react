import React, { useEffect } from "react";
import "../../../css/home.css";
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import {
  setBestRestaurants,
  setTopRestaurants,
  setTrendProducts
} from "./slice";
import { Restaurant } from "../../../types/user";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveBestRestaurants,
  retrieveTopRestaurants,
  retrieveTrendProducts
} from "./selector";
import { Product } from "./../../../types/product";
import RestaurantApiService from "../../apiservices/restaurantApiService";
import ProductApiService from "../../apiservices/productApiService";
import { Statistics } from "./statistics";
import { TopRestaurant } from "./topRestaurant";
import { BestDishes } from "./bestDishes";
import { BestRestaurants } from "./bestRestaurant";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import Recommendations from "./recommendations";

/**REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
  setBestRestaurants: (data: Restaurant[]) =>
    dispatch(setBestRestaurants(data)),
  setTrendProducts: (data: Product[]) => dispatch(setTrendProducts(data))
});

/**REDUX SELECTOR */
const RestaurantsRetriever = createSelector(
  retrieveTopRestaurants,
  retrieveBestRestaurants,
  retrieveTrendProducts,
  (topRestaurants, bestRestaurants, trendProducts) => ({
    topRestaurants,
    bestRestaurants,
    trendProducts
  })
);

export function HomePage() {
  const { setTopRestaurants, setBestRestaurants, setTrendProducts } =
    actionDispatch(useDispatch());

  const { topRestaurants, bestRestaurants, trendProducts } =
    useSelector(RestaurantsRetriever);
  //selector: store => store
  useEffect(() => {
    // backend data request =>
    const restaurantService = new RestaurantApiService();
    const productService = new ProductApiService();
    restaurantService
      .getTopRestaurants()
      .then((data) => {
        setTopRestaurants(data);
      })
      .catch((err) => console.log(err));
    restaurantService
      .getRestaurants({ page: 1, limit: 4, order: "mb_point" })
      .then((data) => {
        console.log("data", data);

        setBestRestaurants(data);
      })
      .catch((err) => console.log(err));

    productService
      .getTargetProducts({
        order: "product_likes",
        limit: 4,
        page: 1
      })
      .then((data) => {
        console.log("data", data);

        setTrendProducts(data);
      })
      .catch((err) => console.log(err));
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

// import React, { useEffect } from "react";
// import { Statistics } from "./statistics";
// import { TopRestaurant } from "./topRestaurant";
// import { BestRestaurants } from "./bestRestaurant";
// import { BestDishes } from "./bestDishes";
// import { Advertisements } from "./advertisements";
// import { Events } from "./events";
// import { Recommendations } from "./recommendations";
// import "../../../css/home.css";

// import { Dispatch, createSelector } from "@reduxjs/toolkit";
// import {
//   setBestRestaurants,
//   setTopRestaurants,
//   setTrendProducts
// } from "./slice";
// import { Restaurant } from "../../../types/user";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   retrieveBestRestaurants,
//   retrieveTopRestaurants,
//   retrieveTrendProducts
// } from "./selector";
// import { Product } from "./../../../types/product";
// import RestaurantApiService from "../../apiservices/restaurantApiService";

// /**REDUX SLICE */
// const actionDispatch = (dispatch: Dispatch) => ({
//   setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
//   setBestRestaurants: (data: Restaurant[]) =>
//     dispatch(setBestRestaurants(data)),
//   setTrendProducts: (data: Product[]) => dispatch(setTrendProducts(data))
// });

// /**REDUX SELECTOR */
// const RestaurantsRetriever = createSelector(
//   retrieveTopRestaurants,
//   retrieveBestRestaurants,
//   retrieveTrendProducts,
//   (topRestaurants, bestRestaurants, trendProducts) => ({
//     topRestaurants,
//     bestRestaurants,
//     trendProducts
//   })
// );

// export function HomePage() {
//   /**INITIALIZATIONS */
//   const { setTopRestaurants, setBestRestaurants } = actionDispatch(
//     useDispatch()
//   );

//   useEffect(() => {
//     //backend data request => data
//     const restaurantService = new RestaurantApiService();
//     restaurantService
//       .getTopRestaurants()
//       .then((data) => {
//         setTopRestaurants(data);
//       })
//       .catch((err) => console.log(err));

//     restaurantService
//       .getRestaurants({ page: 1, limit: 4, order: "mb_point" })
//       .then((data) => {
//         console.log("best:::", data);
//         setBestRestaurants(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="homepage">
//       <Statistics />
//       <TopRestaurant />
//       <BestRestaurants />
//       <BestDishes />
//       <Advertisements />
//       <Events />
//       <Recommendations />
//     </div>
//   );
// }
