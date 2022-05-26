import React, {useCallback} from "react";
import {TextBox} from "devextreme-react";
import calc from "../utils/calc";

interface IProps {
    dataSource: any,
    setValue: any,
    value: string,
    list: any,
    setError: any
}

const CustomTextBox: React.FC<IProps> = ({setValue, value, dataSource, list, setError}) => {
    const onValueChanged = useCallback((e) => {
        let val = e.value;
        if (String(val).match(/[A-Za-zА-Яа-яЁё]|,/)) {
            let validValue = val.replace(/[A-Za-zА-Яа-яЁё]|,/, '');
            setValue(validValue);
        } else {
            setValue(val)
        }
        console.log(val)
    }, []);

    const onKeyDown = useCallback((e) => {
       let key = e.event.originalEvent.key;
       if (key === 'Enter') {
           calc(key, 'btn', dataSource, setValue, value, list, setError)
       }
    }, [value]);

    return (
        <>
            <TextBox
                width={300}
                value={value}
                placeholder="Let's start"
                valueChangeEvent='keyup'
                onValueChanged={onValueChanged}
                onKeyDown={onKeyDown}
            />
        </>
    )
}

export default CustomTextBox;