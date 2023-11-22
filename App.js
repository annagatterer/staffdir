
import React from 'react';
import { View, Button, Text, Image, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateEmployee from './createEmployee';
import LoadEmployee from './loadEmployees';
import Employee from './employee';

const Stack = createStackNavigator();

function HomeScreen({ navigation, route }) {
  const newEmployee = route.params?.newEmployee;

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logoRoi_resized.png')} style={styles.logo} />

      <Button
        title="Upload Employees"
        onPress={() => navigation.navigate('LoadEmployee')}
      />
      
      <View style={{ marginBottom: 20 }} /> 
      <Button
        title="Create New Employee"
        onPress={() => navigation.navigate('CreateEmployee')}
      />
      <View style={{ marginBottom: 20 }} /> 
        <Button
        title="Update Employees"
        onPress={() => navigation.navigate('UpdateEmployee')}
      />
      

      <Text>
        {newEmployee ? (
          <View style={{ borderWidth: 1, borderColor: 'black', margin: 10, padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              ID: {newEmployee.id} - Employee name: {newEmployee.name}
            </Text>
            <Text style={{ marginBottom: 10 }}>Phone: {newEmployee.phone}</Text>

            <Text> Department: {newEmployee.departmentName}</Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
              Address:
            </Text>
            <Text style={{ marginBottom: 5 }}>{newEmployee.street}</Text>
            <Text style={{ marginBottom: 5 }}>{newEmployee.city}</Text>
            <Text style={{ marginBottom: 5 }}>{newEmployee.zip}</Text>
            <Text style={{ marginBottom: 5 }}>{newEmployee.state}</Text>
            <Text style={{ marginBottom: 5 }}>{newEmployee.country}</Text>
          </View>
        ) : ' '}
      </Text>
    </View>
  );
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateEmployee" component={CreateEmployee} />
        <Stack.Screen name="LoadEmployee" component={LoadEmployee} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95959',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 154,
    marginBottom: 5
  },
});

export default App;


