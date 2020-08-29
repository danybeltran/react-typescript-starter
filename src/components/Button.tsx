import React, { useContext, useState } from "react";
import { UserContext, ContextProperties } from "../context";

export default function Button(props: {
    type?: any
}) {
    const ctx: ContextProperties = useContext(UserContext);
    let { setCount } = ctx;
    return (
        <button onClick={() => setCount({ operation: props.type })}>
            {props.type == "plus" ? "+" : "-"}
        </button>
    )
}