import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const services = [
  { name: 'Fastag Recharge', icon: require('../../assets/rechargeBillPayments/fastagRecharge.png') },
  { name: 'Mobile Recharge', icon: require('../../assets/rechargeBillPayments/mobile.png') },
  { name: 'Electricity', icon: require('../../assets/rechargeBillPayments/electricity.png') },
  { name: 'Water', icon: require('../../assets/rechargeBillPayments/water.png') },
  { name: 'Gas Cylinder', icon: require('../../assets/rechargeBillPayments/gas-tank.png') },
  { name: 'Loan Payment', icon: require('../../assets/rechargeBillPayments/loanPayment.png') },
  { name: 'DTH', icon: require('../../assets/rechargeBillPayments/dth.png') },
  { name: 'House Rent', icon: require('../../assets/rechargeBillPayments/house-rent.png') },
  // Add other services similarly...
];

const ServiceItem = ({ name, icon }) => (
  <View style={styles.serviceItem}>
    <Image source={icon} style={styles.serviceIcon} />
    <Text style={styles.serviceText}>{name}</Text>
  </View>
);

const RechargeBillPayments = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>Recharge & Bill Payments</Text>
      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceItem name={item.name} icon={item.icon} />}
        keyExtractor={(item) => item.name}
        numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    marginHorizontal: 12,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
    color: '#393939',
    marginBottom: 20,
  },
  serviceItem: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
  },
  serviceIcon: {
    // width: 40,
    // height: 40,
    marginBottom: 11,
  },
  serviceText: {
    fontSize: 12,
    color: '#393939',
    textAlign: 'center',
  },
});

export default RechargeBillPayments;
