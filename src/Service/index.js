import axios from 'axios';

// Create an axios instance
const AppApiService = () => {
  // this handles the response from the server
  const handleResponse = (response) => {
    return response.data;
  };

  //   this handles the error from the server
  const handleError = (error) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  };

  return {
    // this is the function that will be called from the App.js to the server endpoint
    async serverTest() {
      try {
        // Getting a response from call api/test call
        const response = await axios.get('/api/test');
        return handleResponse(response);
      } catch (error) {
        return handleError(error);
      }
    },
  };
};

export default AppApiService;
