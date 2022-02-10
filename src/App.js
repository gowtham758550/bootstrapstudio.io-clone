import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar';
import Landing from './components/Landing';
import Features from './components/Features';
import Carousels from './components/Carousels';

function App() {
  const imageList1 = [
    { url: 'https://bootstrapstudio.io/assets/img/templates/template_1.jpg' },
    { url: 'https://bootstrapstudio.io/assets/img/templates/template_2.jpg' },
    { url: 'https://bootstrapstudio.io/assets/img/templates/template_3.jpg' },
    { url: 'https://bootstrapstudio.io/assets/img/templates/template_4.png' },
    { url: 'https://bootstrapstudio.io/assets/img/templates/template_5.jpg' },
    { url: 'https://bootstrapstudio.io/assets/img/templates/template_6.jpg' },
  ]
  return (
    <div>
      <NavigationBar />
      <Landing />
      <Features />
      <Carousels imageList={imageList1} />
    </div>
  );
}

export default App;
