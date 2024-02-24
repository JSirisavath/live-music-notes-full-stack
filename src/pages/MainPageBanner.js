// Linking between page
import { Link } from 'react-router-dom';

const MainPageBanner = () => {
  return (
    <div>
      <h1>START OF A GREAT PROJECT!</h1>
      <Link to="/test" className="text-3xl font-bold underline">
        Go To Testing Page Link!
      </Link>
    </div>
  );
};

export default MainPageBanner;
