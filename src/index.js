import React from 'react';
import GameContainer from './Components/SumGame/Game.js';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="App">
            <GameContainer />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;