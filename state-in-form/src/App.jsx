import { useState } from 'react'
import './App.css'


function App() {
  const [formData, setFormData] = useState({name: '', email: '', feedback: ''});
  const handleChange = ev => {
    let updateData = {
      ...formData, 
      [ev.target.id] : ev.target.value
    }
    setFormData(updateData);



  }
  const handleChangeName = ev => {
    let updateName = {
      ...formData, 
      [ev.target.id] : ev.target.value
    }
    setFormData(updateData);

    

  }
  return (
    <div className='app-container'>
     
     <label>Name</label>
     <input type="text" id="name" value={formData.name} onChange={handleChange}/>
     <label>Email</label>
     <input type="email" id="email" value={formData.email} onChange={handleChange}/>
     <label>Feedback</label>
     <input type="text" id="feedback" value={formData.feedback} onChange={handleChange}/>

    </div>
    


    
    
  )
}

export default App
