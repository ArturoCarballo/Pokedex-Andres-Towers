import ButtonKeyboard from "../ButtonKeyboard/ButtonKeyboard";

interface KeyboardProps {
    handleClick: (label: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ handleClick }) => {
    return (
        <div className="flex flex-col">
            <div>
                <ButtonKeyboard label={"1"} onClick={handleClick}></ButtonKeyboard>
                <ButtonKeyboard label={"2"} onClick={handleClick}></ButtonKeyboard>
                <ButtonKeyboard label={"3"} onClick={handleClick}></ButtonKeyboard>
            </div>
            <div>
                <ButtonKeyboard label={"4"} onClick={handleClick}></ButtonKeyboard>
                <ButtonKeyboard label={"5"} onClick={handleClick}></ButtonKeyboard>
                <ButtonKeyboard label={"6"} onClick={handleClick}></ButtonKeyboard>
            </div>
            <div>
                <ButtonKeyboard label={"7"} onClick={handleClick}></ButtonKeyboard>
                <ButtonKeyboard label={"8"} onClick={handleClick}></ButtonKeyboard>
                <ButtonKeyboard label={"9"} onClick={handleClick}></ButtonKeyboard>
            </div>
            <div>
                <ButtonKeyboard label={"0"} onClick={handleClick}></ButtonKeyboard>
                <ButtonKeyboard label={"del"} onClick={handleClick}></ButtonKeyboard>
            </div>
        </div>
    );
};

export default Keyboard;
