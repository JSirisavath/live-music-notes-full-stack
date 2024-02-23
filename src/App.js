import "./App.css";
// import the service from the Service folder
import AppApiService from "./Service/index.js";

function App() {
  // call the service
  const service = AppApiService();

  // call the serverTest function from the service
  service.serverTest().then((response) => {
    console.log(response);
  });

  return (
    <div className="App">
      <h1>START OF A GREAT PROJECT!</h1>
    </div>
  );
}

export default App;
