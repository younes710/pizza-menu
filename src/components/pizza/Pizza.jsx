import styles from './pizza.module.css';

const Pizza = (props) => {
    const { name, ingredients, photoName, price, soldOut } = props;
    return (
        <div className={styles['pizza']}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}</span>
            </div>
        </div>
    );
};

export default Pizza;
