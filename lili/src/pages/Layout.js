import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  console.log ("a:");
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes1">notes1</Link>
          </li>
          <li>
            <Link to="/try1">try1</Link>
          </li>
          <li>
            <Link to="/GreetCard">Greeting Card Generator</Link>
          </li>
        </ul>
      </nav>
      <h1>hi</h1>
      <Outlet />
    </>
  )
};

export default Layout;