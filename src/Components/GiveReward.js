import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
const GiveReward = ({setGiveRewardPopupShown, setNewReward}) => {
  const onChangeText = (fieldName, value) => {
    switch (fieldName) {
      case 'toName':
        setLocalFormData({
          ...localFormData,
          localToName: {...localFormData.localToName, value: value},
        });
        break;
      case 'amount':
        setLocalFormData({
          ...localFormData,
          localAmount: {...localFormData.localAmount, value: value},
        });
        break;
      case 'message':
        setLocalFormData({
          ...localFormData,
          localMessage: {...localFormData.localMessage, value: value},
        });
        break;
    }
  };

  const initialFormData = {
    localToName: {value: '', error: ''},
    localAmount: {value: 0, error: ''},
    localMessage: {value: '', error: ''},
  };
  const [localFormData, setLocalFormData] = useState(initialFormData);

  return (
    <KeyboardAvoidingView
      // keyboardVerticalOffset={-100}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Text
          style={[
            styles.mainTitle,
            {
              marginBottom: 10,
            },
          ]}>
          Give reward
        </Text>
        <Text style={styles.inputTitle}>To</Text>
        <TextInput
          editable
          maxLength={40}
          onChangeText={text => onChangeText('toName', text)}
          value={localFormData.localToName.value}
          inputStyle={{color: 'white'}}
          style={[
            styles.textInput,
            {marginBottom: localFormData.localToName.error !== '' ? 14 : 7},
          ]}
        />
        <Text style={styles.errorText}>{localFormData.localToName.error}</Text>

        <Text style={styles.inputTitle}>Amount</Text>
        <TextInput
          editable
          maxLength={40}
          onChangeText={text => onChangeText('amount', text)}
          value={localFormData.localAmount.value}
          style={[
            styles.textInput,
            {marginBottom: localFormData.localAmount.error !== '' ? 14 : 7},
          ]}
        />
        <Text style={styles.errorText}>{localFormData.localAmount.error}</Text>

        <Text style={styles.inputTitle}>Message</Text>
        <TextInput
          editable
          multiline
          placeHolder={'doiajdj'}
          placeholderTextColor={'red'}
          numberOfLines={2}
          maxLength={80}
          onChangeText={text => onChangeText('message', text)}
          value={localFormData.localMessage.value}
          style={[
            styles.textInput,
            {
              height: 110,
              marginBottom: localFormData.localMessage.error !== '' ? 14 : 7,
            },
          ]}
          returnKeyType={Platform.OS === 'ios' ? 'done' : 'done'}
        />
        <Text style={styles.errorText}>{localFormData.localMessage.error}</Text>
      </View>

      <Pressable
        onPress={() => {
          if (
            localFormData.localToName.value.length > 0 &&
            localFormData.localAmount.value > 0 &&
            localFormData.localMessage.value.length > 0
          ) {
            // No Error
            let newReward = {
              message: localFormData.localMessage.value,
              rewardTo: localFormData.localToName.value,
              amount: localFormData.localAmount.value,
            };
            setNewReward(newReward);
            setGiveRewardPopupShown(false);
          } else {
            let Error1 = '';
            let Error2 = '';
            let Error3 = '';

            if (localFormData.localToName.value.length == 0)
              Error1 = 'Please enter valid To Name';
            else Error1 = '';

            if (
              localFormData.localAmount.value <= 0 ||
              !Number.isFinite(Number(localFormData.localAmount.value))
            )
              Error2 = 'Please enter valid Amount';
            else Error2 = '';

            if (
              localFormData.localMessage.value.length == 0 ||
              localFormData.localMessage.value !== ''
            )
              Error3 = 'Please enter valid Message';
            else Error3 = '';

            setLocalFormData({
              ...localFormData,
              localToName: {...localFormData.localToName, error: Error1},
              localAmount: {...localFormData.localAmount, error: Error2},
              localMessage: {...localFormData.localMessage, error: Error3},
            });
          }
        }}
        style={{
          height: 50,
          width: 300,
          marginTop: 10,
          borderRadius: 30,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
          Give
        </Text>
      </Pressable>

      <Pressable
        onPress={() => setGiveRewardPopupShown(false)}
        style={{
          height: 50,
          width: 300,
          marginTop: 20,
          borderRadius: 30,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: 'red', fontSize: 18, fontWeight: '500'}}>
          Cancel
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
export default GiveReward;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 23,
    color: 'white',
  },
  inputTitle: {
    fontSize: 16,
    marginLeft: 15,
    color: '#b38600',
  },
  textInput: {
    height: 55,
    padding: 0,
    marginTop: 7,
    marginBottom: 20,
    marginHorizontal: 15,
    borderWidth: 1,
    color: '#b38600',
    borderColor: '#b38600',
  },
  errorText: {
    fontSize: 12,
    marginLeft: 15,
    color: 'red',
  },
});
