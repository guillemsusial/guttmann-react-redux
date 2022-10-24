import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';

import './assets/stylesheets/App.sass';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
