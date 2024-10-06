import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const Trending = () => {
    return (
        <View>
            <Text style={styles.trendingHeading}>Trending</Text>
            <ImageBackground 
                source={require('../../assets/trending/bg.png')} 
                style={styles.trendingContainer}
                imageStyle={styles.BGImage}
            >
                <View style={styles.trendingCard}>
                    <Text style={styles.trendingTitle}>Save ₹500</Text>
                    <Text style={styles.trendingSubtitle}>On Your First EV Parking</Text>
                    <Text style={styles.trendingDescription}>We provide dedicated monthly parking with surveillance</Text>
                    <View style={styles.trendingFooter}>
                        <Image source={require('../../assets/trending/ev.png')} style={styles.customerImage} />
                        <Text style={styles.customerAd}>100+</Text>
                        <Text style={styles.customerText}>Happy Customers</Text>
                    </View>
                    {/* Bottom Slider */}
                    <View style={styles.sliderContainer}>
                        <View style={styles.slider}></View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    trendingContainer: {
        padding: 16,
        marginBottom: 20,
        borderRadius: 18,
        overflow: 'hidden',
        marginHorizontal: 12,
    },
    trendingHeading: {
        fontSize: 18,
        fontWeight: '400',
        color: '#393939',
        marginBottom: 10,
        marginLeft: 22,
        fontFamily: 'Poppins-Medium',
    },
    BGImage: {
        borderRadius: 18,
    },
    trendingCard: {
        padding: 16,
    },
    trendingTitle: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: '#EBFF00',
        marginTop: -10,
        fontFamily: 'Poppins-SemiBold',
    },
    trendingSubtitle: {
        fontSize: 18,
        color: '#fff',
        marginVertical: 5,
        fontFamily: 'Poppins-Medium',
    },
    trendingDescription: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 20,
        width: 222,
        fontFamily: 'Poppins-Regular',
    },
    trendingFooter: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    customerImage: {
        borderRadius: 20,
        alignItems: 'flex-end',
        marginLeft: 192,
        marginTop: 5,
    },
    customerAd: {
        marginLeft: 5,
        color: '#fff',
        fontSize: 20,
        alignItems: 'flex-end',
        fontWeight: '500',
        // marginBottom: -30,
    },
    customerText: {
        marginLeft: -42,
        color: '#fff',
        fontSize: 10,
        alignItems: 'flex-end',
        marginTop: 25,
        fontFamily: 'Poppins-Regular',
    },
    sliderContainer: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: 120,
        height: 7,
        borderRadius: 2.5,
        marginLeft: 95,
        marginBottom: -20,
    },
    slider: {
        marginTop: 1,
        alignItems: 'center',
        width: 40,
        height: 4.5,
        backgroundColor: '#1A9E75',
        borderRadius: 2.5,
        marginLeft: -70,
    },
});

export default Trending;
