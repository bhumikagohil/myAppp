import './App.css';

import MainLayout from './components/Main/main';

import data from "./components/data"


function App() {
  return (
    <div className="App">
      <MainLayout 
        title={data.title}  
        quote={data.quote} 
        views={data.views}
        replays={data.replays}
        uploaded={data.uploaded}
        object={data}
      />
    </div>
  );
}

export default App;

