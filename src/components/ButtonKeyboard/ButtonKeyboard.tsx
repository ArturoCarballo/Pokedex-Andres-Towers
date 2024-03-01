interface ButtonKeyboardProps {
    label: string
    onClick: (label: string) => void;
}

const ButtonKeyboard = (props: ButtonKeyboardProps) => {
    return (
        <button
            className="items-center bg-gray-900 rounded-lg p-2 text-white w-full hover:bg-sky-700 active:bg-sky-500"
            onClick={() => props.onClick(props.label)}
        >
            {props.label}
        </button>
    );
};

export default ButtonKeyboard;
