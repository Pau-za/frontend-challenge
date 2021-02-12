export default function DirectoryList({ offerList, ...props }) {
    log.debug("Here is your offers list", offerList);
    console.log(props.data);
    // console.log(offerList);
    return (
        <div className="flex overflow-hidden -my-8">
            <ul className="flex items-center w-full py-8">
                <li className="px-3 md:px-4 flex-none">
                    <div className="shadow-lg rounded-xl flex-none w-80 md:w-xl">
                        <div className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                            <h3>Nombre</h3>
                            <p>Descuento: bla</p>
                        </div>
                        <div className="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-yellow-400 to-orange-500">
                            <div className="flex-auto">
                                <p>Rules</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
