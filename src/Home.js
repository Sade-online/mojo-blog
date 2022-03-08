const Home = () => {

    const handleClick = () => {
        console.log("Hello, you!");
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click mee!</button>
            {/* annonymous function for user input to prevent automatic invokation*/}
            <button></button>
        </div>
     );
}
 
export default Home;