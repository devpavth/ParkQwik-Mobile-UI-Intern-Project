import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Avatar from '../../assets/avatar.png';      // this is an outer image inside this only add button
import AddButton from '../../assets/add-button.png';
import Wallet from '../../assets/wallet.png';
import Share from '../../assets/share.png';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarContainer}>
        <Image 
          source={Avatar} 
          style={styles.avatar} 
        />
        <Image 
          source={AddButton} 
          style={styles.addVehicleButton} 
        />
        <Image 
          source={Wallet} 
          style={styles.addWalletButton} 
        />
        <Image 
          source={Share} 
          style={styles.addShareButton} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#1A9E75',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // padding: 15,
    // right: -15,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    // width: 100,
    // height: 100,
    // borderRadius: 50,
    right: -5,
  },  
  addVehicleButton: {
    position: 'absolute',
    bottom: 142,
    right: 160,
    gap: 5,
    // width: 30,
    // height: 30,
    // borderRadius: 15,
    // backgroundColor: '#fff',
  },
  addWalletButton: {
    position: 'absolute',
    bottom: 150,
    right: 125,
  },
  addShareButton: {
    position: 'absolute',
    bottom: 155,
    right: 65,
  }
});

export default Header;