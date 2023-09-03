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
        <label htmlFor="filterCheckbox" onClick={onClicked} style={{ backgroundColor: color }} className='filterCheckBox' >
            <input type="checkbox" checked={click} onChange={onClicked} className={"filterCheckBox__circle"} id="filterCheckbox">

            </input>
        </label >
    )
}
export default FilterCheckBox;
