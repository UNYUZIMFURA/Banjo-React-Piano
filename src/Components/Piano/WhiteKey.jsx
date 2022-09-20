import BlackKey from "./BlackKey"

const WhiteKey = (props) => {
    return (
        <div className="relative bg-[#fff] h-full w-[3.7rem]">
          <BlackKey />
          <h1 className="absolute mt-[12rem] ml-[1.2rem]">{ props.keyName }</h1>
        </div>
    )
}

export default WhiteKey