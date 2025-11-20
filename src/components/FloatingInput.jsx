import React, { useState, useEffect, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const FloatingInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  className = "",
  isPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAutofilled, setIsAutofilled] = useState(false);
  const inputRef = useRef(null);

  // Watch for browser autofill
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    // Small delay allows autofill styling to apply before checking
    const checkAutofill = () => {
      if (el.matches(":-webkit-autofill")) {
        setIsAutofilled(true);
      } else {
        setIsAutofilled(false);
      }
    };

    checkAutofill();
    const interval = setInterval(checkAutofill, 500); // Watch for changes

    return () => clearInterval(interval);
  }, []);

  const hasValue = (value && value.trim() !== "") || isAutofilled;
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`relative mt-6 ${className}`}>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
        className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 text-lg bg-transparent focus:border-white focus:outline-none transition-all pr-10 autofill:bg-transparent"
      />

      {/* Floating Label */}
      <label
        htmlFor={name}
        className={`absolute left-4 text-gray-500 transition-all duration-200 pointer-events-none
          ${
            hasValue
              ? "top-1.5 text-sm"
              : "top-4 text-base peer-focus:top-1.5 peer-focus:text-sm"
          }
        `}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Eye Icon for Password Fields */}
      {isPassword && (
        <div
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-white transition-colors"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
