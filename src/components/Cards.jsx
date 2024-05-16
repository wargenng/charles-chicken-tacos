export default function Cards(props) {
    return (
        <div
            class={`${props.class} border-2 border-black rounded-lg 
            flex items-center justify-center flex-col`}
        >
            <h1 class="font-normal text-sm">{props.title}</h1>
            <h1 class="font-semibold text-xl">{props.contents}</h1>
        </div>
    );
}
