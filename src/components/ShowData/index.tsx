import React from 'react';
import { View, Text } from 'react-native';

const ShowData = ({ title, info, margintop }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: margintop }}>
      <Text style={{ fontFamily: 'Rubik-Bold', color: '#000' }}>
        {title} :{' '}
      </Text>
      <Text style={{ fontFamily: 'Rubik-Medium', color: '#000' }}>{info}</Text>
    </View>
  );
};

export default ShowData;
