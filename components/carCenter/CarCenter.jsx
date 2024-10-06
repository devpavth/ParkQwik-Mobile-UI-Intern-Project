import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const carServices = [
    { name: 'Pay Challans', icon: require('../../assets/carCenter/pay-challan.png') },
    { name: 'Crime Reporter', icon: require('../../assets/carCenter/crime-report.png') },
    { name: 'RTO Center', icon: require('../../assets/carCenter/rto-center.png') },
    { name: 'PUCC Center', icon: require('../../assets/carCenter/pucc-center.png') },
    // Add other services similarly...
];

// Define the ServiceItem component
const ServiceItem = ({ name, icon }) => (
    <TouchableOpacity style={styles.serviceItem}>
        <Image source={icon} style={styles.serviceIcon} />
        <Text style={styles.serviceText}>{name}</Text>
    </TouchableOpacity>
);

const CarCenter = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>Your Car's Center</Text>
            <FlatList
                data={carServices}
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
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 10,
        color: '#393939',
        marginBottom: 20,
        fontFamily: 'Poppins-Medium',
    },
    serviceItem: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
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
        fontFamily: 'Poppins-Regular',
    },
});

export default CarCenter;
