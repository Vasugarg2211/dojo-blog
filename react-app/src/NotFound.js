import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <h2>That page can not be found</h2>
            <Link to="/">back to home page...</Link>
        </div>
    );
}
 
export default NotFound;