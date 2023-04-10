import addSubscripts from "../util/MolHTML"

function FeaturedMoleculeCard(props) {
    return (
        <div className="mx-auto bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden w-96">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-32" src={`https://placehold.co/500/F0F0F0/F0F0F0`} alt="Card image"/>
                </div>
                <div className="p-8">
                    <div className={`uppercase tracking-wide text-sm text-${props.color}-500 font-semibold`}>{addSubscripts(props.formula)}</div>
                    <div className={`block mt-1 text-2xl leading-tight font-bold text-${props.color}-500`}>{props.name}</div>
                    <p className="mt-2 text-gray-500">{props.description}</p>
                    <table className="mt-2 text-gray-500 cursor-default">
                        <tr>
                            <td className="pr-4 font-semibold">ATOMS</td>
                            <td>{props.atoms}</td>
                        </tr>
                        <tr>
                            <td className="pr-4 font-semibold">BONDS</td>
                            <td>{props.bonds}</td>
                        </tr>
                    </table>
                    <div className="mt-4">
                        <a href="#" className={`bg-${props.color}-500 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-full hidden`}>View molecule</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

FeaturedMoleculeCard.defaultProps = {
    formula: '',
    atoms: '-',
    bonds: '-'
};


export default FeaturedMoleculeCard;