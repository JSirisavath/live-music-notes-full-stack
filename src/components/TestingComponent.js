// import the service from the Service folder
import AppApiService from '../Service/index';

// Destructure props when receiving props
const TestingComponent = ({ buttonText, buttonClassNameTailwindCSS }) => {
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
      {/* Use the passed in props from Testing page here*/}
      <button
        onClick={exampleServiceFunction}
        className={buttonClassNameTailwindCSS}
      >
        {/* Props, will receive button text here*/}
        {buttonText}
      </button>
    </div>
  );
};

export default TestingComponent;
