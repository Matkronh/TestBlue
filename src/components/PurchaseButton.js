import memberstackDOM from '@memberstack/dom';

const PurchaseButton = () => {
  const handlePurchase = () => {
    const memberstack = memberstackDOM.init({
      publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
    });

    memberstack.openModal('CHECKOUT', {
      plans: [{
        priceId: process.env.REACT_APP_PRICE_ID,
        quantity: 1
      }]
    });
  };

  return (
    <button className="purchase-button" onClick={handlePurchase}>
      Buy this course for $19.99
    </button>
  );
};

export default PurchaseButton;