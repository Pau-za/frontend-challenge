import DirectoryList from "./ui/components/DirectoryList";

const fetchOffersList = async () => {
    // I fetch the data
    await fetch(
        "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory",
    )
        .then(response => response.json())
        .then(data => {
            const partners = data;
            console.log(partners);
            DirectoryList(partners);
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
        </div>
    );
}
