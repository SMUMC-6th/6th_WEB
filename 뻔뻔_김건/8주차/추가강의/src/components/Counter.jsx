import { useDispatch, useSelector } from 'react-redux';
import { decreaseUserInputNum, decrement, increaseUserInputNum, increment, initialize } from '../state/counter/counterSlice';
import CounterContainer from '../style/Counter.style';

export const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <CounterContainer>
            <h1>카운터</h1>
            <h2>{count}</h2>
            <div className="button-group">
                <button onClick={() => dispatch(increment())}>1씩 증가</button>
                <button onClick={() => dispatch(decrement())}>1씩 감소</button>
                <button onClick={() => dispatch(increaseUserInputNum(10))}>10씩 증가</button>
                <button onClick={() => dispatch(decreaseUserInputNum({ number: 10, hi: '' }))}>10씩 감소</button>
                <button onClick={() => dispatch(initialize())}>초기화</button>
            </div>
        </CounterContainer>
    );
}

export default Counter;
