import { useEffect, forwardRef } from "react";

export const Input = forwardRef(
  ({ type, placeholder, onChangeHandler }, ref) => {
    useEffect(() => {
      ref?.current.focus();
    }, []);
    return (
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
);
