import React from 'react';
import mainLog from './logo/AutomationStackCafe`.png'
import './App.css';
import Classprops from './Classprops/Classprops';
import Functionprops from './Classprops/Functionprops';
import Newcom from './Component/NewCom';
// import { render } from '@testing-library/react';
 
class App extends React.Component {
 
  render() { 
  
  return(
    <div className="App">
            <div>

<Classprops name="Vister1" place="placex" country="india">
 <div > <button> Click </button> </div> 
</Classprops>
</div>
      <header className="App-header">
        <img src={mainLog} className="mainlogo" alt="logomain" />
        <p>
          In Progress  Edit <code>src/App.js</code> and save to reload to Enchance.
        </p>
        <a
          className="App-link"
          href="https:///AutomationStackCafe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         Author : Sampath
        </a>
      </header>
<div>
  <Newcom/>
</div>

      <Functionprops section="section gives">
        </Functionprops>

    </div>


    
  );
}
}

export default App;
