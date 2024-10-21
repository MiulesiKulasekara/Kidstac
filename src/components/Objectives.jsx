import objectivesImg from "../assets/icon/goals.png";

const Objectives = () => {
    const objectivesStyle = {
        backgroundImage: `url(${objectivesImg})`,
        backgroundSize: 'cover',   // Ensures the image covers the entire background
        backgroundPosition: 'center',  // Centers the image
        height: '100vh',  // Adjust height as necessary
        width: '100%',    // Adjust width as necessary
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div style={objectivesStyle}>
            {/* Add content here */}
        </div>
    );
};

export default Objectives;
