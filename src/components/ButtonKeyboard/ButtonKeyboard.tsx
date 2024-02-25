interface ButtonKeyboardProps {
    label: String
}

const ButtonKeyboard = (props: ButtonKeyboardProps) => {
    return (
        <button className="items-center px-2 py-1 border border-gray-600 rounded bg-gradient-to-t from-gray-300 to-white m-[0.1%]">
            {props.label}
        </button>
    );
};

export default ButtonKeyboard;
