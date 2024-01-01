import axios from "axios";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { Restaurant } from "../../types/user";
import { serverApi } from "../../lib/config";
import { SearchObj } from "../../types/others";

class RestaurantApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi || "";
  }

  async getTopRestaurants(): Promise<Restaurant[]> {
    try {
      console.log("this.path::::", this.path);
      const url = "/restaurants?order=top&page=1&limit=4";
      console.log("url:", url);
      const result = await axios.get(this.path + url, {
        withCredentials: true
      });
      console.log("result:", result);
      assert.ok(result, Definer.general_err1);

      console.log("state:", result.data.state);
      const top_restaurants: Restaurant[] = result.data.data;
      return top_restaurants;
    } catch (err: any) {
      console.log(`ERROR::: getTopRestaurants ${err.message}`);
      throw err;
    }
  }
  async getRestaurants(data: SearchObj): Promise<Restaurant[]> {
    try {
      const url = `/restaurants?order=${data.order}&page=${data.page}&limit=${data.limit}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true
      });
      assert.ok(result, Definer.general_err1);

      console.log("state:", result.data.state);
      const restaurants: Restaurant[] = result.data.data;
      return restaurants;
    } catch (err: any) {
      console.log(`ERROR::: getRestaurants ${err.message}`);
      throw err;
    }
  }

  async getChosenRestaurant(id: string): Promise<Restaurant> {
    try {
      const url = `/restaurants/${id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true
      });
      assert.ok(result, Definer.general_err1);
      console.log("state:", result.data.data);
      const restaurant: Restaurant = result.data.data;
      return restaurant;
    } catch (err: any) {
      console.log(`ERROR::: getChosenRestaurant ${err.message}`);
      throw err;
    }
  }
}

export default RestaurantApiService;
