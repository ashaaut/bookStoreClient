
import './../assets/css/App.css';
import baseUrl from './../config/index';
import axios from 'axios';

function App() {

  axios(`${baseUrl}/books`).then(books=>{
    console.log(books);
  })
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
