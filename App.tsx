import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './components/header/Header';
import Services from './components/services/Services';
import FASTagRecharge from './components/fastagrecharge/FASTagRecharge';
import Discover from './components/discover/Discover';
import AddMoneyWallet from './components/addmoneytowallet/AddMoneyWallet';
import DotSlider from './components/dotSlider/DotSlider';
import Others from './components/others/Others';
import DealsForYou from './components/dealsForYou/DealsForYou';
import GonnaTravel from './components/gonnaTravel/GonnaTravel';
import PremiumPlans from './components/premiumPlans/PremiumPlans';
import RechargeBillPayments from './components/rechargeBillPayments/RechargeBillPayments';
import FASTagRechargeCard from './components/fastagRechargeCard/FASTagRechargeCard';
import CarCenter from './components/carCenter/CarCenter';
import Trending from './components/trending/Trending';
import ExclusiveOffers from './components/exclusiveOffers/ExclusiveOffers';
import HowParkqwikWorks from './components/howParkqwikWorks/HowParkqwikWorks';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Services />
        <FASTagRecharge />
        <Discover />
        <AddMoneyWallet />
        <DotSlider />
        <Others />
        <DealsForYou />
        <GonnaTravel />
        <PremiumPlans />
        <RechargeBillPayments />
        <FASTagRechargeCard />
        <CarCenter />
        <Trending />
        <ExclusiveOffers />
        <HowParkqwikWorks />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFA',
  },
});

export default App;