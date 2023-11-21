const Employee = ({ employee }) => {
    return (
      <div style={{ border: '1px solid blue', margin: 2, padding: 2 }}>
        <h2>ID: {employee.id} - Employee name: {employee.name} </h2>
        <p>Phone: {employee.phone}</p>
        <p>Department: {employee.departmentId} - {employee.departmentName}</p>
        <h3>Address:</h3>
        <p>{employee.address.street}</p>
        <p>{employee.address.city}</p> 
        <p>{employee.address.zip}</p> 
        <p>{employee.address.state}</p>
        <p>{employee.address.postcode}</p>
        <p>{employee.address.country}</p>
      </div>
    );
  };
  
  export default Employee;