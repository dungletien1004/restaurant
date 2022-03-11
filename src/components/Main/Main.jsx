import React from 'react';
import Product from '../Product/Product';
import "./Main.css";
import {Container, Button, ButtonGroup} from "react-bootstrap"


class  Main  extends React.Component {
  state = {
    products: [...this.props.products]
  }

  
  handleFilterFood = () => 
  {
      console.log('Food');
      this.state.products.forEach((food) => {
          if (food.type !== 'food')
          {
              food.display = false;
          }
          else if (food.type === 'food')
          {
              food.display = true;
          }
      })
      this.setState({products: this.state.products})
  }

  handleFilterDrinks = () =>
  {
      console.log('Drinks');

      this.state.products.forEach((food) => {
              if (food.type !== 'drinks')
              {
                  food.display = false;
              }
              else if (food.type === 'drinks')
              {
                  food.display = true;
              }
      })
      this.setState({products: this.state.products})

  }

  handleFilterChicken = () => 
  {
      console.log('Drinks');

      this.state.products.forEach((food) => {
              if (food.type !== 'chicken')
              {
                  food.display = false;
              }
              else if (food.type === 'chicken')
              {
                  food.display = true;
              }
      })
      this.setState({products: this.state.products})
  }

  handleFilterRefreshments = () =>
  {
      console.log('refreshments');

      this.state.products.forEach((food) => {
              if (food.type !== 'refreshments')
              {
                  food.display = false;
              }
              else if (food.type === 'refreshments')
              {
                  food.display = true;
              }
      })
      this.setState({products: this.state.products})
  }

  handleFilterAll = () =>
  {
      console.log('All');

      this.state.products.forEach((food) => {
          food.display = true;
      })
      this.setState({products: this.state.products})
  }

  render() {
    return (    
      <main className="blockMain">
        
        <Container aria-setsize="outline-danger">
        <h2>Menu</h2>
        <ButtonGroup className="mb-2">
        <Button  variant="outline-danger" onClick={() =>this.handleFilterFood()} type="button" className="filter">Thức Ăn Chính</Button>
        <Button  variant="outline-danger" onClick={this.handleFilterChicken} type="button" className="filter">Món gà</Button>
        <Button variant="outline-danger" onClick={this.handleFilterDrinks} type="button" className="filter">Thức uống</Button>
        <Button variant="outline-danger" onClick={this.handleFilterRefreshments} type="button" className="filter">Thức ăn nhẹ</Button>
        <Button variant="outline-danger" onClick={this.handleFilterAll} type="button" className="filter">Tất cả</Button>
        </ButtonGroup>
        </Container>
        
        <div className="row">
          {this.state.products.
          filter(product => product.display===true).
          map((product) => (
            <Product key={product.id} product={product} onAdd={this.props.onAdd} onAdds={this.props.onAdds}></Product>
          ))}
        </div>
      </main>
    );
  }
  
}
export default Main;