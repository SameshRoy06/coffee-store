import AddCoffee from "../AddCoffee/AddCoffee";
import Coffees from "../Coffees/Coffees";
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const coffeeData = useLoaderData()
    return (
        <div className=" container mx-auto text-center text-5xl mt-8">
            <h1>Hot Hot Cool Coffee : {coffeeData.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                {
                    coffeeData.map(coffees => <Coffees key={coffees._id} coffes={coffees}></Coffees>)
                }
            </div>
 
            <AddCoffee></AddCoffee>
         

        </div>
    );
};

export default Home;