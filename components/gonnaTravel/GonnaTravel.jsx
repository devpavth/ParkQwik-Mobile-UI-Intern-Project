import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const travelOptions = [
  { name: 'Car Wash', icon: require('../../assets/gonnaTravel/carwash-icon.png') },
  { name: 'Estimate Toll', icon: require('../../assets/gonnaTravel/toll-icon.png') },
  { name: 'Shop', icon: require('../../assets/gonnaTravel/shop-icon.png') },
  { name: 'Protocols', icon: require('../../assets/gonnaTravel/protocols-icon.png') },
];

const GonnaTravel = () => {
  return (
    <View style={styles.travelContainer}>
      <Text style={styles.travelTitle}>Gonna Travel?</Text>
      <FlatList
        data={travelOptions}
        numColumns={4}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.travelItem}>
            <Image source={item.icon} style={styles.travelIcon} />
            <Text style={styles.travelText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  travelContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 12,
  },
  travelTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'medium',
    color: '#393939',
  },
  travelItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    gap: 2,
  },
  travelIcon: {
    // width: 40,
    // height: 40,
    resizeMode: 'contain',
    marginLeft: -20,
    flex: 1,
    alignItems: 'center',
    // gap: 2,
  },
  travelText: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
    flex: 1,
    alignItems: 'center',
    marginLeft: -20,
  },
});

export default GonnaTravel;
