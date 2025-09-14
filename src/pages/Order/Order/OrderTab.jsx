import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({ item }) => {
    return (
        <div className='grid grid-cols-3 gap-8'>
            {
                item.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;