import {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import InfoBar from '../Components/InfoBar';
import Content from '../Components/Content';
const Home = () => {
  const [newReward, setNewReward] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <InfoBar amount={newReward.amount} style={styles.infoBar} />
      <Content newReward={newReward} setNewReward={setNewReward} />
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoBar: {
    flex: 0.2,
  },
});
