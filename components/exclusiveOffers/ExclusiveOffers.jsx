import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const offers = [
    { name: 'Rewards', icon: require('../../assets/offers/rewards.png') },
    { name: 'Discounts', icon: require('../../assets/offers/discounts.png') },
    { name: 'Refer & Win', icon: require('../../assets/offers/refer-win.png') },
];

const ExclusiveOffers = () => {
    return (
        <View style={styles.exclusiveOffersContainer}>
            <Text style={styles.heading}>Exclusive Offers</Text>
            <View style={styles.offersList}>
                {offers.map((offer, index) => (
                    <View key={index} style={styles.offerItem}>
                        <Image source={offer.icon} style={styles.offerIcon} />
                        <Text style={styles.offerText}>{offer.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    exclusiveOffersContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        marginHorizontal: 12,
    },
    heading: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 20,
        color: '#393939',
        fontFamily: 'Poppins-Medium',
    },
    offersList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    offerItem: {
        alignItems: 'center',
    },
    offerIcon: {
        // width: 50,
        // height: 50,
        marginBottom: 10,
    },
    offerText: {
        fontSize: 14,
        color: '#393939',
        fontFamily: 'Poppins-Regular',
    },
});

export default ExclusiveOffers;
