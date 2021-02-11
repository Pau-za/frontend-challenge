import DirectoryList from "./ui/components/DirectoryList";

const fetchOffersList = () => {
    // I do the fetch to the data
    fetch(
        "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory",
    )
        .then(response => response.json())
        .then(data => {
            // console.log(data.data);
            let restaurant;
            let discount;
            data.data.forEach(element => {
                for (const key in element) {
                    restaurant = element.name;
                    discount = element.discount;
                    console.log(restaurant, discount);
                }
                DirectoryList(restaurant, discount);
            });
        });
    return [];
};

export default function App() {
    return (
        <div>
            <section className=" bg-gray-100 flex-1 justify-center h-96">
                <h2 class="py-4 text-4xl text-center ">
                    Know the offers our partners got for you!
                </h2>
            </section>
            <DirectoryList offerList={fetchOffersList()} />
            {/* <DirectoryList offerList={setRestaurant} /> */}
        </div>
    );
}
