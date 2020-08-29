import React, { useReducer, } from "react";
import { UserContext } from "./context";


function countReducer(count: number, action: {
    operation?: string
}) {
    switch (action.operation) {
        case "plus":
            return count + 1;
        case "less":
            return count - 1;
        default:
            return count;
    }
}

export default function Wrapper({ children = <></> }) {

    const [count, setCount] = useReducer(countReducer, 0);

    return (
        <UserContext.Provider value={{
            count,
            setCount
        }}>
            <h3>React with Typescript</h3>
            <>
                {children}
                <br />
                <p>The count is: {count}</p>
            </>
        </UserContext.Provider>
    )
}