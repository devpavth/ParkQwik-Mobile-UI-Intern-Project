import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const deals = [
  {
    title: 'Recharge FASTag',
    subtitle: '& Get petrol worth ₹ 30',
    buttonText: 'Recharge Now',
    colors: ['#8D67F9', '#6836F2'],
  },
  {
    title: 'Get 25% off on',
    subtitle: 'your first car wash',
    buttonText: 'Book Now',
    colors: ['#41DE76', '#1CB053'],
  },
  {
    title: 'Get 10% Cashback',
    subtitle: 'on toll payments',
    buttonText: 'Save Now',
    colors: ['#F95AE9', '#EF26DC'],
  },
];

const DealsForYou = () => {
  return (
    <View>
      <Text style={styles.dealHeading}>Deals For You</Text>
      <View style={styles.dealsContainer}>
        {deals.map((deal, index) => (
          <LinearGradient
            key={index}
            colors={deal.colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.dealItem}
          >
            <Text style={styles.dealTitle}>{deal.title}</Text>
            <Text style={styles.dealSubtitle}>{deal.subtitle}</Text>
            <TouchableOpacity style={styles.dealButton}>
              <Text style={styles.dealButtonText}>{deal.buttonText}</Text>
            </TouchableOpacity>
          </LinearGradient>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dealHeading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'heavy',
    color: '#393939',
    marginLeft: 24,
  },
  dealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 12,
    width: 542,
    height: 150,
  },
  dealItem: {
    flex: 1,
    borderRadius: 14,
    padding: 15,
    marginHorizontal: 5,
  },
  dealTitle: {
    color: '#FBFF35',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dealSubtitle: {
    color: '#fff',
    marginVertical: 5,
    fontSize: 12,
    marginBottom: 15,
  },
  dealButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    alignItems: 'center',
    // width: 82,
  },
  dealButtonText: {
    color: '#333',
    fontWeight: 'bold',
    // width: 82,
  },
});

export default DealsForYou;
