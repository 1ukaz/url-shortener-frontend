import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { getUserIdentifier } from '../utils/helpers';
import Spinner from '../utils/Spinner';
import urlService from '../services/urlService';

const CreatePage = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (url.trim() === '' || !/^(https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?)$/.test(url)) {
      setError('Please enter a valid URL');
      setLoading(false);
      return;
    }
    try {
      const response = await urlService.shortenUrl(url, getUserIdentifier());
      if (response.status === 201) {
        toast.success(response.data.message);
        navigate('/list');
      }
    } catch (error) {
      setError('Error shortening URL: ' + error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="text-left pt-3">
      <h2 className='pb-5'>Create new URL</h2>
      {loading ? (
        <Spinner />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUrl">
            <Form.Label>Original URL</Form.Label>
            <Form.Control
              type="text"
              placeholder='...'
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError('');
              }}
              isInvalid={!!error}
            />
            {/* Mensaje de error */}
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="text-right">
            <Button variant="primary" type="submit">CREATE</Button>
          </div>
        </Form>
      )}
    </Container>
  );
};

export default CreatePage;
