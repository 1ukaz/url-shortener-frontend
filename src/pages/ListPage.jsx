import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { ArrowUpRight, Trash, PlusLg } from 'react-bootstrap-icons';
import Alert from 'react-bootstrap/Alert';
import { toast } from 'react-toastify';
import { getUserIdentifier } from '../utils/helpers';
import urlService from '../services/urlService';
import Spinner from '../utils/Spinner';

const IndexPage = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [urlToDelete, setUrlToDelete] = useState(null);
  const userId = getUserIdentifier();
  const navigate = useNavigate();

  const fetchUrls = useCallback(async () => {
    try {
      const response = await urlService.getUrlList(userId);
      setUrls(response.data.urls);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {    
    fetchUrls();
  }, [fetchUrls]);

  const handleDeleteUrl = async () => {
    try {
      setLoading(true);
      const response = await urlService.deleteUrlByCode(urlToDelete);
      toast.success(response.message);
      fetchUrls();
    } catch (error) {
      toast.error('Error deleting URL:' + error.response.data.message);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  const handleGetUrlById = async (code) => {
    try {
      const res = await urlService.getUrlByCode(code);
      navigate('/redirect', { state: { originalUrl: res.data.original_url } });
    } catch (error) {
      toast.error('Error fetching URL by ID');
    }
  };

  const handleShowModal = (code) => {
    setUrlToDelete(code);
    setShowModal(true);
  };

  return (
    <Container className="text-left pt-3">
      <Row className="justify-content-between align-items-center pb-3">
        <Col>
          <h2>Shortened URLs:</h2>
        </Col>
        <Col xs="auto">
          <Button variant="light" onClick={() => navigate('/')}><PlusLg /></Button>
        </Col>
      </Row>
      {loading ? (
        <Spinner animation="border" />
      ) : urls.length > 0 ? (
        <>
          <Row className="font-weight-bold bg-light border-bottom py-2">
            <Col xs={1}>Id</Col>
            <Col xs={2}>Code</Col>
            <Col xs={8}>Original URL</Col>
            <Col xs={1}>Actions</Col>
          </Row>
          {urls.map((url, index) => (
            <Row key={index} className="border-bottom py-2 align-items-center">
              <Col xs={1}>#{url.id}</Col>
              <Col xs={2}>{url.code}</Col>
              <Col xs={8}>{url.original_url.length > 80 ? url.original_url.slice(0, 80) + '...' : url.original_url}</Col>
              <Col xs={1}>
                <Button variant="secondary" size="sm" onClick={() => handleGetUrlById(url.code)}>
                  <ArrowUpRight />
                </Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleShowModal(url.code)}>
                  <Trash />
                </Button>
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <Alert variant="secondary">
          No URLs found. Add a new one by clicking the button above right!
        </Alert>
      )}
  
      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete URL "{urlToDelete}"?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteUrl}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );  
};

export default IndexPage;
