import { useEffect, useState } from "react";

function FilterCheckBox(props) {
    const [click, setClick] = useState(JSON.parse(localStorage.getItem('activeStatus')) || false)

    function onClicked() {
        setClick(!click)
        localStorage.setItem('activeStatus', !click)
        props.checkBoxHandler(!click)
    }
    return (
        <label htmlFor="filterCheckBox" onClick={onClicked} style={{ backgroundColor: click ? '#2BE080' : '#EBEBEB' }} className='filterCheckBox' >
            <input type="checkbox" name="filterCheckBox" checked={click} onChange={onClicked} className={"filterCheckBox__circle"} id="filterCheckBox">

            </input>
        </label >
    )
}
export default FilterCheckBox;
