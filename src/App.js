import './App.css';
import Mainpage from './mainpage';
import Secondpage from './secondpage';
import Thirdpage from './thirdpage';
import Reviews from './Reviews';
import Author from './Author';
import Price from './Price';
import Footerpage from './Footer';
import Another from './Another';

function App() {
  return (
    <div className="App">
        <Mainpage/>
        <Secondpage/>
        <Thirdpage/>
        <Another/>
        <Reviews/>
        <Author/>
        <Price/>
        <Footerpage/>
    </div>
  );
}

export default App;
