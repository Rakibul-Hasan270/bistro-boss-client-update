
const FoodCard = ({ item }) => {
    const { name, image, price, recipe ,category} = item;

    return (
        <div className="card bg-base-100 shadow-sm border">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p>price: ${price}</p>
                <p>{category}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;