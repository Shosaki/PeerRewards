import {Text, View, StyleSheet, Pressable} from 'react-native';

const ToggleBar = ({selectedView, setSelectedView}) => {
  return (
    <View style={{flex: 0.08, flexDirection: 'row'}}>
      <Pressable
        onPress={() => setSelectedView(1)}
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 20,
          backgroundColor: selectedView === 1 ? 'lightgray' : 'white',
        }}>
        <Text
          style={[
            styles.viewTextStyle,
            {color: selectedView === 1 ? 'black' : '#c3c3a2'},
          ]}>
          Feed
        </Text>
      </Pressable>

      <Pressable
        onPress={() => setSelectedView(2)}
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopRightRadius: 20,
          backgroundColor: selectedView === 2 ? 'lightgray' : 'white',
        }}>
        <Text
          style={[
            styles.viewTextStyle,
            {color: selectedView === 2 ? 'black' : '#c3c3a2'},
          ]}>
          My Rewards
        </Text>
      </Pressable>
    </View>
  );
};

export default ToggleBar;

const styles = StyleSheet.create({
  viewTextStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
