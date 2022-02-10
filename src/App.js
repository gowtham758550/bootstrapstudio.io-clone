import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar';
import Landing from './components/Landing';
import Features from './components/Features';

function App() {
  return (
    <div>
      <NavigationBar />
      <Landing />
      <Features />
    </div>
  );
}

export default App;
