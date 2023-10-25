
 import React,{useState} from 'react';
 import { View, StyleSheet, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Image, Input, Icon, CheckBox  } from '@rneui/themed';
 import LinearGradient from 'react-native-linear-gradient';
// // import { CheckBox } from '@react-native-community/checkbox';
 import BouncyCheckbox from 'react-native-bouncy-checkbox';
// import SquareBoxIcon from '../../Components/SquareBoxIcon';


interface Screen {
      navigation: any;
    }
const RegistrationScreen: React.FC<Screen>  = ({navigation}) => {
  const [isSelected, setSelection] = useState<boolean>(false);
      const navigateToLogin = () => {
           navigation.navigate('Login');
       };
  return (
    <View style={styles.container}>
      <View style={styles.centeredContainer}>
        <Image source={require('../../Components/Image/logo.png')} style={styles.image} />
      </View>
      <View style={styles.centeredContainer}>
        <Text style={styles.TextHeader}>Registration</Text>
      </View>
      {/* Add your input fields, checkboxes, and buttons here */}
      <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Full Name"
                    style={styles.inputField}
                    underlineColorAndroid="transparent" // Remove underline
                />
                <TextInput
                    placeholder="Gender"
                    style={styles.inputField}
                    underlineColorAndroid="transparent" // Remove underline
                />
                   <TextInput
                    placeholder="Address"
                    style={styles.inputField}
                    underlineColorAndroid="transparent" // Remove underline
                />
                <TextInput
                    placeholder="Email"
                    style={styles.inputField}
                    underlineColorAndroid="transparent" // Remove underline
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={styles.inputField}
                />
                    <View style={styles.acceptTermsContainer}>
                 <BouncyCheckbox
  size={25}
  fillColor="blue"
  unfillColor="#FFFFFF"
  text="Accept tearms and Conditions"
//   iconComponent="SquareBoxIcon"
  iconStyle={{ borderColor: "" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}
  onPress={(isChecked: boolean) => {}}
/>
                 </View>

                </View>

                <LinearGradient
                colors={["#26b5b5", "#4eba83"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.buttonGradient}
            >
                <Pressable
                onPress={navigateToLogin}
                    style={({ pressed }) => [
                        styles.buttonStyle,
                        {
                            backgroundColor: pressed ? '#26b5b5' : 'transparent',
                        },
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={{ color: pressed ? 'white' : 'white', fontSize: 25, fontWeight: '400' }}>
                            Sign In
                        </Text>
                    )}
                </Pressable>
            </LinearGradient>
            <TouchableOpacity>
                <Text style={styles.loginLink}>
                    Don't have an account? <Text style={styles.link}>Sign In</Text>
                </Text>
             </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centeredContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  inputField: {
    borderRadius: 20,
    borderColor: 'gray',
    marginBottom: 10,
    width: '90%',
    padding: 12,
    backgroundColor: '#f0f0f0',
  },
  acceptTermsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  acceptTermsText: {
    marginLeft: 10,
    fontSize: 16,
  },
  checkbox: {
    marginRight: 10,
  },
  buttonGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 390,
    height: 60,
    marginTop: 20,
    marginLeft: 10,
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 140,
    height: 100,
  },
  TextHeader: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  loginLink: {
    marginTop: 40,
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  link: {
    color: '#26b5b5',
    fontWeight: '400',
    fontSize: 16,
  },
  label: {
    margin: 8,
  },
});
