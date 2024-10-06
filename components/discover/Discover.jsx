import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import BuyFastag from '../../assets/discover/shopping_bag.png';
import ReplaceFastag from '../../assets/discover/published_with_changes.png';
import ActiveFastag from '../../assets/discover/done_all.png';
import CloseFastag from '../../assets/discover/scan_delete.png';

const discoverOptions = [
  { name: 'Buy FASTag', icon: BuyFastag },
  { name: 'Replace FASTag', icon: ReplaceFastag },
  { name: 'Activate FASTag', icon: ActiveFastag },
  { name: 'Close FASTag', icon: CloseFastag },
];

const Discover = () => {
  return (
    <View style={styles.discoverContainer}>
        <Text style={styles.discoverHeading}>Discover</Text>
      <FlatList
        data={discoverOptions}
        numColumns={4}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.discoverItem}>
            <Image source={item.icon} style={styles.discoverIcon} />
            <Text style={styles.discoverText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  discoverContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 15,
    marginHorizontal: 12,
  },
  discoverHeading: {
    fontSize: 18,
    marginBottom: 12,
    // fontWeight: 500,
    color: '#393939',
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
  },
  discoverItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  discoverIcon: {
    // width: 40, 
    // height: 40, 
    resizeMode: 'contain',
  },
  discoverText: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
  },
});

export default Discover;