import logo from './logo.svg';
// import './App.css';
import Picturebox from './components/Picturebox'
import TipsResources from './components/TipsResources'

function App() {
  return (
    <div className="App">
      <h2>Writeology</h2>
      <p>HOME PAGES CATEGORIES CONTACT SUBSCRIBE</p>
      <Picturebox />
      <TipsResources name='TIPS' title='How to choose the best management software'/>
    </div>
  );
}

export default App;
