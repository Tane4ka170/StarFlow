import axios from 'axios';

const API_BASE_URL = 'https://sw-api.starnavi.io';

export const fetchHeroes = async (page = 1) => {
  const response = await axios.get(`${API_BASE_URL}/people/?page=${page}`);
  return response.data;
};

export const fetchHeroDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/people/${id}/`);
  return response.data;
};
