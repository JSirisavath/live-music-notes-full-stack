// import the service from the Service folder
import AppApiService from '../Service/index';

const TestingComponent = (props) => {
  // A function for calling an example API service
  const exampleServiceFunction = () => {
    // call the service from Index.js
    const service = AppApiService();
    // call the serverTest function from the service
    service.serverTest().then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      {/* Add Button OnClick and then pass in the function to fetch the route you made in endpoint.js */}
      {/* Tailwind is not working here, but I looked up how to use tailwinds in components but you would do so here.  */}
      <button
        onClick={exampleServiceFunction}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded"
      >
        {/* Props, will recieve button text here*/}
        {props.buttonText}
      </button>
    </div>
  );
};

export default TestingComponent;
