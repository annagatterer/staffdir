import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import React, { useState } from 'react';


    const CreateEmployee = ({ navigation }) => {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [departmentName, setDepartment] = useState('');
    const [phone, setPhone] = useState('');
    const [street,setStreet] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [zip,setZip] = useState('');
    const [country,setCountry] = useState('');
    
 
      const recordEmployee = () => {
        const newEmployee = {
          id,
          name,
          departmentName,
          phone,
          street,
          city,
          state,
          zip,
          country,
        };
    
        navigation.navigate('Home', { newEmployee });
      };

    return (
      <View style={styles.container}>
        <Image source={require('./assets/logoRoi_resized.png')} style={styles.logo} />
        <Text style={styles.title}>Create New Employee</Text>
        <TextInput
          style={styles.input}
          placeholder="Id"
          onChangeText={(number) => setID(number)}
          value={id}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(number) => setPhone(number)}
          value={phone}
        />
        <TextInput
          style={styles.input}
          placeholder="Department Name"
          onChangeText={(text) => setDepartment(text)}
          value={departmentName}
        />
        <Text style={styles.text}> Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Street name"
          onChangeText={(text) => setStreet(text)}
          value={street}
        />       
        <TextInput
          style={styles.input}
          placeholder="City"
          onChangeText={(text) => setCity(text)}
          value={city}
        />
        <TextInput
          style={styles.input}
          placeholder="Postcode"
          onChangeText={(text) => setZip(text)}
          value={zip}
        />
          <TextInput
          style={styles.input}
          placeholder="State"
          onChangeText={(text) => setState(text)}
          value={state}
        />
           <TextInput
          style={styles.input}
          placeholder="Country"
          onChangeText={(text) => setCountry(text)}
          value={country}
        />
    <Button title="Record Employee" onPress={recordEmployee} />
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
      fontStyle:'normal',
    },
    
    text: {
      color: '#262626',
      fontFamily: 'arial',
      fontWeight: 'bold',
      fontSize: 15,
      padding: 3,
    },
    input: {
      height: 40,
      width:300,
      borderColor: 'black',
      borderWidth: 2,
      paddingHorizontal: 10,
      fontStyle:'normal'
    },
    logo: {
      width: 300,
      height: 154,
      marginBottom: 5
    },
  });

  export default CreateEmployee; 