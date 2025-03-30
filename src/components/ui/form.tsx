import * as React from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className = "", ...props }, ref) => {
    return <form className={className} ref={ref} {...props} />;
  }
);
Form.displayName = "Form";

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className = "", ...props }, ref) => {
    return <div className={`mb-4 ${className}`} ref={ref} {...props} />;
  }
);
FormItem.displayName = "FormItem";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <label
        className={`block text-base font-medium text-gray-800 mb-2 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
FormLabel.displayName = "FormLabel";

export { Form, FormItem, FormLabel };
