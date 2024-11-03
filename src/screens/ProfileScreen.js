import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const ProfileScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  const keyExtractor = (item) => item.name;

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <Calendar 
        current={selectedDate.toISOString().split('T')[0]}
        onDayPress={(day) => setSelectedDate(new Date(day.timestamp))}
        style={styles.calendar}
        hideExtraDays
        markedDates={{
          [selectedDate.toISOString().split('T')[0]]: { selected: true, marked: true, selectedColor: '#00bfff' },
        }}
      />
      <Text style={{ textAlign:"center",fontSize:22,color:"#00bfff",marginTop:40,fontWeight:"600"}}>Small steps lead to big results.</Text>
      <Text style={{ textAlign:"center",fontSize:22,color:"black",marginTop:5,fontWeight:"600"}}>Start today</Text>
      <Text style={{marginTop:50,textAlign:"center",fontSize:20,marginBottom:550,color:"#dcdcdc"}}>TaskTick.in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  calendar: {
   marginTop:40,
   borderRadius:20,
   shadowColor: '#000',
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 8,
  
  },
  headerContainer: {
    marginTop:30,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center', 
    borderRadius:30,
    borderWidth:2,
    borderColor:"#00bfff",
    width:"90%",
    marginLeft:15,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight:"500",
  },
});

export default ProfileScreen;
