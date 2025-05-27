import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name = "",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = "",
  id,
}) => {
  const uniqueId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={uniqueId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={uniqueId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition
          ${error ? "border-error-500" : "border-gray-300"}
          ${
            disabled
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : "bg-white"
          }
        `}
      />
      {error && <p className="mt-1 text-sm text-error-500">{error}</p>}
    </div>
  );
};

export default Input;
