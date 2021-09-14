import { Link } from "react-router-3";

function Home(props) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">🏠🏠Home🏠🏠</Link>
          </li>
          <li>
            <Link to="/guauguaus">🐶Guauguaus🐶</Link>
          </li>
          <li>
            <Link to="/miausmiaus">😺Miausmiaus😺</Link>
          </li>
        </ul>
        <h1>✨✨Tenemos✨</h1>
      </div>
    </div>
  );
}

export default Home;
