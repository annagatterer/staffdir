import { StyleSheet, View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react'; 
import Employee from './employee';

const LoadEmployee = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then(json => setEmployees(json));
  }, []);

  return (
    <View style={styles.container}>
         <Image source={require('./assets/logoRoi_resized.png')} style={styles.logo} />
        <Text style={styles.title}>Uploaded Employees</Text>
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
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
  text: {
    color: '#001A0D',
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 3,
  },
  logo: {
    width: 300,
    height: 154,
    marginBottom: 5
  },
});

export default LoadEmployee;
