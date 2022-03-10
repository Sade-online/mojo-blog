const Home = () => {

    const handleClick = (e) => {
        console.log("Hello, you!", e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click mee!</button>
            {/* annonymous function for user input to prevent automatic invokation below*/}
            <button onClick= {(e) => handleClickAgain('Yoshi', e)}>Click me again!</button>
        </div>
     );
}
 
export default Home;