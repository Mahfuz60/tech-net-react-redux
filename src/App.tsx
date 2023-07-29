

import { decrement, increment, reset,incrementByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const incrementButton = () => {
    dispatch(increment());
  };
  const decrementButton = () => {
    dispatch(decrement());
  };

  const resetButton = () => {
    dispatch(reset());
  };

  return (
    <div className='ml-20 mt-5'>
      <div>
        <button
          className='bg-blue-500  p-3 w-48 text-white font-bold text-center'
          onClick={incrementButton}
        >
          Increment
        </button>
      </div>
      <div className='mt-5 mb-5 bg-gray-500 p-5 w-48 text-white font-bold text-center'>
        Count:{count}
      </div>
      <div>
        <button
          className='bg-green-500 text-white p-3 w-48  font-bold text-center'
          onClick={decrementButton}
        >
          Decrement
        </button>
      </div>

     

      <div>
        <button
          className='bg-red-500  p-3 mt-1 w-48 text-white font-bold text-center'
          onClick={resetButton}
        >
          Reset
        </button>
      </div>
      <div>
        <button
          className='bg-pink-500 text-white p-3 w-48  font-bold text-center mt-2'
          onClick={()=>dispatch(incrementByAmount(5))}
        >
         Increment By Value
        </button>
      </div>
    </div>
  );
}

export default App;
