const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="inter-font w-3/12 mx-auto mt-12">
            <p className="text-[#D99904] text-xl pl-6 my-4">{subHeading}</p>
            <h2 className="text-[#151515] text-4xl  uppercase border-y-4 py-4 pl-6">{heading}</h2>
        </div>
    );
};

export default SectionTitle;