import { useState } from 'react';
import memberstackDOM from '@memberstack/dom';

const PurchaseButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const memberstack = memberstackDOM.init({
        publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
      });

      // Debugging - check if memberstack is initialized
      console.log('Memberstack instance:', memberstack);
      
      const result = await memberstack.openModal('CHECKOUT', {
        plans: [{
          priceId: process.env.REACT_APP_PRICE_ID,
          quantity: 1
        }]
      });
      
      console.log('Checkout result:', result);
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      className="purchase-button" 
      onClick={handlePurchase}
      disabled={isLoading}
    >
      {isLoading ? 'Processing...' : 'Buy this course for $19.99'}
    </button>
  );
};

export default PurchaseButton;