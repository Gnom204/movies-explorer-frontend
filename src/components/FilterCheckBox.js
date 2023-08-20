import { useState } from "react";

function FilterCheckBox(props) {
    const [color, setColor] = useState('#EBEBEB')
    const [side, setSide] = useState('left')
    const [click, setClick] = useState(false)

    function onClicked() {
        click ? setClick(false) : setClick(true);
        if (side === 'left') {
            setSide('right');
            setColor('#2BE080')
        } else {
            setSide('left')
            setColor('#EBEBEB')
        }
    }
    return (
        <div onClick={onClicked} style={{ backgroundColor: color }} className='filterCheckBox'>
            <div onClick={onClicked} style={{ float: side }} className={"filterCheckBox__circle"}>

            </div>
        </div >
    )
}
export default FilterCheckBox;
