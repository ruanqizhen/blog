import React, { useEffect } from 'react';
import NotFound from '@theme-original/NotFound';

export default function NotFoundWrapper(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <NotFound {...props} />;
}
