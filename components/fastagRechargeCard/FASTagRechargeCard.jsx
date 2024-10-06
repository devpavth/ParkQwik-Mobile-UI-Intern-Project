import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FASTagRechargeCard = () => {
  return (
    <View style={styles.container}>
      {/* Card 1 */}
      <LinearGradient
        colors={['#1A9E75', '#27CD99']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.9, y: 0.9 }}
        style={styles.card}
      >
        <Text style={styles.greencardText}>Get 15% off on</Text>
        <Text style={styles.cardTexts}>FASTag recharge</Text>
        <Text style={styles.greencardSubText}>Pay using Axis Bank Credit & Debit Cards</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Recharge Now</Text>
          <Image source={require('../../assets/fastag/fastag.png')} style={styles.cardImage} />
        </TouchableOpacity>
        
      </LinearGradient>

      {/* Card 2 */}
      <LinearGradient
        colors={['#1B53E4', '#268AFF']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.9, y: 0.9 }}
        style={[styles.card, styles.blueCard]}
      >
        <Text style={styles.cardText}>Reserve a Parking Spot</Text>
        <Text style={styles.cardSubText} numberOfLines={1} ellipsizeMode="tail">Win 300ml petrol or free parking!</Text>
        <TouchableOpacity style={styles.bluebutton}>
          <Text style={[styles.buttonText, styles.blueButtonText]}>Explore Now</Text>
        </TouchableOpacity>
        {/* <Image source={require('../../assets/parking.png')} style={styles.cardImage} /> */}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 12,
    width: 570,
  },
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    marginRight: 10, // Space between cards
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  blueCard: {
    marginRight: 0, // Remove the margin for the last card
  },
  greencardText: {
    fontSize: 16,
    color: '#FBFF29',
    // fontWeight: 'bold',
    marginBottom: 2,
    fontFamily: 'Poppins-SemiBold',
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    // fontWeight: 'bold',
    marginBottom: -30,
    fontFamily: 'Poppins-Medium',
  },
  cardTexts: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 9,
    fontFamily: 'Poppins-Medium',
  },
  greencardSubText: {
    fontSize: 10,
    color: '#fff',
    marginBottom: 20,
    fontFamily: 'Poppins-Medium',
  },
  cardSubText: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
    // whiteSpace: 'nowrap', /* Prevent text wrapping */
    // overflow: 'hidden', /* Hide overflowing content */
    // textOverflow: 'ellipsis', 
    fontFamily: 'Poppins-Medium',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 130,
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    color: '#393939',
    fontWeight: 'bold',
    fontSize: 14,
    // fontFamily: 'Poppins-Regular',
  },
  blueButtonText: {
    color: '#393939',
  },
  cardImage: {
    // width: 60,
    // height: 60,
    alignSelf: 'flex-end',
    // marginBottom: -30,
    marginLeft: 60,
  },
  bluebutton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 130,
  }
});

export default FASTagRechargeCard;
