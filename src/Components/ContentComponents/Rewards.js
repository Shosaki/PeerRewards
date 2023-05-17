import {StyleSheet, Text, View, Image, FlatList} from 'react-native';

const Rewards = ({DATA, selectedView}) => {
  let displayData =
    selectedView === 2
      ? DATA.filter(
          item =>
            item.rewardFrom === 'Jane Doe' || item.rewardTo === 'Jane Doe',
        )
      : DATA;

  const Item = ({item}) => (
    <View style={styles.item}>
      <Image
        height={50}
        width={50}
        style={{borderRadius: 50}}
        source={{
          uri: item.src,
        }}
      />

      <View style={{marginLeft: 20, marginRight: 60}}>
        <Text style={styles.title}>{item.message}</Text>
        <Text style={[styles.otherText, {marginTop: 15}]}>
          {`${item.rewardTo} Rewarded by ${item.rewardFrom} `}
        </Text>
        <Text style={styles.otherText}>{`${item.rewardTime}`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayData}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Rewards;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  otherText: {
    fontSize: 12,
    fontWeight: '300',
    color: 'gray',
  },
});
