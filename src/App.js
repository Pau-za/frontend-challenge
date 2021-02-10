import DirectoryList from "./ui/components/DirectoryList";

const fetchOffersList = () => {
    // Hago la petición a la API
    fetch(
        "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory",
    )
        .then(response => response.json())
        .then(data => console.log(data));

    return [];
};

export default function App() {
    return (
        <div>
            <p class="py-4 text-lg text-center">Great!</p>

            <DirectoryList offerList={fetchOffersList()} />
        </div>
    );
}
