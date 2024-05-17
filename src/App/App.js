import { BusinessList } from '../Components/BusinessList/BusinessList';
import { SearchBar } from '../Components/SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>ravenous</h1>
      </div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
