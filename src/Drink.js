import axios from 'axios';
import React, {useEffect, useState} from 'react'

const URL = 'https://www.thecocktaildb.com/api/json/v1/';
const APIKEY = '1/random.php';


export default function Drink() {
    const[error,setError] =useState(null);
    const[isLoaded, setIsLoaded] =useState(false);
    const [drink, setDrink] = useState([]);

    useEffect(() => {
        const address = URL + APIKEY;

        
        axios.get(address)
            .then((response) =>{
                setError(null);
                setIsLoaded(true);
                setDrink(response.data.drinks);
            }).catch(error => {
                alert(error);
            });
        }, [])

    if (error) {
        return <p>{error.message}</p>;
    }
    else if(!isLoaded) {
        return <p>Loading....</p>;
    }
    else{
        return (
            <div style={{width:300}}>
                {drink.map(drink =>(
                    <div key={drink.strDrink}>
                        <h2>{drink.strDrink}</h2>
                        <img src={drink.strDrinkThumb} alt=''></img>
                        <h4>{drink.strInstructions}</h4>
                        <ul>
                            <li>{drink.strIngredient1} {drink.strMeasure1}</li>
                            <li>{drink.strIngredient2} {drink.strMeasure2}</li>
                            <li>{drink.strIngredient3} {drink.strMeasure3}</li>
                            <li>{drink.strIngredient4} {drink.strMeasure4}</li>
                            <li>{drink.strIngredient5} {drink.strMeasure5}</li>
                            <li>{drink.strIngredient6} {drink.strMeasure6}</li>
                            <li>{drink.strIngredient7} {drink.strMeasure7}</li>
                            <li>{drink.strIngredient8} {drink.strMeasure8}</li>
                            <li>{drink.strIngredient9} {drink.strMeasure9}</li>
                            <li>{drink.strIngredient10} {drink.strMeasure10}</li>
                            <li>{drink.strIngredient12} {drink.strMeasure11}</li>
                            <li>{drink.strIngredient13} {drink.strMeasure12}</li>
                            <li>{drink.strIngredient14} {drink.strMeasure13}</li>
                            <li>{drink.strIngredient15} {drink.strMeasure14}</li>
                        </ul>
                    </div>
                ))}
            </div>
        );

    }
}
