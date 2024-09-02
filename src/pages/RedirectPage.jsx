import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Spinner from '../utils/Spinner';

const RedirectPage = () => {
  const location = useLocation();
  const { originalUrl } = location.state || {};

  useEffect(() => {
    if (originalUrl) {
      const timer = setTimeout(() => {
        window.location.href = originalUrl;
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      toast.error('No original URL received');
    }
  }, [originalUrl]);

  return (
    <Container className="text-center pt-3">
      <h3>Wait a moment...</h3>
      <Spinner animation="border" />
    </Container>
  );
};

export default RedirectPage;
