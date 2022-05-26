import Calculator from "./components/Calculator";
import List from 'devextreme-react/ui/list'
import './App.css';
import {dataSource} from "./data";

function App() {
  return (
      <div className='App'>
        <Calculator/>
        <List
            width={300}
            dataSource={dataSource}
        />
      </div>
  );
}

export default App;
