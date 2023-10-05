import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push('/desenvolvimento');
  }, []);

  return null;
}

export default Index;
