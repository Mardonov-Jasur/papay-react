import { BoArticle } from "./boArticle";
import { Follower, Following } from "./follow";
import { Order } from "./order";
import { Product } from "./product";
import { Member, Restaurant } from "./user";

/**RACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  restaurantPage: RestaurantPageState;
  ordersPage: OrdersPageState;
  communityPage: CommunityPageState;
  memberPage: MemberPageState;
}

/**HOMEPAGE */
export interface HomePageState {
  topRestaurants: Restaurant[];
  bestRestaurants: Restaurant[];
  trendProducts: Product[];
  bestBoArticles: BoArticle[];
  trendBoArticles: BoArticle[];
  newsBoArticles: BoArticle[];
}

/**RESTAURANT PAGE */
export interface RestaurantPageState {
  targetRestaurants: Restaurant[];
  randomRestaurants: Restaurant[];
  chosenRestaurant: Restaurant | null;
  targetProducts: Product[];
  chosenProduct: Product | null;
}

//Orders page

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}

/**COMMUNITY PAGE */
export interface CommunityPageState {
  targetBoArticles: BoArticle[];
}

//Member page
export interface MemberPageState {
  chosenMember: Member | null;
  chosenMemberBoArticles: BoArticle[];
  chosenSingleBoArticles: BoArticle | null;
  memberFollowers: Follower[];
  memberFollowings: Following[];
}
