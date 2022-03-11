import { useState } from "react";

const Home = () => {
  // let name = 'pickachu';
  // useState is a function. give it the initial value of pickachu
  const [name, setName] = useState("Pickachu");

  const [age, setAge] = useState(21);

  const handleClick = () => {
    setName("Garchomp");
    setAge(25);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click mee!</button>
    </div>
  );
};

export default Home;
