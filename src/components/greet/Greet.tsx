type GreetProps = {
    name?: string,
}

const Greet = ({name}: GreetProps) => {
  return (
    <p>Hello {name}</p>
  )
}

export default Greet;