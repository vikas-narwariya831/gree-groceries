import {useEffect, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Colors from '../../assets/Colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const TextBox = ({
  icon,
  placeHolder,
  error,
  width,
  password = false,
  onFocus = () => {},
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  return (
    <View>
      <View
        onBlur={() => setIsFocus(false)}
        onFocus={() => {
          onFocus();
          setIsFocus(true);
        }}
        style={{
          padding: 8,
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: isFocus
            ? Colors.darkGreen
            : error
            ? Colors.red
            : Colors.darkGrey,
          borderRadius: 5,
          borderWidth: 1,
          width: width,
        }}>
        <Icons
          name={password ? 'key-variant' : icon}
          style={{fontSize: 26, marginRight: 10}}
        />
        <TextInput
          secureTextEntry={viewPassword ? false : true}
          placeholder={placeHolder}
          style={{fontSize: 18}}
        />
        {password ? (
          <Icons
            name={viewPassword ? 'eye' : 'eye-off'}
            style={{fontSize: 26, marginLeft: 50}}
            onPress={handleViewPassword}
          />
        ) : (
          <></>
        )}
      </View>
      {!error ? (
        <></>
      ) : (
        <Text style={{margin: 3, fontWeight: 700, color: Colors.red}}>
          {error}
        </Text>
      )}
    </View>
  );
};
export default TextBox;
