import styles from './footer.module.css';

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className={styles['footer']}>
            {isOpen ? (
                <div className={styles['order']}>
                    <p className={styles['order']}>
                        We're open until {closeHour}:00. Come visit us or order
                        online.
                    </p>
                    <button className={styles['btn']}>Order</button>
                </div>
            ) : (
                <p className={styles['order']}>
                    We're happy to welcome you between {openHour}:00 and{' '}
                    {closeHour}:00.
                </p>
            )}
        </footer>
    );
};

export default Footer;
