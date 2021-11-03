import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route  } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navibar from './components/Navbar/Navibar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';



function App() {
  return (
    <>
    <Router>
    <Navibar />
    <Switch>
      <Route path="/home" render={ () => <Home />}/>
      <Route path="/profile"  render={ () => <Profile />} />
      <Route path="/users"  render={ () => <Users />} />
    </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
