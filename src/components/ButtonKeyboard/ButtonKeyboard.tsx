interface ButtonKeyboardProps {
    label: string
    onClick: (label: string) => void;
}

const ButtonKeyboard = (props: ButtonKeyboardProps) => {
    return (
        <button
            className="items-center p-2 text-black w-full  bg-gradient-to-t from-gray-300 to-white hover:bg-gray-400 active:bg-gray-600"
            onClick={() => props.onClick(props.label)}
        >
            {props.label}
        </button>
    );
};

export default ButtonKeyboard;
