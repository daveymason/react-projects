import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const BURGERS = [
    {
        id: 'm1',
        name: 'New Yorker',
        description: 'Double bacon, double cheese, no vegetables, no fuss. ',
        price: 12,
    },
    {
        id: 'm2',
        name: 'Italian Job',
        description: 'Pastrami, pepperoni & pickle cooked in fine red wine.',
        price: 11,
    },
    {
        id: 'm3',
        name: 'Irish Breakfast',
        description: 'Guinness infused pork & bacon from the Emerald Isle.',
        price: 15,
    },
    {
        id: 'm4',
        name: 'Sichuan Sizzler',
        description: 'The perfect amount of tongue zapping Sichuan sauce.',
        price: 14,
    },
    {
        id: 'm5',
        name: 'Classic Chicken',
        description: 'Kentucky fried breaded chicken with lettuce and mayo. ',
        price: 13,
    },

];

const AvailableMeals = () => {
    const mealsList = BURGERS.map(meal => <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price}/>);

    return(
    <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
)
};

export default AvailableMeals;