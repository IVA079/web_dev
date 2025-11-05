




function Counter()
{


    let count=0;  //defined in Counter() scope//
    // incre_count is defined inside Counter.
    //Because of lexical scope, it automatically gets access to everything inside Counter() — like count variable

    function incre_count()
    {
      count=count+1;
      
      console.log(count);
    }

    return (

        <div>
            <h3>count={count}</h3>

            <button onClick={incre_count} > increase count</button>
        </div>
    )
}

export default Counter;





