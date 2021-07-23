import React from "react"

interface InputProps {
  label: string
  value: string
  handleOnChange: (event: { target: { value: string } }) => void
}

const Input = ({ label, value, handleOnChange }: InputProps) => {
  return (
    <>
      <div>
        <span>{label}</span>
      </div>
      <div>
        <input value={value} onChange={handleOnChange} />
      </div>
    </>
  )
}

export default Input
