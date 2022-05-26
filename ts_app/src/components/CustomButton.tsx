import React, {useCallback} from "react";
import {Button} from "devextreme-react";
import calc from "../utils/calc";

interface IProps {
    sym: string,
    dataSource: any,
    setValue: any,
    value: string,
    list: any,
    setError: any
}

const CustomButton: React.FC<IProps> = ({sym, dataSource, setValue, value, list, setError}) => {
    const onClick = useCallback(() => {
        console.log(value)
        calc(sym, 'btn', dataSource, setValue, value, list, setError)
    }, []);

    return (
        <Button
            width={100}
            text={sym}
            onClick={onClick}
        />
    )
}

export {CustomButton}