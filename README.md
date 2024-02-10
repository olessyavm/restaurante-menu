1 - Какое приложение мы будем строить?
2 - Создаем первый компонент

4- Добавляем первые команды CSS
body {
  background-color: #161616
}
.block {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
}
.App{
  display: flex;
  justify-content: space-around;
}
5 - Создаем документ dataDishes
const dataDishes = [

    {
        id: 1,
        price: 25,
        img: 'pasta',
        name: 'Pasta',
        category: 'ITALIAN'
  },
  {
    id: 2,
    price: 50,
    img: 'shrimp',
    name: 'Shrimp',
    category: 'SEAFOOD'
  },
  {
    id: 3,
    price: 30,
    img: 'salmon',
    name: 'Salmon',
    category: 'SEAFOOD'
  },
  {
      id: 4,
      price: 40,
      img: 'baked-salmon',
      name: 'Baked Salmon',
      category: 'SEAFOOD'
  },
  {
    id: 5,
    price: 15,
    img: 'cheese-balls',
    name: 'Cheese balls',
    category: 'APPETIZERS'
  },
  {
    id: 6,
    price: 20,
    img: 'easy-pasta',
    name: 'Easy Pasta',
    category: 'ITALIAN'
  },
  {
    id: 7,
    price: 25,
    img: 'spag-tomato',
    name: 'Spaghetti',
    category: 'ITALIAN'
  },
  {
    id: 8,
    price: 20,
    img: 'mixed-pizza',
    name: 'Pizza',
    category: 'ITALIAN'
  },
  {
    id: 9,
    price: 20,
    img: 'spring-rolls',
    name: 'Spring Rolls',
    category: 'APPETIZERS'
  },
  {
    id: 10,
    price: 15,
    img: 'tomato-salad',
    name: 'Tomato Salad',
    category: 'SALADS'
  },
  {
    id: 11,
    price: 15,
    img: 'feta',
    name: 'Feta Salad',
    category: 'SALADS'
  }
  ] 
  export default dataDishes;

10 - Отображаем изображения - Новый способ
    <img src={`./${dish.img}.jpg`} alt="flower"/>

16 - Добавляем иконку корзины
<img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart"/> 

https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png 

index.css
.cartIcon{
  width: 50px;
}

17 - Redux - установка
npm install @reduxjs/toolkit 
npm install react-redux

https://redux-toolkit.js.org/introduction/getting-started 

18 - Создаём папку Redux
src->redux
store.js
cartSlice.js
dishesSlice.js

19 - Создаём store.js
import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
      dishes, 
      cart
    }
  })

20 - Создаём dishesSlice.js

21 - Меняем цвет категории при выборе

.categoryButtonSelected{
background-color: green;
}
.categoryButton:hover{
  background-color: #fdeb6b;
}
.categoryButton{
cursor: pointer;
margin: 5px;
padding: 5px;
}

index.js

import { Provider } from 'react-redux';
import { store } from './redux/store';

<React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
    
  </React.StrictMode>

22 - Прописываем reducer по фильтрации категорий

23 - Фильтр по категориям

24 - Решаем проблему при нажатии на ALL

25 - Создаём новый компонент - ChangeQuantity.js
const ChangeQuanity = () => {
    return(
        <div>
            test
        </div>
    )
}
export default ChangeQuanity;

Dish.js
import ChangeQuanity from "../Cart/ChangeQuanity";
..
<ChangeQuanity/>
<button>add to cart</button>

26 - Приравниваем состояние к одному

27 - Кнопка по увеличению порций

28 - Кнопка по уменьшению порций
#   r e s t a u r a n t e - m e n u  
 