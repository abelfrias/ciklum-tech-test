import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `pages` directory
import Home from './Pages/Home';

const App = () => (
    <div id="app">
        <Router>
            <Home path="/" />
        </Router>
    </div>
)

export default App;
