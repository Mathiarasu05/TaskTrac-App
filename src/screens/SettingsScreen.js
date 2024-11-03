import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const SettingsScreen = () => {
  const handleToggleSwitch = (value) => {
    console.log('Switch Toggled:', value);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Settings</Text>
        <Text>Edit your profile information </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notification Settings</Text>
        <Text>Customize your notification preferences</Text>
        <Switch
          value={true} 
          onValueChange={(value) => handleToggleSwitch(value)}
        />
      </View>
      <View >
            <Text style={{ marginTop: 250, textAlign:"center" }}>V.0.73.2</Text>
          </View>
      <View style={styles.lasts}>
            <Text style={{ marginLeft: 50, marginTop: 8, color: "#00bfff" }}><FontAwesome name="instagram" size={30}></FontAwesome>       <FontAwesome name="whatsapp" size={30}></FontAwesome>       <FontAwesome name="facebook" size={30}></FontAwesome>       <FontAwesome name="twitter" size={30}></FontAwesome></Text>
            
          </View>
          <Text style={{textAlign:"center",marginTop:-5}} ><AntDesign name="contacts" size={20} color="black" /> mathiravi005@gmail.com</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:"white"
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  lasts: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    marginLeft: 30,
    borderRadius: 10,
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#00bfff",
    marginBottom:40,
  },
});

export default SettingsScreen;
