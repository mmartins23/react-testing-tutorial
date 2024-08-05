import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

// Describe block for the useCounter hook tests
describe('useCounter', () => {

  // Test case to check if the initial count is rendered correctly
  test('should render the initial count', () => {
    // Render the useCounter hook
    const { result } = renderHook(useCounter)
    // Assert that the initial count is 0
    expect(result.current.count).toBe(0)
  })

  // Test case to check if the hook accepts and renders a custom initial count
  test('should accept and render the same initial count', () => {
    // Render the useCounter hook with an initial count of 10
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    })
    // Assert that the count is 10
    expect(result.current.count).toBe(10)
  })

  // Test case to check if the count increments correctly
  test('should increment the count', () => {
    // Render the useCounter hook
    const { result } = renderHook(useCounter)
    // Use the act function to ensure the increment action is applied
    act(() => result.current.increment())
    // Assert that the count has incremented to 1
    expect(result.current.count).toBe(1)
  })

  // Test case to check if the count decrements correctly
  test('should decrement the count', () => {
    // Render the useCounter hook
    const { result } = renderHook(useCounter)
    // Use the act function to ensure the decrement action is applied
    act(() => result.current.decrement())
    // Assert that the count has decremented to -1
    expect(result.current.count).toBe(-1)
  })
})
