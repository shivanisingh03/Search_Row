import './App.css';



import React, { useState } from "react"
// install lodash(npm install lodash)
const _ = require('lodash')
export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allData, setAllData] = useState([])
  const [searchItem, setSearchItem] = useState("")
  const [filteredData, setFilteredData] = useState([])

  const searchFunction = () => {
    console.log("hiii")
    if (searchItem.length > 3) {
      console.log("Entered the filter function")
      let filteredItems = _.filter(allData, { "firstName": searchItem })
      setFilteredData(filteredItems)
      console.log(filteredItems)
    }
  }
  return (
    <table id='tablediv'>
    <div>
      <div>
        <input  type="text" placeholder="Search"
 onChange={(e) => {
          setSearchItem(e.target.value)
          searchFunction()
        }} />
        
       
      </div>
      
      
      <input id='input1' type="text" placeholder="Enter first name" onChange={(e) => {
        setFirstName(e.target.value)
      }} />
      <input type="text" placeholder="Enter last name" onChange={(e) => {
        setLastName(e.target.value)
      }} />
      <input type="email" placeholder="Enter email" onChange={(e) => {
        setEmail(e.target.value)
      }} />

      <input type="password" placeholder="Enter password" onChange={(e) => {
        setPassword(e.target.value)
      }} />


      <button onClick={() => {

        let tempObj = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }

        setAllData([...allData, tempObj])
      }}>Submit</button>
       <table>
        <th>first Name</th>
        <th>last Name</th>
        <th>Email</th>
        <th>Password</th>
      </table>


      {
        searchItem.length > 3 ? filteredData.map((item, index) => {
          return (
            // <div>
              <table>
                <tr>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>



                </tr>
              </table>

            // </div>
          )
        }) : allData.map((item, index) => {
          return (
            // <div>
              <table>
                <tr>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>



                </tr>
              </table>
            // </div>
          )
        })

      }
    </div>
    </table>


  )
}




