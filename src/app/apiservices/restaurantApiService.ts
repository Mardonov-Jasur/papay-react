import axios from "axios";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { Restaurant } from "../../types/user";
import { serviceApi } from "../../lib/config";

class RestaurantApiService {
    private readonly path: string;

  constructor() {
    this.path = serviceApi || "";
  }

  async getTopRestaurants() {
    try{
        console.log("this.path::::", this.path);
        const url = "/restaurants?order=top&page=1&limit=4";
        console.log("url:::::::", url);
        const result = await axios.get(this.path + url, {withCredentials: true});
        console.log("result:::::::", result);
        assert.ok(result, Definer.generel_err1);

        console.log('state:', result.data.state);
        const top_restaurants: Restaurant[] = result.data.data;
        return top_restaurants;
    } catch(err: any) {
        console.log(`ERROR::: getTopRestaurants ${err.message}`);
        throw err;
    }
  }
}

export default RestaurantApiService;
