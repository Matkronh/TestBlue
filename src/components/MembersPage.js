import { useEffect, useState } from 'react';
import memberstackDOM from '@memberstack/dom';
import { useNavigate } from 'react-router-dom';

const MembersPage = () => {
  const [member, setMember] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const memberstack = memberstackDOM.init({
      publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
    });

    memberstack.getCurrentMember()
      .then(({ data: member }) => {
        if (!member) {
          navigate('/');
        } else {
          setMember(member);
        }
      })
      .catch(() => navigate('/'));
  }, [navigate]);

  if (!member) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="members-content">
      <h1>Welcome to the Course!</h1>
      <p>Here's your exclusive content...</p>
      {/* Add your course content here */}
    </div>
  );
};

export default MembersPage;