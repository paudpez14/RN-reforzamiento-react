import { useCounterState } from './useCounterState';
import { useCounterHandler } from './useCounterHandler';
import { Options } from './type';

export const useCounter = ({ initialValue = 0 }: Options) => {
  const state = useCounterState({ initialValue });
  const handler = useCounterHandler({ state });

  return { state, handler }
}