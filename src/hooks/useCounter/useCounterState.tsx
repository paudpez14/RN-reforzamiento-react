import { useState } from "react";
import { Options } from "./type";

export const useCounterState = ({ initialValue = 0 }: Options) => {
    const [count, setCount] = useState<number>(initialValue);

    return {
        count,
        setCount
    }
}