import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";


const FoodCard = ({ item }) => {
    const { image, name, recipe, price,_id } = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const axiossecure = useAxiosSecure();
    const [,refetch] = useCart();

    const handleAddtoCart = food =>{
        if(user && user.email){
            console.log(user.email,food);
            const cartItem = {
                menuId:_id,
                email:user.email,
                name,
                image,
                price
            }
            axiossecure.post('http://localhost:5000/carts',cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        title: "Success!",
                        text: `${name} Added to Cart Successfully!!`,
                        icon: "success"
                      });
                      refetch();
                }
            })

        }
        else{
            alert("User is Not Logged In!");
            navigate('/login');
        }
    }
    return (
        <div className="card card-compact bg-[#f4f2f2] shadow-lg">
            <figure><img src={image} alt="Shoes"/></figure>
            <p className="absolute right-0 mr-2 mt-4 px-3 bg-slate-900 text-white">${price}</p>
            <div className="card-body text-center space-y-4">
                <h2 className=" text-2xl font-semibold ">{name}</h2>
                <p className="text-sm text-[#737373]">{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                     onClick={()=>handleAddtoCart(item)} className="btn font-semibold bg-slate-200 text-lg uppercase hover:bg-gray-700 hover:text-orange-300 text-[#BB8506] border-0 border-b-4 border-orange-400">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;