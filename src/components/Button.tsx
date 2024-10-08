
const Button = (props:any) => {
  return (
      <button className={`bg-[#fb55ed] px-5  ${props.height} ${props.width}  ${props.text} text-xl  ${props.borderRadius} border-none font-medium font-robotoss  text-center`}>{props.message}</button>
  )
}

export default Button