import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export const DrinkItem = ({itemName, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: `${image}`}} />
      <Text>{itemName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  name: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
