import { Route, Redirect } from "react-router-dom";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC"


//Component
import Temp from "./Components/temp";


//pages
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";
import Reviews from "./Page/Restaurant/Reviews";
import Menu from "./Page/Restaurant/Menu";
import Photos from "./Page/Restaurant/Photos";
import Checkout from "./Page/Checkout";
import RedirectRestaurant from "./Page/Restaurant/Redirect";


function App() {
  return (
     <>

       <Route path="/" exact>
           <Redirect to="/delivery" />
       </Route>

       <Route path="/restaurant/:id" exact  component={RedirectRestaurant}/>


       <HomeLayoutHOC path="/:type" exact component={Home} /> 
       <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
       <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview} />
       <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
       <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Reviews} />
       <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
       <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Photos} />
      <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout}/>
     </>
  );
};

export default App ;
