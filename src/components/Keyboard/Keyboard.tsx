import ButtonKeyboard from "../ButtonKeyboard/ButtonKeyboard";

const Keyboard = () => {
    return (
        <div className="flex flex-col">
            <div>
                <ButtonKeyboard label={"1"}></ButtonKeyboard>
                <ButtonKeyboard label={"2"}></ButtonKeyboard>
                <ButtonKeyboard label={"3"}></ButtonKeyboard>
            </div>
            <div>
                <ButtonKeyboard label={"4"}></ButtonKeyboard>
                <ButtonKeyboard label={"5"}></ButtonKeyboard>
                <ButtonKeyboard label={"6"}></ButtonKeyboard>
            </div>
            <div>
                <ButtonKeyboard label={"7"}></ButtonKeyboard>
                <ButtonKeyboard label={"8"}></ButtonKeyboard>
                <ButtonKeyboard label={"9"}></ButtonKeyboard>
            </div>
            <div>
                <ButtonKeyboard label={"0"}></ButtonKeyboard>
            </div>
        </div>
    );
};

export default Keyboard;
