import api from './api';

const urlService = {
  shortenUrl: async (url, userId) => {
    // In this case I am returning the whole response object to have full response access
    try {
      return await api.post('/shorten', {
        original_url: url,
        user_identifier: userId,
      });
    } catch (error) {
      throw error;
    }
  },

  getUrlList: async (userId) => {
    try {
      const response = await api.get(`/list?user_identifier=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching URL list:', error);
      throw error;
    }
  },

  getUrlByCode: async (code) => {
    try {
      const response = await api.get(`/${code}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching URL by ID:', error);
      throw error;
    }
  },

  deleteUrlByCode: async (code) => {
    try {
      const response = await api.delete(`/${code}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting URL by ID:', error);
      throw error;
    }
  },
};

export default urlService;
