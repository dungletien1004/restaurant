import React, { Component } from 'react';
import Food from './food'
import Modal from 'react-modal';
class Foods extends React.Component {
    state = {
        foods: [
        {
            id: 1,
            imgUrl: 'https://thumbs.dreamstime.com/b/hamburger-22939858.jpg',
            dishId: 0,
            UnitPrice: 100000,
            leftQuantity: 12,
            type: 'food',
            name: "Combo Hamburger B",
            display: true
        },
        {
            id: 2,
            imgUrl: 'https://cdn.tgdd.vn/2021/04/CookProduct/1200-1200x676-87.jpg',
            dishId: 1,
            UnitPrice: 120000,
            leftQuantity: 4,
            type: 'food',
            name: "Combo Hamburger A",
            display: true,
        },
        {
            id: 3,
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/d9e2a3a3bd13fcf569f714339220ea7b.png',
            dishId: 2,
            UnitPrice: 20000,
            leftQuantity: 5,
            type: 'drinks',
            name: "Pepsi Lon",
            display: true
        },
        {
            id: 4,
            imgUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
            dishId: 3,
            UnitPrice: 50000,
            leftQuantity: 20,
            type: 'food',
            name: "Cơm Chiên Dương Châu",
            display: true
        },
        {
            id: 5,
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/8f9a4cb3b943dd9d363fe889f1a977f2.png',
            dishId: 4,
            UnitPrice: 20000,
            leftQuantity: 20,
            type: 'drinks',
            name: "Pepsi Vị Chanh Không Calo Lon",
            display: true
        },
        {
            id: 6,
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/4dd31878f442ea6c57c9e6264efa84b2.jpg',
            dishId: 5,
            UnitPrice: 15000,
            leftQuantity: 20,
            type: 'drinks',
            name: "Aquafina",
            display: true
        },
        {
            id: 7,
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/ec86fc55906339789edbd992856951f8.jpg',
            dishId: 6,
            UnitPrice: 20000,
            leftQuantity: 100,
            type: 'drinks',
            name: "Sữa Milo",
            display: true
        },
        {
            id: 8,
            imgUrl: 'https://kfcvietnam.com.vn/uploads/combo/876327fff18e80fc6b1ddd0826ba65bf.jpg',
            dishId: 7,
            UnitPrice: 80000,
            leftQuantity: 20,
            type: 'food',
            name: "Cơm Chiên Gà Phi Lê Giòn",
            display: true
        },
        {
            id: 9,
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/cd5012f29bd76d8805ddfb640c21c23c.jpg',
            dishId: 7,
            UnitPrice: 22222,
            leftQuantity: 20,
            type: 'refreshments',
            name: "Popcorn (Vừa)",
            display: true
        },
        {
            id: 10,
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/654b474f6d239540fd535147212a9b12.jpg',
            dishId: 7,
            UnitPrice: 34000,
            leftQuantity: 20,
            type: 'refreshments',
            name: "Khoai Tây Viên Nhân Rau Củ (5 viên)",
            display: true
        },
        {
            id: 11,
            imgUrl: 'https://kfcvietnam.com.vn/uploads/combo/a6525886894c89c32ca47d57a9170f93.jpg',
            dishId: 7,
            UnitPrice: 281000,
            leftQuantity: 20,
            type: 'chicken',
            name: "Gà Rán (9 miến)",
            display: true
        },
        {
            id: 12,
            imgUrl: 'https://kfcvietnam.com.vn/uploads/combo/a6525886894c89c32ca47d57a9170f93.jpg',
            dishId: 7,
            UnitPrice: 281000,
            leftQuantity: 20,
            type: 'chicken',
            name: "Gà Rán (9 miến)",
            display: true
        },
    ],
        
        displayState: 0,
        isOpen: false
    }

    

    handleFilterFood = () => 
    {
        console.log('Food');
        this.state.foods.forEach((food) => {
            if (food.type !== 'food')
            {
                food.display = false;
            }
            else if (food.type === 'food')
            {
                food.display = true;
            }
        })
        this.setState({foods: this.state.foods})
    }

    handleFilterDrinks = () =>
    {
        console.log('Drinks');

        this.state.foods.forEach((food) => {
                if (food.type !== 'drinks')
                {
                    food.display = false;
                }
                else if (food.type === 'drinks')
                {
                    food.display = true;
                }
        })
        this.setState({foods: this.state.foods})

    }

    handleFilterChicken = () => 
    {
        console.log('Drinks');

        this.state.foods.forEach((food) => {
                if (food.type !== 'chicken')
                {
                    food.display = false;
                }
                else if (food.type === 'chicken')
                {
                    food.display = true;
                }
        })
        this.setState({foods: this.state.foods})
    }

    handleFilterRefreshments = () =>
    {
        console.log('refreshments');

        this.state.foods.forEach((food) => {
                if (food.type !== 'refreshments')
                {
                    food.display = false;
                }
                else if (food.type === 'refreshments')
                {
                    food.display = true;
                }
        })
        this.setState({foods: this.state.foods})
    }

    handleFilterAll = () =>
    {
        console.log('All');

        this.state.foods.forEach((food) => {
            food.display = true;
        })
        this.setState({foods: this.state.foods})
    }

    render() { 
        // const {isOpen} = this.state;
        // const {onAdd} = props;
        return <div>
        <button onClick={() =>this.handleFilterFood()} type="button" className="btn btn-info ms-2 mt-2 mb-2">Thức Ăn Chính</button>
        <button onClick={this.handleFilterChicken} type="button" className="btn btn-info ms-2 mt-2 mb-2">Món gà</button>
        <button onClick={this.handleFilterDrinks} type="button" className="btn btn-info ms-2 mt-2 mb-2">Thức uống</button>
        <button onClick={this.handleFilterRefreshments} type="button" className="btn btn-info ms-2 mt-2 mb-2">Thức ăn nhẹ</button>
        <button onClick={this.handleFilterAll} type="button" className="btn btn-info ms-2 mt-2 mb-2">Tất cả</button>
        

            <div className="container-sm">
                <div className="row align-items-start">
    
                {this.state.foods
                .filter(food => food.display === true)
                .map(
                    (food, index) => (

                        <div className="col">
                        <Food
                        key={index} 
                        dState = {this.state.displayState}
                        leftQuantity = {food.leftQuantity}
                        name = {food.name}
                        imgUrl={food.imgUrl} 
                        UnitPrice={food.UnitPrice}
                        onClick={this.showPopup}
                        // onAdd={onAdd}
                        />
                        </div>
                    )
                )}
           
           </div>
           </div>
        </div>
    }
}
 
export default Foods;