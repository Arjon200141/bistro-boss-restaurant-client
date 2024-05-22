const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div>
            <div className="flex space-x-3">
                <img src={image} alt="" style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[150px] h-16" />
                <div>
                    <h3 className="uppercase">{name}--------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-[#BB8506]">${price}</p>
            </div>
            
        </div>
    );
};

export default MenuItem;