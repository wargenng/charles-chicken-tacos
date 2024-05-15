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
        setTacoAmount(tacoAmount() < 100 ? tacoAmount() + 1 : 99);
    };

    const calculatePrice = () => {
        return Math.round(tacoAmount() * tacoPrice * (1 + tax) * 100) / 100;
    };

    return (
        <div class="font-bold text-4xl w-full h-full flex flex-col items-center justify-center m-4 gap-y-4">
            <h1 class="">How Many Tacos?</h1>
            <h1>{"🌮".repeat(tacoAmount())}</h1>
            <div class="gap-4 flex">
                <button onclick={handleMinus}>-</button>
                <h1>{tacoAmount()}</h1>
                <button onclick={handlePlus}>+</button>
            </div>
            <a
                class="w-1/2 p-4 bg-sky-500 text-white rounded-lg flex justify-center items-center"
                href={`https://venmo.com/${user}?txn=pay&amount=${calculatePrice()}&note=${
                    tacoAmount() + " tacos"
                }`}
            >
                venmo
            </a>
        </div>
    );
}

export default App;
