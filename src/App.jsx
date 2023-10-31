import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListArticles from './components/ListOfArticles/ListOfArticles';
import ReadArticle from './components/ReadArticle/ReadArticle';

function App() {
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/read-article" element={<ReadArticle/>}/>
          <Route path="/" element={<ListArticles/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
