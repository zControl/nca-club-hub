const BASE_DOMAIN = import.meta.env.VITE_API_URL || 'localhost';
const BASE_PORT = import.meta.env.VITE_API_PORT || '3000';
const BASE_VERSION = import.meta.env.VITE_API_VERSION || 'v1';

const BASE_URL = `http://${BASE_DOMAIN}:${BASE_PORT}/${BASE_VERSION}`;

export const API_ENDPOINTS = {
  BASE: BASE_URL,
}
