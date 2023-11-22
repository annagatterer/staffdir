import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Pressable, TextInput, Button } from 'react-native';



const LoadEmployee = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState(null);
  const[newEmployee,setNewEmployee]=useState(null);
  
  const uri = 'http://localhost:3000/employees';

  const fetchEmployees = () => {
    fetch(uri)
      .then(response => response.json())
      .then(json => setEmployees(json))
      .catch(e => console.error(e.message));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handlePress = (employee) => {
    setSelectedEmployee(employee);
    setEditedEmployee(employee);
    setNewEmployee(employee);
  };


  const remove = (id) => {
   
    fetch(`${uri}/${id}`, { method: 'DELETE' })
      .then(() => {
        fetchEmployees();
        setSelectedEmployee(null);
      })
      .catch(e => console.error(e.message));
  };

  const saveChanges = () => {
    
    fetch(`${uri}/${editedEmployee.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedEmployeeemployees),
    })
      .then(() => {
        fetchEmployees();
        setSelectedEmployee(null);
      })
      .catch(e => console.error(e.message));
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logoRoi_resized.png')} style={styles.logo} />
      <Text style={styles.title}>Update Employees</Text>
      
      {selectedEmployee ? (
        <View style={styles.detailedInfoContainer}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            ID: {editedEmployee.id}
          </Text>
          <TextInput
            style={styles.input}
            value={editedEmployee.name}
            onChangeText={(text) => setEditedEmployee({ ...editedEmployee, name: text })}
            placeholder="Employee name"
          />
          <TextInput
            style={styles.input}
            value={editedEmployee.departmentId}
            onChangeText={(number) => setEditedEmployee({ ...editedEmployee, departmentId: number })}
            placeholder="Department"
          />
          <TextInput
            style={styles.input}
            value={editedEmployee.departmentName}
            onChangeText={(text) => setEditedEmployee({ ...editedEmployee, departmentName: text })}
            placeholder="Department"
          />
          <TextInput
            style={styles.input}
            value={editedEmployee.phone}
            onChangeText={(number) => setEditedEmployee({ ...editedEmployee, phone: number })}
            placeholder="Phone Number"
          />
          
          <TextInput
            style={styles.input}
            value={editedEmployee.address.street}
            onChangeText={(text) => setEditedEmployee({ ...editedEmployee, street: text })}
            placeholder="Street"
          />
             <TextInput
            style={styles.input}
            value={editedEmployee.address.city}
            onChangeText={(text) => setEditedEmployee({ ...editedEmployee, city: text })}
            placeholder="City"
          />
             <TextInput
            style={styles.input}
            value={editedEmployee.address.zip}
            onChangeText={(text) => setEditedEmployee({ ...editedEmployee, zip: text })}
            placeholder="Street"
          />
             <TextInput
            style={styles.input}
            value={editedEmployee.address.state}
            onChangeText={(text) => setEditedEmployee({ ...editedEmployee, state: text })}
            placeholder="State"
          />
            <TextInput
            style={styles.input}
            value={editedEmployee.address.country}
            onChangeText={(text) => setEditedEmployee({ ...editedEmployee, country: text })}
            placeholder="State"
          />
          <Button title="Save Changes" onPress={saveChanges} />        
        </View>
      
      ) : (
        employees.map((employee) => (
          <Pressable
            key={employee.id}
            style={styles.employee}
            onPress={() => handlePress(employee)}
            onLongPress={() => remove(employee.id)}
          >
            <Text style={{ color: 'white' }}>{employee.name}</Text>
          </Pressable>
        ))
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
  },
  title: {
    color: '#262626',
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'normal',
  },
  logo: {
    width: 300,
    height: 154,
    marginBottom: 5,
  },
  employee: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    padding: 5,
    width: 300,
    backgroundColor: 'maroon',
  },
  detailedInfoContainer: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    width: 300,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoadEmployee;
