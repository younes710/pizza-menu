import React from 'react';
// React v18
import ReactDOM from 'react-dom/client';
// React before 18
// import ReactDOM from 'react-dom';
import styles from './index.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';

// React v18
function App() {
    return (
        <div className={styles['container']}>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// React.render(<App/>, document.getElementById('root'));
