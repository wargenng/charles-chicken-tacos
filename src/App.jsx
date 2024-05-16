import { createSignal } from "solid-js";
import Minus from "./assets/Minus";
import Plus from "./assets/Plus";
import Cards from "./components/Cards";

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
        const reaction = [
            "😒",
            "😑",
            "😏",
            "😎",
            "😱",
            "🤯",
            "🤯",
            "🤯",
            "💀",
            "💀",
            "💀",
            "💀",
            "💀",
            "☠️",
        ];
        const index =
            tacoAmount() < reaction.length
                ? tacoAmount() - 1
                : reaction.length - 1;

        return reaction[index];
    };

    return (
        <div class="font-bold text-3xl w-screen h-full flex flex-col items-center justify-center gap-y-4 mt-2 p-4">
            <h1 class="text-6xl">{reactions}</h1>
            <h1>How Many Tacos?</h1>
            <div class="flex gap-2 w-full justify-center">
                <Cards
                    class="w-1/3"
                    title="cost per taco"
                    contents={"$" + tacoPrice}
                />
                <Cards class="w-1/3" title="tax" contents={tax * 100 + "%"} />
                <Cards
                    class="w-1/3"
                    title="total"
                    contents={"$" + calculatePrice().toFixed(2)}
                />
            </div>
            <h1 class="h-24 flex justify-center items-center text-center">
                {"🌮".repeat(tacoAmount())}
            </h1>
            <div class="gap-5 flex">
                <button onclick={handleMinus}>
                    <Minus />
                </button>
                <h1 class="w-12 flex items-center justify-center">
                    {tacoAmount()}
                </h1>
                <button onclick={handlePlus}>
                    <Plus />
                </button>
            </div>
            <a
                class="text-2xl w-1/3 p-3 bg-sky-500 text-white rounded-lg flex justify-center items-center"
                href={`https://venmo.com/${user}?txn=pay&amount=${calculatePrice()}&note=${tacoAmount()}+Chicken+Tacos&audience=private`}
            >
                venmo
            </a>
        </div>
    );
}

export default App;
