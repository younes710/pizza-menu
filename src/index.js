import React, { StrictMode } from 'react';
// React v18
import ReactDOM from 'react-dom/client';
// React before 18
// import ReactDOM from 'react-dom';

function App() {
    return <h1>Hello React</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    React.createElement(
        <StrictMode>
            <App />
        </StrictMode>
    )
);

// React before 18
// React.render(<App/>, document.getElementById('root'));
