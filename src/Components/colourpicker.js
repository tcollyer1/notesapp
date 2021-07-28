import { CirclePicker } from "react-color";
import Tippy from '@tippyjs/react';

const colours = ['#e7e7e7', '#badde8', '#fff080', '#b3fca4', '#fcbe8d', '#e2c2ff', '#ffd4f6'];

const ColourPicker = ({handleColourChange, currentColour}) => { 

    return (
        <div className="colour-picker">

            <Tippy 
            interactive={true} 
            placement={'top-start'}
            content={
                <CirclePicker
                colors={colours}
                color={currentColour}
                onChangeComplete={color => (
                    handleColourChange(color.hex)
                    )} />
            }>
                <button className="colour-picker-btn">🎨</button>
            </Tippy>
        </div>
    ); 
}

export default ColourPicker;