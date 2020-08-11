import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity
      key={item._id}
      style={{ padding: 15, backgroundColor: '#f8f8f8', borderColor: '#eee' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{item.commonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
