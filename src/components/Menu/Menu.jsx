import styles from './menu.module.css';
import Pizza from '../Pizza';

const Menu = () => {
    return (
        <div className={styles['menu']}>
            <h2>Our Menu</h2>
            <Pizza />
        </div>
    );
};

export default Menu;
