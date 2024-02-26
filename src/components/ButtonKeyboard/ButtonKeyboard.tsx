interface ButtonKeyboardProps {
    label: string
    onClick: (label: string) => void;
}

const ButtonKeyboard = (props: ButtonKeyboardProps) => {
    return (
        <button
            className="items-center px-2 py-1 border border-gray-600 bg-gradient-to-t from-gray-300 to-white"
            onClick={() => props.onClick(props.label)}
        >
            {props.label}
        </button>
    );
};

export default ButtonKeyboard;
