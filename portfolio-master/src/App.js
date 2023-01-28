import {BrowserRouter as Router, } from 'react-router-dom';
import Navibar from './components/Navibar';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
function App() {

  return (
    <Router>
    <div className="App">
    <Navibar />
    <AnimatedRoutes />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
