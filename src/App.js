import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/Blogs/BlogDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
