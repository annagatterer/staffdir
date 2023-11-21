import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const UpdateEmployee = ({ route, navigation }) => {
  const [employee, setEmployee] = useState({
    id: route.params.id,
    name: route.params.name,
    department: route.params.departmentName,
    phone: route.params.phone,
    street: route.params.street,
    city: route.params.city,
    state: route.params.state,
    zip: route.params.zip,
    country: route.params.country,
  });

  const handleInputChange = (key, value) => {
    setEmployee({
      ...employee,
      [key]: value,
    });
  };

  const handleUpdateEmployee = () => {
    fetch(`http://localhost:3000/employees/${employee.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then(response => response.json())
      .then(updatedEmployee => {
        console.log('Employee updated successfully:', updatedEmployee);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error('Error updating employee:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Update Employee Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Id"
        value={employee.id.toString()} // Convert ID to string for TextInput
        editable={false} // Disable editing for the ID
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={employee.name}
        onChangeText={text => handleInputChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={employee.phone}
        onChangeText={number => handleInputChange('phone', number)}
      />
      <TextInput
        style={styles.input}
        placeholder="Department Name"
        value={employee.department}
        onChangeText={text => handleInputChange('department', text)}
      />
      <Text style={styles.text}> Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Street name"
        value={employee.street}
        onChangeText={text => handleInputChange('street', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={employee.city}
        onChangeText={text => handleInputChange('city', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Postcode"
        value={employee.zip}
        onChangeText={text => handleInputChange('zip', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={employee.state}
        onChangeText={text => handleInputChange('state', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={employee.country}
        onChangeText={text => handleInputChange('country', text)}
      />

      <Button title="Update Employee" onPress={handleUpdateEmployee} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default UpdateEmployee;