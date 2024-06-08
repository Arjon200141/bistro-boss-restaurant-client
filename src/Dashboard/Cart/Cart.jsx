import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart , refetch] = useCart();
    const axiossecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    const handleDelete = id => {
        console.log(id);
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
                axiossecure.delete(`/carts/${id}`)
                .then(res => {
                    console.log(res);
                    if(res.data.deletedCount>0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        }); 
                    }
                })
                
            }
        });
    }

    return (
        <div>
            <SectionTitle
                subHeading={"---MY CART---"}
                heading={"WANNA ADD MORE?"}
            ></SectionTitle>
            <div className="mx-20">
                <div className="text-3xl font-semibold flex items-center justify-between">
                    <h2>TOTAL ORDERS : {cart.length}</h2>
                    <h2>TOTAL PRICE : {totalPrice} $</h2>
                    <button className="btn text-2xl bg-orange-300">PAY</button>
                </div>

                <div className="overflow-x-auto my-12">
                    <table className="table table-zebra text-2xl">
                        <thead>
                            <tr className="text-xl">
                                <th>ITEM NO.</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>

                        <tbody className="space-y-4">
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td><img src={item.image} alt="" className="h-16 w-16" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost mt-6 ml-8 text-red-500 text-2xl"><MdDeleteForever /></button>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;