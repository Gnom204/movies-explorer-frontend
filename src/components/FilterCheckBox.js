import { useState } from "react";

function FilterCheckBox(props) {
    const [click, setClick] = useState(JSON.parse(localStorage.getItem('activeStatus')) || false)
    const [clickSave, setSaveClick] = useState(false)

    function onClicked() {
        if (!props.isSave) {
            setClick(!click)
            localStorage.setItem('activeStatus', !click)
            props.checkBoxHandler(!click)
        } else {
            setSaveClick(!clickSave)
            props.saveCheckBoxHandler(!clickSave)
        }
    }
    return (
        props.isSave ? <label htmlFor="filterCheckBox" onClick={onClicked} style={{ backgroundColor: clickSave ? '#2BE080' : '#EBEBEB' }} className='filterCheckBox' >
            <input type="checkbox" name="filterCheckBox" checked={clickSave} onChange={onClicked} className={"filterCheckBox__circle"} id="filterCheckBox"></input>
        </label > :
            <label htmlFor="filterCheckBox" onClick={onClicked} style={{ backgroundColor: click ? '#2BE080' : '#EBEBEB' }} className='filterCheckBox' >
                <input type="checkbox" name="filterCheckBox" checked={click} onChange={onClicked} className={"filterCheckBox__circle"} id="filterCheckBox"></input>
            </label >
    )
}
export default FilterCheckBox;
