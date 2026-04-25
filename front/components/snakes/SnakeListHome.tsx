import RegisterSnake from './RegisterSnake'
import SnakeList from './SnakeList'

const SnakeListHome = async () => {
//   const session = await authClient.api.getSession({
//     headers: await headers() // you need to pass the headers object.
// })
  // const response = await fetch(`${process.env.BACKEND_URL}/snakes/${}`)
  return (
    <div className='bg-primary-900 text-primary-100'>
      {/* Button/from to create new snake entry */}
      <RegisterSnake />
      {/* Display list of all snakes registered and button to update entries such as weight and height  */}
      <SnakeList />
      </div>
  )
}

export default SnakeListHome