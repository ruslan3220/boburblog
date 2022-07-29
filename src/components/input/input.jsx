import { forwardRef } from "react"

export const Input = forwardRef(({children, ...variables}, ref) => {
    return (
    <div>
        <input ref={ref} {...variables}/>
    </div>
    );
});