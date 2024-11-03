import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddtaskScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasks = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Date.now().toString(),
        text: task,
        completed: false,
      };

      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasks(updatedTasks);

      setTask('');
    }
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const clearAllTasks = async () => {
    try {
      await AsyncStorage.removeItem('@tasks');
      setTasks([]);
    } catch (error) {
      console.error('Error clearing tasks:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTask(item.id)}>
        <Icon
          name={item.completed ? 'check-circle' : 'circle-thin'}
          size={26}
          color={item.completed ? '#4CAF50' : '#757575'}
        />
      </TouchableOpacity>
      <Text style={[styles.taskText, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Icon name="trash" size={24} color="#ff4500" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={{ 
          textAlign:"center",
          fontSize:16,
          marginBottom:10,
          backgroundColor: '#00bfff',
          padding: 15,
          color:"white",
          borderRadius:20,
          shadowColor: '#000',
          shadowOffset: {
          width: 0,
          height: 2,
        },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 8,
          }}>Progress, not perfection</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new goal"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={addTask}>
          <Icon name="plus-circle" size={30} color="#2196F3" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.taskList}
      />
      {tasks.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={clearAllTasks}>
          <Text style={styles.clearButtonText}>Clear All </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor:"#fff",
    paddingVertical: 15,
    borderRadius:15,
    paddingHorizontal:16,
    marginVertical:15,
    paddingLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    borderBottomWidth:2,
    borderBottomColor:"#00bfff"
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderLeftWidth:5,
    borderColor:"#00bfff",
    padding:10,
    borderRadius:1,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  taskList: {
    flexGrow: 1,
  },
  clearButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth:2,
    borderColor:"#ff4500",
  },
  clearButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddtaskScreen;
