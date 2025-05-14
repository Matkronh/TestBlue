import { useEffect, useState } from 'react';
import memberstackDOM from '@memberstack/dom';

export default function useMemberstack() {
  const [memberstack, setMemberstack] = useState(null);

  useEffect(() => {
    const ms = memberstackDOM.init({
      publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
      appId: process.env.REACT_APP_MEMBERSTACK_APP_ID
    });
    setMemberstack(ms);
  }, []);

  return memberstack;
}