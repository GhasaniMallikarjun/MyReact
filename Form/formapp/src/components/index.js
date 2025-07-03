// import './index.css'
// import React,{ useState} from "react"

// function formapp(){
//     const  [firstName, setFirstName]=useState("");
//     const [lastName, setLastName]=useState("")
//     const [email, setEmail]=useState("")
//     const [contact, setContact]=useState("")
//     const [gender, setGender]=useState("male")
//     const [subjects, setSubjects]=useState({
//         english:true,
//         maths:false,
//         physics:false,
//     })
//     const [resume, setResume]=useState("")
//     const [url, setUrl]=useState();
//     const [selectedOption, setSelectedOption]=useState("")
//     const [about, setAbout]=useState("");


//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(firstName, lastName, email, contact, gender, selectedOption, subjects, resume, url, about);

//     };


//     const handleSubjectChange=(sub)=>{
//         setSubjects((prev)=>({...prev, [sub]:!prev[sub],}));
//     };


//     const handleReset=()=>{
//         setFirstName("")
//         setLastName("")
//         setEmail("")
//         setContact("")
//         setGender("male")
//         setSubjects({english:true, maths:false, physics:false,})
//         setResume("")
//         setUrl("")
//         setSelectedOption("")
//         setAbout("");
//     }



//     return (

//         <div className="App">
//             <h1>Form in React</h1>
//             <fieldset>
//                 <form action="#" method="get" onSubmit={handleSubmit}>

//                     <label for="firstname">
//                         First Name*
//                     </label>
//                     <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter First Name" required />


//                     <label for="lastname">
//                         Last Name*
//                     </label>
//                     <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Enter Last Name" required />


//                     <label for="email">
//                         Enter Email*
//                     </label>
//                     <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required />




//                     <label for="tel">
//                         Contact*
//                     </label>
//                     <input type="tel" name="contact" id="contact" value={contact} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Mobile Number" required />



//                     <label for="gender">
//                         Contact*
//                     </label>
//                     <input type="radio" name="gender" id="male" value={male} onChange={(e)=>setGender(e.target.value)} checked={gender==="male"} /> 
//                     Male
                    
                    
                    
//                     <input type="radio" name="gender" id="female" value={female} onChange={(e)=>setGender(e.target.value)} checked={gender==="female"} /> 
//                     Female


//                     <input type="radio" name="gender" id="other" value={other} onChange={(e)=>setGender(e.target.value)} checked={gender==="other"} /> 
//                     Other


//                     <label for="lang">
//                         Your Best Subject
//                     </label>
//                     <input type="checkbox" name="lang" id="english"  onChange={(e)=>handleSubjectChange("english")} checked={subjects.english===true}/>
//                     english


//                     <input type="checkbox" name="lang" id="maths"  onChange={(e)=>handleSubjectChange("maths")} checked={subjects.maths===true}/>
//                     Maths


//                     <input type="checkbox" name="lang" id="physics"  onChange={(e)=>handleSubjectChange("physics")} checked={subjects.physics===true}/>
//                     Physics




//                     <label for="file">
//                         Upload Resume*
//                     </label>
//                     <input type="file" name="file" id="file"  onChange={(e)=>setResume(e.target.files[0])} placeholder="Enter Upload File" requied/>
                    

//                     <label for="url">
//                         Enter URL*
//                     </label>
//                     <input type="url" name="url" id="url"  onChange={(e)=>setUrl(e.target.value)} placeholder="Enter Url" requied/>



//                     <label>Select your choice</label>
//                     <select name="select" id="select" value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
//                         <option value="" disabled selected={selectedOption===""}>Select your Ans</option>

//                         <optgroup label="Beginers">
//                             <option value="1">HTML</option>
//                             <option value="2">CSS</option>
//                             <option value="3">JavaScript</option>
//                         </optgroup>

//                         <optgroup label="Advance">
//                             <option value="4">React</option>
//                             <option value="5">Node</option>
//                             <option value="6">Express</option>
//                             <option value="t">MongoDB</option>
//                         </optgroup>
//                     </select>


//                     <label  for="about">About</label>
//                     <textarea name="about" id="about" cols="30" rows="10" onChange={(e)=>setAbout(e.target.value)} placeholder="About your self" required>

//                     </textarea>

//                     <button type="reset" value="reset" onClick={()=>handleReset()}>
//                         Reset
//                     </button>

//                     <button type="submit" value="Submit" onClick={(e)=>handleSubmit(e)}>
//                         Submit
//                     </button>

//                 </form>
//             </fieldset>
//         </div>
//     )
// }

// export default formapp;


import './index.css'
import React, { useState } from "react"

function FormApp() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [gender, setGender] = useState("male")
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  })
  const [resume, setResume] = useState("")
  const [url, setUrl] = useState("")
  const [selectedOption, setSelectedOption] = useState("")
  const [about, setAbout] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    })
  }

  const handleSubjectChange = (sub) => {
    setSubjects(prev => ({
      ...prev,
      [sub]: !prev[sub],
    }))
  }

  const handleReset = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setContact("")
    setGender("male")
    setSubjects({ english: true, maths: false, physics: false })
    setResume("")
    setUrl("")
    setSelectedOption("")
    setAbout("")
  }

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required />

          <label htmlFor="lastname">Last Name*</label>
          <input type="text" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required />

          <label htmlFor="email">Enter Email*</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />

          <label htmlFor="contact">Contact*</label>
          <input type="tel" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Mobile Number" required />

          <label>Gender*</label>
          <input type="radio" id="male" value="male" name="gender" onChange={(e) => setGender(e.target.value)} checked={gender === "male"} /> Male
          <input type="radio" id="female" value="female" name="gender" onChange={(e) => setGender(e.target.value)} checked={gender === "female"} /> Female
          <input type="radio" id="other" value="other" name="gender" onChange={(e) => setGender(e.target.value)} checked={gender === "other"} /> Other

          <label>Your Best Subject</label>
          <input type="checkbox" id="english" onChange={() => handleSubjectChange("english")} checked={subjects.english} /> English
          <input type="checkbox" id="maths" onChange={() => handleSubjectChange("maths")} checked={subjects.maths} /> Maths
          <input type="checkbox" id="physics" onChange={() => handleSubjectChange("physics")} checked={subjects.physics} /> Physics

          <label htmlFor="file">Upload Resume*</label>
          <input type="file" id="file" onChange={(e) => setResume(e.target.files[0])} required />

          <label htmlFor="url">Enter URL*</label>
          <input type="url" id="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" required />

          <label>Select your choice</label>
          <select id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
            <option value="" disabled>Select your Ans</option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>

          <label htmlFor="about">About</label>
          <textarea id="about" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="About yourself" required />

          <button type="reset" onClick={handleReset}>Reset</button>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  )
}

export default FormApp
