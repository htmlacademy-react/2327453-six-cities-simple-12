import {Link} from "react-router-dom";

function NotFound(): JSX.Element {
  return <>
    404 Not Found
    <Link to='/'>Go to main page</Link>
  </>
}

export default NotFound;
