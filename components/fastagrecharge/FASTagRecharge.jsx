import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import NETC from '../../assets/recharge/netc.png';
import Bharat from '../../assets/recharge/bharat.png';

const FASTagRecharge = () => {
  return (
    <View style={styles.fastagContainer}>
      <Text style={styles.fastagHeading}>FASTag Recharge</Text>
      <Text style={styles.fastagText}>Get up to 100% cashback on first 3 Fastag Recharge</Text>
      <View style={styles.fastInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add vehicle or chassis number"
        />
        <TouchableOpacity style={styles.rechargeButton}>
          <Text style={styles.rechargeText}>Recharge</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.poweredbySection}>
        <Text style={styles.poweredbySectionText}>Powered by</Text>
        <Image source={NETC} style={styles.netcLogo}/>
        <Image source={Bharat} style={styles.bharatLogo}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fastagContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 130,
    marginHorizontal: 12,
  },
  fastInputContainer :{
    flexDirection: 'row',  
    alignItems: 'center',  
    margin: 6,
  },
  poweredbySection:{
    flexDirection: 'row',  
    alignItems: 'center',  
    marginHorizontal: 12,
  },
  poweredbySectionText: {
    color: '#434343',
    // fontSize: 12,
  },
  netcLogo: {
    marginHorizontal: 12,
    // width: 65,
    marginVertical: -22,
    // alignItems: center,
  },
  fastagHeading: {
    fontSize: 18,
    marginBottom: 12,
    // fontWeight: 500,
    color: '#393939',
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
  },
  fastagText: {
    marginBottom: 4,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#A0A0A0',
    marginHorizontal: 10,
  },
  input: {
    // flex: 1,
    height: 40,
    borderColor: '#1A9E75',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#1A9E75',
    marginVertical: 10,
  },
  rechargeButton: {
    backgroundColor: '#1A9E75',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 12,
    width: 120,
  },
  rechargeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FASTagRecharge;