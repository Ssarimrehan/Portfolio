// API Configuration
const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://portfolio-backend-five-tau.vercel.app";

export const getApiUrl = (endpoint) => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  return `${API_URL}/${cleanEndpoint}`;
};

export default API_URL;
