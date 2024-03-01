import ButtonKeyboard from "../ButtonKeyboard/ButtonKeyboard";

interface KeyboardProps {
    handleClick: (label: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ handleClick }) => {

    const buttonsLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "del"];
    return (
        <div className="flex w-full">
            {buttonsLabels.map(label => (
                <ButtonKeyboard key={label} label={label} onClick={handleClick}></ButtonKeyboard>
            ))}
        </div>
    );
};

export default Keyboard;
