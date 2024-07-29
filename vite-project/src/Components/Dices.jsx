const Dices = (props) => {
    return (
        <div className="p-3 shadow-sm h-10 w-10 flex justify-center items-center cursor-pointer rounded-md text-center">
            <h2 className="text-2xl">{props.value}</h2>

        </div>
    )
}
export default Dices