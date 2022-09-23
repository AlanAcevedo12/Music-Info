import { Link } from "react-router-dom";

function Landing() {
    return (
      <div className="Landing">
          <h1>Bienvenido a Music Info</h1>
          <h5>Powered by Deezer API</h5>
          <Link to="/home">
            <button>Ingresar</button>
          </Link>
      </div>
    );
  }
  
  export default Landing;