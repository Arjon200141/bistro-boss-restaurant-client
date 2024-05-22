const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="inter-font w-4/12 mx-auto my-12">
            <p className="text-[#D99904] text-xl pl-12 my-4">{subHeading}</p>
            <h2 className="text-[#151515] text-4xl pl-8 uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;