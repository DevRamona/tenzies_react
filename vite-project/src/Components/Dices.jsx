const Dices = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div
      className="p-3 shadow-sm h-10 w-10 flex justify-center items-center cursor-pointer rounded-md text-center"
      style={styles}
      onClick={props.holdDice}
    >
      <h2 className="text-2xl">{props.value}</h2>
    </div>
  );
};
export default Dices;
