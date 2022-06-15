import Button from "./Button/Button"

const Buttons = (buttons) => (buttons.map((button) => {
    return <Button className={button.which}></Button>
}));

export default Buttons;