import React from "react"

interface ErrorProps {
  error: string
}

const ErrorMessage = ({ error }: ErrorProps) =>
  error ? <div className="error">{error}</div> : null

export default ErrorMessage
