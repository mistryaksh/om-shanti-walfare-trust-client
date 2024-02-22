import React, { FC } from 'react';

type InputProps = {
   label?: string;
   placeholder?: string;
   type: React.HTMLInputTypeAttribute;
   name?: string;
   value?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   omBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
   required?: boolean;
   id?: string;
};

export const Input: FC<InputProps> =  ({ label, placeholder, type, name, value, onChange, omBlur, required, id }) => {
   return (
      <input
         type={type}
         name={name}
         id={id || name}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         onBlur={omBlur}
         required={required}
         className="border border-slate-300 bg-transparent rounded-sm text-sm w-full focus:outline-none active:outline-none focus:border-emerald-500 active:border-emerald-500 px-4 py-3.5 placeholder-slate-400"
      />
   );
};