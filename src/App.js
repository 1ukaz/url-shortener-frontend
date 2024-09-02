import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import ListPage from './pages/ListPage';
import RedirectPage from './pages/RedirectPage';

const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </Router>
  );

export default App;

