import { useStateContext } from "../contexts/ContextProvider"


type ButtonProps = {
  bgColor: string | undefined,
  borderRadius: string | undefined,
  color: string | undefined,
  size: string | undefined,
  text: string | undefined,
  width: string | undefined,
  icon: any | undefined,
  bgHoverColor: string | undefined,
}

const Button = ({bgColor, borderRadius, color, size, text, width, icon, bgHoverColor}: ButtonProps) => {

  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width} hover:bg-${bgHoverColor}`}>
        {icon} {text}
    </button>
  )
}

export default Button