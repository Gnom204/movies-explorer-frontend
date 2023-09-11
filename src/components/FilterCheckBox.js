import { useEffect, useState } from "react";

function FilterCheckBox(props) {
    const [color, setColor] = useState('#EBEBEB')
    const [click, setClick] = useState(false)

    useEffect(() => {
        if (click === true) {
            setColor('#2BE080')
        } else {
            setColor('#EBEBEB')
        }
    }, [click])

    function onClicked() {
        setClick(!click)
        props.checkBoxHandler(!click)
    }
    return (
        <label htmlFor="filterCheckBox" onClick={onClicked} style={{ backgroundColor: color }} className='filterCheckBox' >
            <input type="checkbox" name="filterCheckBox" checked={click} onChange={onClicked} className={"filterCheckBox__circle"} id="filterCheckBox">

            </input>
        </label >
    )
}
export default FilterCheckBox;
