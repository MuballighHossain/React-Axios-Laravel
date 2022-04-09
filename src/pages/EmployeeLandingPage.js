import React from 'react'
import AddEmployee from './AddEmployee';
import App from '../App';
import { useNavigate } from 'react-router-dom';
const EmployeeLandingPage = () => {

  let navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/add-employee");
  }
  // const goHome = () => {
  //   navigate("/");
  // }
  return (
    <div className='container'>
        <h1>Congratulations you are logged in</h1>

        <div className='container'>
        <form onSubmit={(e) => {logOut(e)}}>
            <div class="btn-group-vertical ml-4 mt-4" role="group" aria-label="Basic example">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary py-3 m-2" 
                        onClick={() => logOut()}> Log Out
                    </button>    
                    
                     
                       
                </div>
            </div>
        </form>
         {/* <button type="button" class="btn btn-success py-3 m-2" 
                                      onClick={goHome}> Go Home
          </button> */}
    </div>
    </div>
    
  )
}

export default EmployeeLandingPage