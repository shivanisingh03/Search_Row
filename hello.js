// import './App.css';
// import {useState} from 'react';


// function Task(){
//   const [table,settable]=useState(0)
//   const [list,setlist]=useState([])

  
//   const deleteRow=(index)=>{
//     list.splice(index,1);
// }



//   const listLoop=()=>{
//     let newList=[]
//     for(let i = 1; i <= 10; i++) {
//       newList.push(`${table} x ${i} = ${table*i}`)
//       console.log(newList)
//     }
//     setlist(newList)
//     console.log(list)



//   }

//   return(
//     <div>
//       <input type="number" placeholder="enter your name" onChange={(e)=>{
//         settable(e.target.value)
//       }} />

//       <button onClick={listLoop}>Click</button>
//       {
//           list.map((item,index)=>{
//             return(
//               <div key={index}>
//                 <h1>{item}</h1>

            
//                 <button onClick={deleteRow({index})}>Delete</button>
              


//               </div>
//             )
//           })
//         }
//     </div>
//   )

// }

// export default Task



import React,{useState} from "react";
import './App.css'

function App(){
    const [FirstName,setFirstName]=useState("")
    const [LastName,setLastName]=useState("")
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const [AllData,setAllData]=useState([])

    const [Search,setSearch]=useState("")
    const [SearchData,setSearchData]=useState([])

    const [Filter,setFilter]=useState(false)

    const displayData=()=>{
        const data={
            FirstName:FirstName,
            LastName:LastName,
            Email:Email,
            Password:Password
        }
        if(FirstName.trim()==="" || LastName.trim()==="" || Email.trim()==="" || Password.trim()===""){
            alert("All fields are require to fill")
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
        }
        else{
            setAllData([...AllData,data])
            setFilter(false)
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
        }
        // console.log(AllData);
    }

    const searchData=(Search)=>{
        const newarr=[]
        if(Search.length<4 || Search.trim()===""){
            alert("String length should be more than 4")
        }
        else{
            for(let i of AllData){
                for(let j in i){
                    if(i[j].includes(Search)){
                        newarr.push(i)
                        // console.log(i);
                        break;
                    }
                }
            }
            // console.log(newarr);
            setSearchData(newarr)
            setFilter(true)
        }
        setSearch("")
    }
    return(
        <div id="main">
            <input id='Input1' type="text" placeholder='Firstname' value={FirstName} onChange={(e)=>{
                setFirstName(e.target.value)
            }}></input>
            <input id='Input2' type="text" placeholder='Lastname' value={LastName} onChange={(e)=>{
                setLastName(e.target.value)
            }}></input>
            <input id='Input3' type="email" placeholder='Email' value={Email} onChange={(e)=>{
                setEmail(e.target.value)
            }}></input>
            <input id='Input4' type="password" placeholder='Password' value={Password} onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
            <button onClick={()=>{displayData()}}>submit</button>
            <input id='Input5' type="search" placeholder='Search' value={Search} onChange={(e)=>{
                setSearch(e.target.value)
            }}></input>
            <button onClick={()=>{searchData(Search)}}>search</button>
            <div id="showData">
            <table>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
                {
                    Filter?SearchData.map((item,Index)=>{
                        return(
                          <table>
                            <tbody>
                            <tr>
                                <td>{item.FirstName}</td>
                                <td>{item.LastName}</td>
                                <td>{item.Email}</td>
                                <td>{item.Password}</td>
                            </tr>
                            </tbody>
                            </table>
                        )
                    }):AllData.map((item,Index)=>{
                        return(
                            <tbody>
                            <tr>
                                <td>{item.FirstName}</td>
                                <td>{item.LastName}</td>
                                <td>{item.Email}</td>
                                <td>{item.Password}</td>
                            </tr>
                            </tbody>
                        )
                    })
                }
            </table></div>
           
        </div>
    )
}

export default App






































// import './App.css';
// import {useState} from 'react';


// function App(){
//   const [firstName,setfirstName]=useState("")
//   const [lastName,setlastName]=useState("")

//   const doSomething=(a,b)=>{
//     console.log(a,b)

//   }

//   return(
//     <div>
//       <input type="text" placeholder="enter your name" onChange={(e)=>{
//         setfirstName(e.target.value)
//         console.log(setfirstName)
//       }} />


//       <input type="text" placeholder="enter your name" onChange={(e)=>{
//         setlastName(e.target.value)
//         console.log(setlastName)
//       }}/>

//       <button onClick={()=>{doSomething(firstName,lastName)}}>Click</button>
    
//     </div>
//   )

// }

// export default App;




