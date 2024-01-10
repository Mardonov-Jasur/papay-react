import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { RippleBadge } from "./MaterialTheme/styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RestaurantPage } from "./screens/RestaurantPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarHome } from "./components/header";
import { NavbarRestaurant } from "./components/header/restaurant";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/header/footer";

import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/home.css";
import "../css/orders.css";
import "../css/community.css";
import "../css/restaurant.css";
import "../css/member.css";
import "../css/help.css";
import Car from "./screens/testCar";
import AuthenticationModal from "./components/auth";
import { Member } from "../types/user";
import { serverApi } from "../lib/config";
import {
  sweetFailureProvider,
  sweetTopSmallSuccessAlert
} from "../lib/sweetAlert";
import { Definer } from "../lib/Definer";
import MemberApiService from "./apiservices/memberApiService";
import "../app/apiservices/verify";
import { CartItem } from "../types/others";
import { Product } from "../types/product";
import { verifyMemberData } from "../app/apiservices/verify";

function App() {
  /**INITIALIZATIONS */
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [orderRebuild, setOrderRebuild] = useState<Date>(new Date());

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const cartJson: any = localStorage.getItem("cart_data");
  const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
  const [cartItems, setCartItems] = useState<CartItem[]>(current_cart);
  console.log("cart", cartItems);


  /**HANDLERS */
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setSignUpOpen(false);

  const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };
  const handleLogOutRequest = async () => {
    try {
      const memberApiService = new MemberApiService();
      const result = await memberApiService.logOutRequest();
      await sweetTopSmallSuccessAlert("success", 700, true);
      return result;
    } catch (err: any) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1);
    }
  };

  const onAdd = (product: Product) => {
    const exist: any = cartItems?.find(
      (item: CartItem) => item?._id === product?._id
    );
    console.log("exist", exist);

    if (exist) {
      const cart_updated = cartItems?.map((item: CartItem) =>
        item._id === product._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const new_item: CartItem = {
        _id: product._id,
        quantity: 1,
        price: product.product_price,
        image: product?.product_images[0],
        name: product.product_name
      };
      const cart_updated = [...cartItems, { ...new_item }];
      console.log("cart_updated", cart_updated);

      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };

  const onRemove = (item: CartItem) => {
    const item_data: any = cartItems?.find(
      (ele: CartItem) => ele._id === item._id
    );
    if (item_data.quantity === 1) {
      const filter_items: CartItem[] = cartItems.filter(
        /************************ */
        (ele) => ele._id !== item._id
      );
      setCartItems(filter_items);
      localStorage.setItem("cart_data", JSON.stringify(filter_items));
    } else {
      const cart_updated = cartItems?.map((ele: CartItem) =>
        ele._id === item_data._id
          ? { ...item_data, quantity: item_data.quantity - 1 }
          : ele
      );
      console.log("rem", cart_updated);
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };

  const onDelete = (item: CartItem) => {
    const deleted_items: CartItem[] = cartItems?.filter(
      (vl) => vl?._id !== item?._id
    );
    setCartItems(deleted_items);
    localStorage.setItem("cart_data", JSON.stringify(deleted_items));
  };
  const onDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem("cart_data");
  };

  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          anchorEl={anchorEl}
          open={open}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setOrderRebuild={setOrderRebuild}
        />
      ) : main_path.includes("/restaurant") ? (
        <NavbarRestaurant
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          anchorEl={anchorEl}
          open={open}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setOrderRebuild={setOrderRebuild}
        />
      ) : (
        <NavbarOthers
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          anchorEl={anchorEl}
          open={open}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setOrderRebuild={setOrderRebuild}
        />
      )}

      <Switch>
        <Route path="/restaurant">
          <RestaurantPage onAdd={onAdd} cartItems={cartItems} />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage
            orderRebuild={orderRebuild}
            setOrderRebuild={setOrderRebuild}
          />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          {/* <Car/> */}
          <HomePage />
        </Route>
      </Switch>

      <Footer />
      <AuthenticationModal
        loginOpen={loginOpen}
        handleLoginOpen={handleLoginOpen}
        handleLoginClose={handleLoginClose}
        signUpOpen={signUpOpen}
        handleSignUpOpen={handleSignUpOpen}
        handleSignUpClose={handleSignUpClose}
      />
    </Router>
  );
}

export default App;
