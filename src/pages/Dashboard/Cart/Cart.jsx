import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handelDelete = (id, name) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: `${name} Deleted!`,
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })

            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl mb-5">Total Item: {cart.length}</h2>
                <h2 className="text-3xl mb-5">Total Price: ${Math.floor(totalPrice)}</h2>
                <button className="btn btn-outline">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, idx) => <tr key={item._id}>
                                <th>
                                    <label>
                                        <span className="ml-2">{idx + 1}</span>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handelDelete(item._id, item.name)} className="btn btn-ghost"><MdDelete className="text-xl text-rose-600"></MdDelete></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;