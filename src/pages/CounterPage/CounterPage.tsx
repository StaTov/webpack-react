import { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getCounterValue } from "src/store/Selectors/counterSelector";
import { decrement, increment, incrementByAmount } from "src/store/Slices/counterSlice/counterSlice";
import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT } from "src/utils/constants/CounterPage/buttonNames";
import style from "./CounterPage.module.css";

const CounterPage = () => {

    const dispatch = useAppDispatch()
    const counterValue = useAppSelector(getCounterValue)
    const [value, setValue] = useState(0)

    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());
    const handleIncrementByAmount = () => dispatch(incrementByAmount(value))
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(prev => Number(event.target.value))

    return (
        <div data-testid="counter-page" className={style.container}>
            <div data-testid="value" className={style.value}>
                <span>value: </span>
                {counterValue}
                </div>
            <button data-testid="increment-button" onClick={handleIncrement}>{INCREMENT}</button>
            <button data-testid="decrement-button" onClick={handleDecrement}>{DECREMENT}</button>
            <button data-testid="increment-by-amount-button" onClick={handleIncrementByAmount}>{INCREMENT_BY_AMOUNT}</button>
            <input  data-testid="input-range" type="range" min={0} max={100} value={value} onChange={handleChange} />
            <div  data-testid="value-range" className={style.rangeValue}>{value}</div>
        </div>
    )
};

export default CounterPage;
