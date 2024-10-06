import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AddMoneyWallet = () => {
  return (
    <LinearGradient
      colors={['rgba(26, 158, 117, 0.8)', '#1A9E75', '#A6A765']}
      style={styles.walletContainer}
    >
      <View style={styles.walletContent}>
        <Text style={styles.walletTitle}>Add money to wallet</Text>
        <Text style={styles.walletSubtitle}>Get 2% cashback</Text>
        <TouchableOpacity style={styles.walletButton}>
          <Text style={styles.walletButtonText}>Add Money</Text>
        </TouchableOpacity>
      </View>
      <Image 
        source={require('../../assets/addmoneytowallet/Frame.png')} 
        style={styles.walletImage} 
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  walletContainer: {
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 12,
    // marginVertical: 55,
    height: 160,
  },
  walletContent: {
    flex: 1,
  },
  walletTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'medium',
  },
  walletSubtitle: {
    color: '#fff',
    marginVertical: 5,
    marginBottom: 14,
  },
  walletButton: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    width: 140,
    alignItems: 'center',
    marginBottom: 14,
  },
  walletButtonText: {
    color: '#1A9E75',
    fontWeight: 'bold',
  },
  walletImage: {
    // width: 112,
    // height: 96,
    resizeMode: 'contain',
  },
});

export default AddMoneyWallet;
