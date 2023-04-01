import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from "./Routes/MyRoutes";
import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <MyRoutes/>
    </div>
  );
}

export default App;
