import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';


const services = [
  { name: 'Nearby Parking', icon: require('../../assets/nearby-parking.png') },
  { name: 'EV Parking', icon: require('../../assets/ev-parking.png') },
  { name: 'Car Wash', icon: require('../../assets/car-wash.png') },
  { name: 'Vehicle Insurance', icon: require('../../assets/vehicle-insurance.png') },
  { name: 'Roadside Assistance', icon: require('../../assets/road-assistance.png') },
  { name: 'Pay Challan', icon: require('../../assets/pay-challan.png') },
  { name: 'Toll Estimator', icon: require('../../assets/toll-estimator.png') },
  { name: 'Valet Parking', icon: require('../../assets/valet-parking.png') },
];


const Services = () => {
  return (
    <View style={styles.servicesContainer}>
      <Text style={styles.serviceHeading}>Services</Text>
      <FlatList
        data={services}
        numColumns={4}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <Image source={item.icon} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  servicesContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: -115,
    marginHorizontal: 12,
  },
  serviceHeading: {
    fontSize: 18,
    marginBottom: 12,
    // fontWeight: 500,
    color: '#393939',
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
  },
  serviceItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  serviceText: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

export default Services;