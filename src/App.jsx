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
        <div class="font-bold text-3xl w-screen h-full flex flex-col items-center justify-center gap-y-6 mt-10 p-4">
            <h1 class="text-6xl">{reactions}</h1>
            <h1>How Many Tacos?</h1>
            <h1>Cost ${calculatePrice}</h1>
            <h1 class="h-20 flex justify-center items-center text-center">
                {"🌮".repeat(tacoAmount())}
            </h1>
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
