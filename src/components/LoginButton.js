import memberstackDOM from '@memberstack/dom';

const LoginButton = () => {
  const handleLogin = () => {
    const memberstack = memberstackDOM.init({
      publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
    });
    memberstack.openModal('LOGIN');
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Log In
    </button>
  );
};

export default LoginButton;