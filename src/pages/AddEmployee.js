import { Navigate } from "react-router-dom";
import React,{useState} from 'react';
import myaxios from '../api/MyAxios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const [pin, setPin ] = useState('');
    const [employee, setEmployee] = useState(null);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');
    let navigate = useNavigate();

    const pinInput = (value) => {
        setPin(pin+value);
    };

    const pinInputDel = () => {
        setPin(pin.slice(0, -1));
        setError(false);
    };

    const pinInputClear = () => {
        setPin("");
        setError(false);
    };
    const goHome = () => {
        navigate("/");
    }
    
    const logIn = async(e) => {
        try{
            e.preventDefault();
            var data = JSON.stringify({
                pin:pin
            })
            await myaxios.post('api/checkEmployee', data).then((res)=>{
                if (res.data.employee!=null){

                    setEmployee(res.data.employee);
                    localStorage.setItem('auth_user', JSON.stringify(res.data.employee));
                    setMsg(res.data.msg);
                    navigate("/EmployeeLandingPage");
                }
                else {
                    setMsg(res.data.msg);
                    setError(true);
                }
            })
        }
        catch(er){
            console.log(er)
        }
        // {employee!=null?
        //     navigate("/login")
        //     :setError(true);
        // }
        // if (employee != null) {
        //     navigate("/login")
        // } else {
        //     setError(true)
        // }  
    };

  return (
    <div className='container'>
        <form onSubmit={(e) => {logIn(e)}}>
            {/* <div class="form-group">
                <label >PIN</label>
                <input type="number" value={pin} required onChange={(e) => {setPin(e.target.value)}}
                 class="form-control" placeholder="Pin"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button> <><br /></>
            {employee!=null?
                 navigate("/login") 
                : setError(true)
            } */}
            <div class="btn-group-vertical ml-4 mt-4" role="group" aria-label="Basic example">
                <div class="btn-group-vertical">
                    <div>

                        {error ? 
                            (
                                <h5 className="m-2 ">  Wrong Pin! </h5>
                            ) : (
                                    <h5 className="m-2 "> Enter Pin Number To Enter  </h5>
                                )
                        } 
                    </div>
                        <div>
                            <input class="text-center form-control-lg mb-2 " id="pin"
                                type="number" 
                                value={pin} required onChange={(e) => {setPin(e.target.value)}}
                                placeholder="Pin"/>
                        </div>

                    
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-outline-secondary py-3"  value="1"
                        onClick={(e) => pinInput(e.target.value)}> 1
                    </button>
                    <button type="button" class="btn btn-outline-secondary py-3"value="2"
                        onClick={(e) => pinInput(e.target.value)}> 2
                    </button>
                    <button type="button" class="btn btn-outline-secondary py-3" value="3"
                        onClick={(e) => pinInput(e.target.value)}> 3
                    </button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-outline-secondary py-3"value="4"
                        onClick={(e) => pinInput(e.target.value)}> 4
                    </button>
                    <button type="button" class="btn btn-outline-secondary py-3" value="5"
                        onClick={(e) => pinInput(e.target.value)}> 5
                    </button>
                    <button type="button" class="btn btn-outline-secondary py-3" value="6"
                        onClick={(e) => pinInput(e.target.value)}> 6
                    </button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-outline-secondary py-3"value="7"
                        onClick={(e) => pinInput(e.target.value)}> 7
                    </button>
                     <button type="button" class="btn btn-outline-secondary py-3" value="8"
                        onClick={(e) => pinInput(e.target.value)}> 8
                    </button>
                    <button type="button" class="btn btn-outline-secondary py-3" value="9"
                        onClick={(e) => pinInput(e.target.value)}> 9
                    </button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-outline-secondary py-3" 
                        onClick={() => pinInputDel()}> Del
                    </button>
                    <button type="button" class="btn btn-outline-secondary py-3" 
                        onClick={() => pinInputClear()}> Clear
                    </button>
                    <button type="button" class="btn btn-outline-secondary py-3" value="0"
                            onClick={(e) => pinInput(e.target.value)}> 0
                    </button>
                    <button type="submit" class="btn btn-primary py-3" 
                        onClick={(e) => logIn(e.target.value)}> Go
                    </button>
                </div>
            </div>
            <div>
                <button type="button" class="btn btn-success py-3" 
                                onClick={goHome}> Go Home
                </button>
            </div>
        </form>
    </div>
  )
}
export default AddEmployee