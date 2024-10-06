import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const otherServices = [
  { name: 'Rentout Helmet', icon: require('../../assets/others/helmet-icon.png') },
  { name: 'Fuel Price', icon: require('../../assets/others/fuel-icon.png') },
  { name: 'Shop', icon: require('../../assets/others/shop-icon.png') },
  { name: 'My Vehicles', icon: require('../../assets/others/vehicle-icon.png') },
];

const Others = () => {
  return (
    <View style={styles.othersContainer}>
      <Text style={styles.othersTitle}>Others</Text>
      <FlatList
        data={otherServices}
        numColumns={4}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.othersItem}>
            <Image source={item.icon} style={styles.othersIcon} />
            <Text style={styles.othersText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  othersContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 12,
    marginTop: 20,
  },
  othersTitle: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'medium',
    color: '#393939',
    marginLeft: 10,
  },
  othersItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  othersIcon: {
    // width: 40,
    // height: 40,
    resizeMode: 'contain',
  },
  othersText: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
  },
});

export default Others;
