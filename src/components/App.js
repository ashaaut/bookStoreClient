
import './../assets/css/App.css';
import baseUrl from './../config/index';
import axios from 'axios';
import Layout from './layout/Layout';

function App() {

  axios(`${baseUrl}/books`).then(books=>{
    console.log(books);
  })
  return (
    <div className='App'>
      <Layout/>
    </div>
    // <Layout>
    //   <div>
    //     Hello
    //   </div>
    // </Layout>
  );
}

export default App;
