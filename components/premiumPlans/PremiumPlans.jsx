import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Arrow from '../../assets/arrow_right_alt.png';
// import ThreeCar from '../../assets/premiumPlans/threeCar.png';
// import SingleCar from '../../assets/premiumPlans/singleCar.png';

const plans = [
  {
    title: 'Monthly Parking',
    subtitle: 'Dedicated parking available near you.',
    buttonText: 'Explore Now',
    gradientColors: ['#48C9A1', '#199E75'],
    picture: require('../../assets/premiumPlans/threeCar.png'),
  },
  {
    title: 'Elite Car Wash',
    subtitle: 'Elite car grooming at your doorstep.',
    buttonText: 'Explore Now',
    gradientColors: ['#48C9A1', '#199E75'], // Using a solid color instead of a gradient for simplicity
    picture: require('../../assets/premiumPlans/singleCar.png'),
  },
];

const PremiumPlans = () => {
  return (
    <View>
      <Text style={styles.premiumHeading}>Premium Plans</Text>
      <View style={styles.plansContainer}>
        {plans.map((plan, index) => (
          <View key={index} style={styles.planItem}>
            <LinearGradient colors={plan.gradientColors} style={styles.gradientBackground}>
              <Text style={styles.planTitle}>{plan.title}</Text>
              <Text style={styles.planSubtitle}>{plan.subtitle}</Text>
              <TouchableOpacity style={styles.planButton}>
                <Text style={styles.planButtonText}>{plan.buttonText}</Text>
                <Image source={Arrow} style={styles.arrowIcon}/>
                <TouchableOpacity style={styles.planinsideButton}>
                <Image source={plan.picture} style={index === 0 ? styles.picIconFirst : styles.picIcon} />
                </TouchableOpacity>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  premiumHeading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '400',
    color: '#393939',
    marginLeft: 24,
  },
  plansContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 12,
  },
  planItem: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  gradientBackground: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
  },
  planTitle: {
    color: '#FBFF29',
    fontSize: 16,
    fontWeight: 'bold',
  },
  planSubtitle: {
    color: '#fff',
    fontSize: 10,
    marginVertical: 5,
  },
  planButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    width: 95,
    height: 30,
  },
  planButtonText: {
    color: '#333',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 10,
  },
  arrowIcon: {
    alignItems: 'center',
    marginLeft: 2,
    // marginTop: 3,
    // width: 25,
  },
  planinsideButton: {
    width: '110%', 
    // height: 122,
  },
  picIcon: {
    marginTop: -11,
    marginLeft: 11,
    width: '110%', 
    resizeMode: 'contain', 
    // height: 122,
  },
  picIconFirst: {
    marginTop: -95,
    resizeMode: 'contain', 
    width: '70%',
    marginLeft: 21, 
  }
});

export default PremiumPlans;
