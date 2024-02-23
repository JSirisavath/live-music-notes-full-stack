// Custom Component for the server call
import { Link } from 'react-router-dom';
import TestingComponent from '../components/TestingComponent';

const TestingPage = () => {
  return (
    <div>
      <Link to="/">
        <h1>Testing Page</h1>
      </Link>

      {/* Server Call component added here */}
      {/* Pass in a value for text color, this is just an example of passing in props  in  React */}
      <TestingComponent buttonText="Click me to Test Server Call!!!" />
    </div>
  );
};

export default TestingPage;
