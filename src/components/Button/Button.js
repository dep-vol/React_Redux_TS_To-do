import React, {useCallback} from "react";
import style from "./Button.module.scss";

const Button = ({ theme,callback,disabled, ...props }) => {
    const content = props.children;
    const memoizedCallback = useCallback(()=>callback.func(...callback.params),[callback]);

    return (
        <button className={`${style.btn} ${style[theme]}`}
                onClick={memoizedCallback}
                disabled={disabled}
        >
            {content}
        </button>
    )
};

export default Button;