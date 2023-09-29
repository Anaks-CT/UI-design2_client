
const Button = ({children, className, transparent, blue}) => {
  // if(color === "blue") color = "text-#377BFF"
  return ( 
    <button className={`w-full h-full ${transparent ? "bg-white" : "bg-[#04095A]"} ${blue ? "text-blue-500" : "text-white"} text-[13px] py-2 rounded-lg ${className}`}>{children}</button>
    )
}

export default Button