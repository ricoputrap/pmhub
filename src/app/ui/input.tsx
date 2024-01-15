import React from 'react'

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  error?: string;
}

const Input: React.FC<Props> = ({ label, name, placeholder, type = 'text', required, error }) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-medium">{ label }</span>
      </div>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="input input-md input-bordered w-full"
        required={!!required}
      />

      {error && (
        <div className="label">
          <span className="label-text-alt text-error">{ error }</span>
        </div>
      )}
    </label>
  )
}

export default Input