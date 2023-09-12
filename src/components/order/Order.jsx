import styles from './order.module.css';

const Order = ({ closeHour, openHour }) => {
    return (
        <div>
            <div className={styles['order']}>
                <p className={styles['order']}>
                    We're open from {openHour}:00 to {closeHour}:00. Come visit
                    us or order online.
                </p>
                <button className={styles['btn']}>Order</button>
            </div>
        </div>
    );
};

export default Order;
