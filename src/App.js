import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import{v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';


function App() {
  const [role, setRole]= useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id:1,
        name: 'Brandon',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?',
      },
      {
        id:2,
        name: 'John',
        role: 'Senior',
        img: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
      },
      {
        id:3,
        name: 'Caleb',
        role: 'The Devops Guy',
        img: 'https://images.pexels.com/photos/3934707/pexels-photo-3934707.jpeg',
      },
      {
        id:4,
        name: 'Josh',
        role: 'Intern',
        img: 'https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg',
      },
      {
        id:5,
        name: 'Ashley',
        role: 'Manager',
        img: 'https://images.pexels.com/photos/2728264/pexels-photo-2728264.jpeg',
      },
      {
        id:6,
        name: 'Marie',
        role: 'Software Engineer',
        img: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg',
      },
      
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return {...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
            <input 
              type="text"
              onChange={(e) => {
                setRole = (e.target.value);
              }}
            />
            <div class="flex flex-wrap justify-center">
                {employees.map((employee) => {
                  
                  return (
                    <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img}
                    updateEmployee={updateEmployee}
                    />
                  );
                  
                })}
             
                
            </div>
            <AddEmployee newEmployee={newEmployee} />
        </>
        )  : (
            <p>You cannot see the employees</p>
        )}
    </div>
    );
  }

export default App;
