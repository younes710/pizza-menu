import styles from './menu.module.css';
import Pizza from '../pizza/Pizza';

const Menu = () => {
    return (
        <div className={styles['menu']}>
            <h2>Our Menu</h2>
            <Pizza
                name='Pizza Spinaci'
                ingredients='Tomato, mozarella, spinach, and ricotta cheese'
                photoName='pizzas/spinaci.jpg'
                price={12}
                soldOut={false}
            />
            <Pizza
                name='Pizza Funghi'
                ingredients='Tomato, mozarella, mushrooms, and onion'
                photoName='pizzas/funghi.jpg'
                price={12}
                soldOut={false}
            />
        </div>
    );
};

export default Menu;
