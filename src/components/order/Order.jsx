import styles from './order.module.css';

const Order = (props) => {
    return (
        <div>
            <div className={styles['order']}>
                <p className={styles['order']}>
                    We're open until {props.closeHour}:00. Come visit us or
                    order online.
                </p>
                <button className={styles['btn']}>Order</button>
            </div>
        </div>
    );
};

export default Order;
