import * as React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <select
        className={`flex h-12 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base shadow-sm transition-colors focus:border-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>option[value=""]:disabled]:text-gray-500 [&:invalid]:text-gray-500 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Select.displayName = "Select";

export { Select };
