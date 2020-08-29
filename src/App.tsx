import React from "react";
import { UserContext, ContextProperties } from "./context";
import Wrapper from "./Wrapper";
import Button from "./components/Button";

export default function App(props: object) {
    return (
        <Wrapper>
            <UserContext.Consumer>
                {
                    (ctx: ContextProperties) => {
                        let updateCount = ctx.setCount;
                        return (
                            <div>
                                <Button type="plus" />
                                <Button type="less" />
                            </div>
                        )
                    }

                }
            </UserContext.Consumer>
        </Wrapper>
    )
}
