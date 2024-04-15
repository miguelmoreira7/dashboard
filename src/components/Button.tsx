import React from 'react'

type ButtonProps = {
  bgColor: string,
  borderRadius: string,
  color: string,
  size: string | undefined,
  text: string,
}

const Button = ({bgColor, borderRadius, color, size, text}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}>
        {text}
    </button>
  )
}

export default Button