import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
   const axiossecure = useAxiosSecure();
   const {data : cart = []} = useQuery({
    queryKey: ['cart'],
    queryFn: async () =>{
        const res = await axiossecure.get('/carts');
        return res.data;
    }
   })
   return [cart];
};

export default useCart;