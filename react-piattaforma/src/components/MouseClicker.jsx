import myImage from "../assets/myImage.jpg";

function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.src);
  }

  return (
    <button name="one" onClick={handleButtonClick}>
      <img src={myImage} style={{ width: "100px", height: "100px" }}></img>
      Click me
    </button>
  );
}
export default MouseClicker;
