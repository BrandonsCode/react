import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import{v4 as uuidv4} from 'uuid';


function App() {
  const [role, setRole]= useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        name: 'Brandon',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?',
      },
      {
        name: 'John',
        role: 'Senior',
        img: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
      },
      {
        name: 'Caleb',
        role: 'The Devops Guy',
        img: 'https://images.pexels.com/photos/3934707/pexels-photo-3934707.jpeg',
      },
      {
        name: 'Josh',
        role: 'Intern',
        img: 'https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg',
      },
      {
        name: 'Ashley',
        role: 'Manager',
        img: 'https://images.pexels.com/photos/2728264/pexels-photo-2728264.jpeg',
      },
      {
        name: 'Marie',
        role: 'Software Engineer',
        img: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg',
      },
      
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
            <input 
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setRole = (e.target.value);
              }}
            />
            <div class="flex flex-wrap justify-center">
                {employees.map((employee) => {
                  console.log(uuidv4());
                  
                  return (
                    <Employee
                    key={uuidv4()}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img}
                    />
                  );
                  
                })}
             
                
            </div>
        </>
        )  : (
            <p>You cannot see the employees</p>
        )}
    </div>
    );
  }

export default App;
