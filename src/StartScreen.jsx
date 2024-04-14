function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to Nptel Quiz</h2>
      <h4>
        {" "}
        <div className="startscreenh4">
          {" "}
          Refresh and select No of questions
          <form>
          <select
          id="numQuestions"
          className="numQuestions seles"
          value={numQuestions}
          onChange={(e) =>
            dispatch({
              type: "changeNumQuestions",
              payload: Number(e.target.value),
            })
          }
        >
        
              <option value={10}>10</option>
         
              <option value={30}>30</option>
              <option value={50}>50</option>
              <option value={120}>120</option>
            </select>
          </form>
          {/* {numQuestions} */}
      
        </div>
      </h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Begin Test
      </button>

 
      <br></br> 
      <br></br> 
      <br></br> 
      
      <br></br> 
      <br></br> 
      <br></br> 
      <br></br>
      <br></br> 
      <br></br> 
      <br></br> 
      <br></br>
      
      <br></br> 
      <br></br> 
      <br></br> 
      <br></br>
      <br></br> 
      <br></br> 
      <br></br> 
      <br></br>
      
      <br></br> 
      <br></br> 
      
      <div className='dev'>
      
      <h4 className="cont">
      
      

    


Suggest more Subjects to add by :-
 <a href="https://www.linkedin.com/in/vikash-chand-9878471b8/" >

     Linkedin </a>  </h4>
      
    </div>



    </div>
  );
}

export default StartScreen;
