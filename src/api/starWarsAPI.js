import axios from 'axios';

const API_BASE_URL = 'https://sw-api.starnavi.io';

export const fetchHeroes = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/people/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching heroes:', error);
    throw error;
  }
};

export const fetchHeroDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/people/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching hero details for ID ${id}:`, error);
    throw error;
  }
};

export const fetchFilmDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/films/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching film details for ID ${id}:`, error);
    throw error;
  }
};

export const fetchStarshipDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/starships/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching starship details for ID ${id}:`, error);
    throw error;
  }
};
