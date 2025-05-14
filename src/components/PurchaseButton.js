import { useEffect, useState } from 'react';
import useMemberstack from '../hooks/useMemberstack';

const PurchaseButton = () => {
  const memberstack = useMemberstack();
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    if (!memberstack) return;
    
    setIsLoading(true);
    try {
      await memberstack.openModal('CHECKOUT', {
        plans: [{
          priceId: process.env.REACT_APP_PRICE_ID,
          quantity: 1
        }]
      });
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