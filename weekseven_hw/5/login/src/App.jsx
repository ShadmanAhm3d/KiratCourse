function App() {
  return (
    <>
      <LoginComp />
    </>
  );
}

function LoginComp() {


  function handler() {
    //change the UI : Get rid of Input and button 
    // intead 4 input shells should be there 
    // ass soon as you enter the single digit value and the cursor should move to next shell 
  }


  
  return (
    <div>
      <div className="h-screen w-full bg-black text-white">
        <div className="h-screen w-full flex items-center justify-center ">
          <div
            className="border border-sky-500 rounded-xl h-44 w-60 flex flex-col items-center justify-center
            "
          >
            <h2>Login Via OTP</h2>
            <input
              type="number"
              className="rounded-xl mt-3"
              placeholder="Enter "
            />
            <button
              onClick={handler}
              className=" mt-5 bg-black border border-sky-200 rounded-xl p-1 cursor-pointer hover:bg-lime-700">
              Send OTP
            </button>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
