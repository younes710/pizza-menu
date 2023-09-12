import styles from './pizza.module.css';

const Pizza = ({ pizzaObj }) => {
    return (
        <li className={styles['pizza']}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.price}</span>
            </div>
        </li>
    );
};

export default Pizza;
