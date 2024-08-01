### React Testing Library (RTL) Queries

React Testing Library (RTL) provides a set of utility functions called "queries" to query the DOM elements in your tests. These queries are designed to mimic how users interact with your application and help you write more reliable and maintainable tests.

### Types of Queries

RTL offers several types of queries, which can be grouped based on the strategy they use to find elements:

1. **Role-based Queries**
2. **Text-based Queries**
3. **Placeholder Text Queries**
4. **Label Text Queries**
5. **Display Value Queries**
6. **Alt Text Queries**
7. **Test ID Queries**

### Examples of RTL Queries

#### 1. **Role-based Queries**

Role-based queries are the most recommended as they align closely with how screen readers interact with your application.

- **getByRole**: Finds elements by their ARIA role.

  ```jsx
  render(<button>Submit</button>);
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
  ```

#### 2. **Text-based Queries**

These queries find elements based on their text content.

- **getByText**: Finds elements with the given text content.

  ```jsx
  render(<p>Hello World</p>);
  const textElement = screen.getByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
  ```

- **getByText with exact match**: Finds elements with the exact text content.

  ```jsx
  render(<p>Hello World</p>);
  const textElement = screen.getByText('Hello World');
  expect(textElement).toBeInTheDocument();
  ```

#### 3. **Placeholder Text Queries**

These queries find input elements by their placeholder text.

- **getByPlaceholderText**: Finds elements by their placeholder text.

  ```jsx
  render(<input placeholder="Enter your name" />);
  const inputElement = screen.getByPlaceholderText(/enter your name/i);
  expect(inputElement).toBeInTheDocument();
  ```

#### 4. **Label Text Queries**

These queries find form elements associated with a `<label>`.

- **getByLabelText**: Finds elements by their label text.

  ```jsx
  render(
    <label htmlFor="username">Username</label>
    <input id="username" />
  );
  const inputElement = screen.getByLabelText(/username/i);
  expect(inputElement).toBeInTheDocument();
  ```

#### 5. **Display Value Queries**

These queries find form elements by their current value.

- **getByDisplayValue**: Finds elements by their display value.

  ```jsx
  render(<input value="John Doe" />);
  const inputElement = screen.getByDisplayValue(/john doe/i);
  expect(inputElement).toBeInTheDocument();
  ```

#### 6. **Alt Text Queries**

These queries find elements by their `alt` attribute, often used for images.

- **getByAltText**: Finds elements by their alt text.

  ```jsx
  render(<img alt="profile picture" src="profile.jpg" />);
  const imageElement = screen.getByAltText(/profile picture/i);
  expect(imageElement).toBeInTheDocument();
  ```

#### 7. **Test ID Queries**

These queries find elements by their `data-testid` attribute.

- **getByTestId**: Finds elements by their test ID.

  ```jsx
  render(<div data-testid="custom-element">Hello</div>);
  const customElement = screen.getByTestId('custom-element');
  expect(customElement).toBeInTheDocument();
  ```

### Async Queries

RTL also provides async versions of these queries to handle asynchronous updates.

- **findBy**: Asynchronously finds an element.
  
  ```jsx
  render(<div>Loading...</div>);
  setTimeout(() => {
    render(<div>Hello World</div>);
  }, 1000);

  const textElement = await screen.findByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
  ```

### Query Priority

RTL queries have a priority order based on the user-centric approach:

1. **Role-based Queries (`getByRole`)**
2. **Label Text Queries (`getByLabelText`)**
3. **Placeholder Text Queries (`getByPlaceholderText`)**
4. **Text-based Queries (`getByText`)**
5. **Alt Text Queries (`getByAltText`)**
6. **Display Value Queries (`getByDisplayValue`)**
7. **Test ID Queries (`getByTestId`)**

Using this priority order helps in writing tests that are more resilient to changes in the UI structure and are more aligned with how users interact with the application.

### Summary

RTL queries provide powerful and user-centric ways to query the DOM in your tests. By using these queries effectively, you can write more reliable, maintainable, and understandable tests. Remember to prioritize queries based on how users interact with your application, starting with role-based queries and moving down to more specific queries like test ID queries.