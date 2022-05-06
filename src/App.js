// import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This is a sample React Router Project!
        </h1>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;

function Layout(){
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

function Home(){
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function About(){
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

function Dashboard(){
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

function NoMatch(){
  return (
    <div>
      <h1>NoMatch</h1>
      <Link to="/">Home</Link>
    </div>
  )
}