import axios from "axios";


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
    serverTest() {
      return axios.get("/api/test").then(handleResponse).catch(handleError);
    },
  };
};

export default AppApiService;
