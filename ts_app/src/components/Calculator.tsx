import {useState} from "react";
import "devextreme/dist/css/dx.light.css";
import {CustomButton} from "./CustomButton";
import CustomTextBox from "./CustomTextBox";
import '../App.css';
import {generateKey} from "../utils/generateKey";
import {listArray, dataSource} from "../data";

export default function Calculator() {
    const numAndOpArr = 'C ( ) 1 2 3 4 5 6 7 8 9 * 0 / + - = .'.split(' ');
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    return (
        <div className='calc'>
            <CustomTextBox
                value={value}
                setValue={setValue}
                dataSource={dataSource}
                list={listArray}
                setError={setError}
            />
            {numAndOpArr.map(sym => {
                return (
                    <CustomButton
                        key={generateKey(sym)}
                        sym={sym}
                        dataSource={dataSource}
                        setValue={setValue}
                        value={value}
                        list={listArray}
                        setError={setError}
                    />
                )
            })}
            <div>{error}</div>
        </div>
    )
}