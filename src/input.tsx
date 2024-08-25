import React from 'react';

interface InputProps {
    type: "text" | "email" | "password";
    placeholder: string;
    className?:string
}

export const Input: React.FC<InputProps> = ({ type, placeholder,className }) => {
    return (
        <div className="flex flex-col">
            <input
                type={type}
                placeholder={placeholder}
                className={className}
            />
        </div>
    );
};
