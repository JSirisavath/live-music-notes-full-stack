// Custom Component for the server call
import { Link } from 'react-router-dom';
import TestingComponent from '../components/TestingComponent';

const TestingPage = () => {
  const buttonClassNameTailwindCSS =
    'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded';
  return (
    <div>
      <Link to="/">
        <h1>Testing Page</h1>
      </Link>

      {/* Server Call component added here */}
      {/* Pass in a value for text color, this is just an example of passing in props  in  React */}
      <TestingComponent
        buttonText="Click me to Test Server Call!!!"
        buttonClassNameTailwindCSS={buttonClassNameTailwindCSS}
      />
    </div>
  );
};

export default TestingPage;
