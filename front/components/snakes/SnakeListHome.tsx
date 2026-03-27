import RegisterSnake from './RegisterSnake'
import { authClient } from '@/lib/auth-client'

const SnakeListHome = async () => {
//   const session = await authClient.api.getSession({
//     headers: await headers() // you need to pass the headers object.
// })
  // const response = await fetch(`${process.env.BACKEND_URL}/snakes/${}`)
  return (
    <div>
      {/* Button/from to create new cnake entry */}
      <RegisterSnake />
      {/* Display list of all snakes registered and button to update entries such as weight and height  */}
      
      </div>
  )
}

export default SnakeListHome