import RegisterSnake from "./RegisterSnake";
import SnakeList from "./SnakeList";

const SnakeListHome =  () => {
  //   const session = await authClient.api.getSession({
  //     headers: await headers() // you need to pass the headers object.
  // })
  // const response = await fetch(`${process.env.BACKEND_URL}/snakes/${}`)

  console.log( process.env.NEXT_PUBLIC_BACKEND_URL)
  return (
    <div className="bg-primary-900 text-primary-100 ">
      <div className="w-[90%] mx-auto">
        {/* Button/form to create new snake entry */}
        <RegisterSnake />
        {/* Display list of all snakes registered and button to update entries such as weight and height  */}
        <SnakeList />
      </div>
    </div>
  );
};

export default SnakeListHome;
