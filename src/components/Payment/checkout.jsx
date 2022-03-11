import React from 'react';
import CreditCardForm from './CreditCardForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Checkout extends React.Component {
    render() { 
    return (
    <div>

      <Header />
      
      <CreditCardForm/>
      
      <Footer />
    </div>
    )
    }
}
 
export default Checkout;