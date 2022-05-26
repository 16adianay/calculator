function calc(symbol: string, caller: string, dataSource: any, setValue: any, value: string, list: any, setError: any) {
    if(symbol.match(/Enter|=/)) {
        try {
            console.log(list)
            list.push(value);
            console.log('hi')
            let val = eval(value);
            val === parseInt(val)
                ? setValue(val)
                : setValue(val.toFixed(3))
            dataSource.reload();
        } catch {
            setError('Ошибка при вычислении данных, введите корректные данные');
            setTimeout(() => {
               setError('');
            }, 1500)
        }
    } else if (symbol === 'C') {
        setValue('');
    }
    else {
        if (caller === 'btn') {
            setValue(value + symbol)
        }
    }
}

export default calc;