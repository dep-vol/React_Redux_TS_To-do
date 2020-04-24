import React from "react";
import style from "./Button.module.css";

type indexStyle = keyof typeof style;

interface ButtonProps {
    theme: indexStyle
    callback: ()=>void
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ theme,callback,disabled, ...props }) => {
    const content = props.children;

    return (
        <button className={`${style.btn} ${style[theme]}`}
                onClick={callback}
                disabled={disabled}
        >
            {content}
        </button>
    )
};

export default Button;