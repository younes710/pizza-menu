import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            {new Date().toLocaleTimeString()}
            We're currently open
        </footer>
    );
};

export default Footer;
