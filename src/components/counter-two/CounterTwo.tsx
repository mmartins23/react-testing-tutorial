import { CounterTwoProps } from './CounterTwo.types'

export const CounterTwo = ({ count, handleIncrement, handleDecrement }: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && (
        <button onClick={handleIncrement}>Increment</button>
      )}
      {handleDecrement && (
        <button onClick={handleDecrement}>Decrement</button>
      )}
    </div>
  )
}