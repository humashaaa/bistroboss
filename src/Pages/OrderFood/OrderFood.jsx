import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCart from "./FoodCart";

const OrderFood = () => {
    const [menu] = useMenu()
    return (
        <div className="p-40">
              <Tabs>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>soup</Tab>
    </TabList>

    <TabPanel>
     <div className="grid grid-cols-3 gap-6">
        {
            menu
            .filter(item=>item.category === "salad")
            .map(item=><FoodCart
            key={item._id}
            item={item}
            ></FoodCart>)


        }
     </div>
    </TabPanel>
    <TabPanel>
     <div className="grid grid-cols-3 gap-6">
        {
            menu
            .filter(item=>item.category === "pizza")
            .map(item=><FoodCart
            key={item._id}
            item={item}
            ></FoodCart>)


        }
     </div>
    </TabPanel>
    <TabPanel>
     <div className="grid grid-cols-3 gap-6">
        {
            menu
            .filter(item=>item.category === "soup")
            .map(item=><FoodCart
            key={item._id}
            item={item}
            ></FoodCart>)


        }
     </div>
    </TabPanel>
   
    
  </Tabs>
        </div>
    );
};

export default OrderFood;