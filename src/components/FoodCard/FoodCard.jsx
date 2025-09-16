import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { name, image, price, recipe, category, _id } = item;
    const axiosSecurre = useAxiosSecure();
    const [, refetch] = useCart();


    const handelShopingCart = () => {
        if (user && user.email) {
            const cartItem = { menuId: _id, email: user.email, name, image, price };
            axiosSecurre.post('/cart', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} add to your cart`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

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
                    <button onClick={() => handelShopingCart(item)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;