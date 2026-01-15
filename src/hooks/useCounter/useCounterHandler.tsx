import { useCounterState } from './useCounterState';
interface UseCounterHandlerProps {
    state: ReturnType<typeof useCounterState>
}
export const useCounterHandler = ({ state }: UseCounterHandlerProps) => {
    const increaseBy = (value: number) => {
        const newValue = state.count + value;
        if (newValue < 0) return;

        state.setCount(state.count + value);
    }
    return {
        increaseBy
    }
}