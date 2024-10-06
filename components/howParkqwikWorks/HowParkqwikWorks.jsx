import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const HowParkqwikWorks = () => {
    return (
        <View>
            <Text style={styles.howHeading}>How Parkqwik works?</Text>
            <LinearGradient 
                colors={['#9EFFE1', '#E9FFF8']} 
                style={styles.howContainer}
            >
                <Image 
                    source={require('../../assets/howWorks/parkqwik-works.png')} 
                    style={styles.howImage} 
                />
                <Image 
                    source={require('../../assets/howWorks/play_circle.png')} 
                    style={styles.howCircleImage} 
                />
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    howContainer: {
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 12,
    },
    howHeading: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 15,
        color: '#393939',
        marginLeft: 22,
        fontFamily: 'Poppins-Medium',
    },
    howImage: {
        width: width * 0.7, // Adjust width as needed
        height: 200,
        resizeMode: 'contain',
        marginLeft: 22,
        marginTop: 10,
        // position: 'relative',
    },
    howCircleImage: {
        position: 'absolute',
        width: 30, // Adjust size as needed
        height: 30,
        // resizeMode: 'contain',
        // marginLight: -85,
        // marginBottom: -45,
    },
});

export default HowParkqwikWorks;
