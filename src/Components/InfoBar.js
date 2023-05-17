import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const InfoBar = ({amount, style}) => {
  const [givenAmount, setGivenAmount] = useState(100);

  useEffect(() => {
    if (Number.isFinite(Number(amount)))
      setGivenAmount(prevProps => Number(prevProps) + Number(amount));
  }, [amount]);

  return (
    <View
      style={{
        ...style,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f2ec',
      }}>
      <View
        style={{
          marginLeft: 15,
        }}>
        <Image
          height={80}
          width={80}
          style={{borderRadius: 50}}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1',
          }}
        />
      </View>

      <View
        style={{
          marginLeft: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            color: 'black',
          }}>
          Jane Doe
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: 'black',
          }}>
          Given <Text style={{fontWeight: '800'}}> ${givenAmount} </Text>/
          Received <Text style={{fontWeight: '800'}}> $250</Text>
        </Text>
      </View>
    </View>
  );
};
export default InfoBar;
