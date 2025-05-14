import { useEffect } from 'react';
import memberstackDOM from '@memberstack/dom';

const LoginButton = () => {
  useEffect(() => {
    const memberstack = memberstackDOM.init({
      publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
    });

    memberstack.openModal('LOGIN');
  }, []);

  return (
    <button 
      className="login-button"
      onClick={() => {
        const memberstack = memberstackDOM.init({
          publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
        });
        memberstack.openModal('LOGIN');
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;