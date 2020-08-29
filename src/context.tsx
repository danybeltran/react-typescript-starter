import { createContext} from "react";

export interface ContextProperties {
    count?: number,
    setCount?: any
}

var defaultContext: ContextProperties = {

}

export const UserContext = createContext<object>(defaultContext);
    ;