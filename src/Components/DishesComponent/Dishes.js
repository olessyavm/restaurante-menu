import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux"; //from filter.js
import { getSelectedCategory } from "../../redux/dishesSlice"; //from filter.js

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(<div>
        {dataDishes
        .filter(dish => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === dish.category;
        })
        .map(dish => <Dish dish={dish}/>)}
    </div>
    )
}
export default Dishes;