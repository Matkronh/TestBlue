import { useEffect, useState } from 'react';
import memberstackDOM from '@memberstack/dom';
import { useNavigate } from 'react-router-dom';

const MembersPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMemberAccess = async () => {
      try {
        const memberstack = memberstackDOM.init({
          publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
        });

        const { data: member } = await memberstack.getCurrentMember();
        
        if (!member) {
          navigate('/');
        } else {
          const hasAccess = await memberstack.hasPlanAccess({
            planId: process.env.REACT_APP_PRICE_ID
          });
          
          if (!hasAccess) {
            navigate('/');
          }
        }
      } catch (error) {
        console.error('Access check error:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    checkMemberAccess();
  }, [navigate]);

  if (loading) {
    return <div className="loading">Verifying access...</div>;
  }

  return (
    <div className="members-content">
      <h1>Welcome to the Course!</h1>
      <p>Here's your exclusive content...</p>
      <button 
        onClick={async () => {
          const memberstack = memberstackDOM.init({
            publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
          });
          await memberstack.logout();
          navigate('/');
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default MembersPage;