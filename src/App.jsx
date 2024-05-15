import { createSignal } from "solid-js";
import Minus from "./assets/Minus";
import Plus from "./assets/Plus";

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
            tacoAmount() < reaction.length
                ? tacoAmount() - 1
                : reaction.length - 1;

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
                    <Minus />
                </button>
                <h1>{tacoAmount()}</h1>
                <button onclick={handlePlus}>
                    <Plus />
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
