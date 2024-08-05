### Custom React Hooks

Custom React hooks are functions that encapsulate reusable logic in a React application. They follow the same rules as React's built-in hooks, starting with the word "use" and allowing for the encapsulation of stateful logic that can be reused across multiple components.

### Testing Custom React Hooks

To test custom React hooks, we can use the `renderHook` function from the `@testing-library/react-hooks` package (now part of `@testing-library/react` in recent versions). This function allows us to test the hook in isolation without needing to render a full component.

### Example: Testing a Custom React Hook

Let's break down the example provided and explain the custom hook `useCounter` and how to test it.

#### Custom Hook Implementation

```javascript
import { useState } from 'react'
import { UseCounterProps } from './useCounter.types'

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return { count, increment, decrement }
}
```

This `useCounter` hook provides a simple counter logic:
- `initialCount`: The initial value of the counter.
- `count`: The current count value.
- `increment`: Function to increase the count by 1.
- `decrement`: Function to decrease the count by 1.

#### Testing the Hook

```javascript
import { renderHook } from '@testing-library/react-hooks'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    })
    expect(result.current.count).toBe(10)
  })
})
```

#### Explanation

1. **Setup and Import**: 
   - Import the `renderHook` function from `@testing-library/react-hooks`.
   - Import the `useCounter` hook that we want to test.

2. **First Test: Default Initial Count**
   - `renderHook(useCounter)`: Calls the `useCounter` hook.
   - `result.current.count`: Accesses the current state value of the hook.
   - `expect(result.current.count).toBe(0)`: Asserts that the initial count is `0` when no initial value is provided.

3. **Second Test: Custom Initial Count**
   - `renderHook(useCounter, { initialProps: { initialCount: 10 } })`: Calls the `useCounter` hook with an initial count of `10`.
   - `expect(result.current.count).toBe(10)`: Asserts that the initial count is `10` when this value is provided.

### Summary

Custom React hooks allow for encapsulating and reusing logic across different components. Testing these hooks in isolation ensures they behave as expected. The `renderHook` function from `@testing-library/react-hooks` is a powerful tool to test hooks by rendering them in a test environment and checking their state and functions.

By following this approach, we can ensure that our custom hooks work correctly and handle state updates properly, leading to more reliable and maintainable React applications.