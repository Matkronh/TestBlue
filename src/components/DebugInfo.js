import { useEffect } from 'react';
import memberstackDOM from '@memberstack/dom';

const DebugInfo = () => {
  useEffect(() => {
    const checkMemberstack = async () => {
      const ms = memberstackDOM.init({
        publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
      });
      
      console.log('Memberstack initialized:', ms);
      console.log('Price ID:', process.env.REACT_APP_PRICE_ID);
      console.log('Public Key:', process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY);
    };

    checkMemberstack();
  }, []);

  return null;
};

export default DebugInfo;