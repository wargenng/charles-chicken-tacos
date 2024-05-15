import { createSignal } from "solid-js";

const tacoPrice = 1.59;
const tax = 0.08375;
const user = "charles-too";

function App() {
    const [tacoAmount, setTacoAmount] = createSignal(1);

    const handleMinus = () => {
        setTacoAmount(tacoAmount() > 1 ? tacoAmount() - 1 : 1);
    };

    const handlePlus = () => {
        setTacoAmount(tacoAmount() < 20 ? tacoAmount() + 1 : 20);
    };

    const calculatePrice = () => {
        return Math.round(tacoAmount() * tacoPrice * (1 + tax) * 100) / 100;
    };

    const reactions = () => {
        const reaction = ["😒", "😑", "😏", "😎", "😱", "🤯"];
        const index =
            tacoAmount() < reaction.length ? tacoAmount() : reaction.length - 1;

        return reaction[index];
    };

    return (
        <div class="font-bold text-4xl w-screen h-full flex flex-col items-center justify-center gap-y-10 mt-12">
            <h1 class="text-8xl">{reactions}</h1>
            <h1>How Many Tacos?</h1>
            <h1>Cost ${calculatePrice}</h1>
            <h1>{"🌮".repeat(tacoAmount())}</h1>
            <div class="gap-5 flex">
                <button onclick={handleMinus}>
                    <svg
                        fill="currentColor"
                        stroke-width="0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        height="3rem"
                        width="3rem"
                        style="overflow: visible; color: currentcolor;"
                    >
                        <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                    </svg>
                </button>
                <h1>{tacoAmount()}</h1>
                <button onclick={handlePlus}>
                    <svg
                        fill="currentColor"
                        stroke-width="0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        height="3rem"
                        width="3rem"
                        style="overflow: visible; color: currentcolor;"
                    >
                        <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm136 312v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                    </svg>
                </button>
            </div>
            <a
                class="w-1/2 p-4 bg-sky-500 text-white rounded-lg flex justify-center items-center"
                href={`https://venmo.com/${user}?txn=pay&amount=${calculatePrice()}&note=${tacoAmount()}+Chicken+Tacos&audience=private`}
            >
                venmo
            </a>
        </div>
    );
}

export default App;
