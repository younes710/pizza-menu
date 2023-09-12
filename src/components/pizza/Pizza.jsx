import styles from './pizza.module.css';

const Pizza = (props) => {
    return (
        <li className={styles['pizza']}>
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </div>
        </li>
    );
};

export default Pizza;
