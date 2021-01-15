import { Link } from 'react-router-dom';

const Error = () => {
  return(
    <div className="errors">
      <h2>Oops, that page does not exist!</h2>
      <Link to="/" className="back">Back to Home!</Link>
    </div>
  );
}

export default Error;

