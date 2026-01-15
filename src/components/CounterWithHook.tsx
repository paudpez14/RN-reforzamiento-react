import { useCounter } from '../hooks/useCounter/useCounter';


export const CounterWithHook = () => {

  const { state, handler } = useCounter({
    initialValue: 5
  });


  return (
    <>
      <h3>Contador: <small>{ state.count }</small></h3>


      <div>
        <button onClick={ () => handler.increaseBy(+1) }>+1</button>

        &nbsp;
        <button onClick={ () => handler.increaseBy(-1) }>-1</button>


      </div>
    
    </>
  )
}