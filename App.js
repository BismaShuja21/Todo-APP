// import React, { useState, useEffect } from 'react';
// import { FlatList, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Task from './components/Task';
// import { format } from 'date-fns';
// import AsyncStorage from '@react-native-async-storage/async-storage'


// export default function App() {
//   const [task, setTask] = useState();
//   const [taskItems, setTaskItems] = useState([]);

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   // Load tasks from AsyncStorage
//   const loadTasks = async () => {
//     try {
//       const savedTasks = await AsyncStorage.getItem('taskItems');
//       if (savedTasks !== null) {
//         setTaskItems(JSON.parse(savedTasks));
//       }
//     } catch (error) {
//       console.error('Error loading tasks from AsyncStorage:', error);
//     }
//   };

//   const addNewTask = async () => {
//     if (task) {
//       const newTaskItems = [...taskItems, task];
//       setTaskItems(newTaskItems);
//       setTask(null);
//       try {
//         await AsyncStorage.setItem('taskItems', JSON.stringify(newTaskItems));
//       } catch (error) {
//         console.error('Error saving tasks to AsyncStorage:', error);
//       }
//     }
//   };

//   const completeTask = async (index) => {
//     let copy = [...taskItems];
//     copy.splice(index, 1);
//     setTaskItems(copy);

//     try {
//       await AsyncStorage.setItem('taskItems', JSON.stringify(copy));
//     } catch (error) {
//       console.error('Error saving tasks to AsyncStorage:', error);
//     }
//   };

//   const currentDate = format(new Date(), 'MMMM d, yyyy');

//   return (
//     <KeyboardAvoidingView behavior="" style={styles.container}>

//       {/* content */}
//       <View>
//         <View style={{ ...styles.header }} />
//         <Text style={styles.taskTitle}>Tasks for {currentDate}</Text>
//       </View>

//       <FlatList style={styles.tasks} 
//         data={taskItems}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//             <Task text={item} index={index} onComplete={() => completeTask(index)} />
//         )}
//         ListEmptyComponent={
//           <Text style={styles.noTasks}>Great Job! No tasks Due</Text>
//         }
//       />

//       {/* footer */}
//       <View style={styles.inputContainer} >
//         <TextInput
//           style={styles.input}
//           placeholder='Write a task'
//           value={task}
//           onChangeText={text => setTask(text)} />
//         <TouchableOpacity style={styles.addNewTask} onPress={() => addNewTask()} >
//           <Text style={styles.addText}>+</Text>
//         </TouchableOpacity>
//       </View>

//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#003566',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//   },
//   header: {
//     height: 80,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 12,
//     alignItems: 'center',
//     justifyContent: 'space-between',

//   },
//   addNewTask: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: "#e63946",
//     borderRadius: 25,
//   },
//   taskWrapper: {
//     paddingTop: 90,
//     paddingHorizontal: 20,
//   },
//   taskTitle: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: "#FEFBEA",

//   },
//   tasks: {
//     flex:1,
//     width: '100%'
//   },
//   input: {
//     padding: 12,
//     backgroundColor: '#FEFBEA',
//     // width: 270,
//     width:"81%",
//     borderRadius: 25,
//   },
//   addText: {
//     width: 53,
//     height: 53,
//     fontSize: 25,
//     color: "white",
//     fontWeight: 'bold',
//     paddingLeft: 19,
//     paddingTop: 7,
//   },
//   noTasks: {
//     fontSize: 18,
//     color: 'white',
//     fontWeight: 'bold',
//     marginTop: 20,
//     backgroundColor: '#119822',
//     padding: 20,
//     width: 335,
//     borderRadius: 22,
//   },
// });


import React from 'react';
import {Text, View} from 'react-native';

// create a function where you can change the status of the inoffice property of the employess array and display it on the application
// code should be as short and consice as possbile, no redunduncy allowed

const employees = [
  { name: 'John', age: 32, inOffice: false },
  { name: 'Mary', age: 19, inOffice: true },
  { name: 'Alex', age: 22, inOffice: false },
  { name: 'Lux', age: 25, inOffice: false },
  { name: 'Ben', age: 45, inOffice: true },
]; // Try edit me

const App = () => {

  const changeStatus = (employee) => {
    employee.forEach((element) => {
      if(element.inOffice){
          element.inOffice= false;
      }else{
           element.inOffice= true;
      }
    });
    
    return employee;
  };
  
  const res = changeStatus(employees);
  console.log(res);

  return (
    <View>
      {res}
    </View>
  )
}