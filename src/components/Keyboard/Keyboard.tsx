import ButtonKeyboard from "../ButtonKeyboard/ButtonKeyboard";

interface KeyboardProps {
    handleClick: (label: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ handleClick }) => {

    const buttonsLabels1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const buttonsLabels2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const buttonsLabels3 = ["a", "s", "d", "f", "g", "h", "i", "j", "k", "l"];
    const buttonsLabels4 = ["z", "x", "c", "v", "b", "n", "m", "del"];
    return (
        <div className="">
            <div className="flex w-full">
                {buttonsLabels1.map(label => (
                    <ButtonKeyboard key={label} label={label} onClick={handleClick}></ButtonKeyboard>
                ))}
            </div>

            <div className="flex w-full">
                {buttonsLabels2.map(label => (
                    <ButtonKeyboard key={label} label={label} onClick={handleClick}></ButtonKeyboard>
                ))}
            </div>

            <div className="flex w-full">
                {buttonsLabels3.map(label => (
                    <ButtonKeyboard key={label} label={label} onClick={handleClick}></ButtonKeyboard>
                ))}
            </div>

            <div className="flex w-full">
                {buttonsLabels4.map(label => (
                    <ButtonKeyboard key={label} label={label} onClick={handleClick}></ButtonKeyboard>
                ))}
            </div>
        </div>
    );
};

export default Keyboard;
