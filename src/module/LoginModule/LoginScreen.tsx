import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Image, Input, Icon, CheckBox  } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
interface Screen {
    navigation: any;

  }
const LoginScreen: React.FC<Screen> = () => {
    const navigation = useNavigation();
    const navigateToIndex = () => {
        navigation.navigate('BottomNavigation'); // 'index' should match the name of your index screen in the navigator
      };
      const Gotoregistration = () =>{
        navigation.navigate('Signup');
      }

    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
                <Image source={require('../../Components/Image/logo.png')} style={styles.image} />
            </View>
            <View style={styles.centeredContainer}>
                <Text style={styles.TextHeader}>Login</Text>
            </View>
            <View style={styles.inputContainer}>
             
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
 
                </View>
            </View>

            <LinearGradient
                colors={["#26b5b5", "#4eba83"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.buttonGradient}
            >
                <Pressable
                 onPress={navigateToIndex}
         
                    style={({ pressed }) => [
                        styles.buttonStyle,
                        {
                            backgroundColor: pressed ? '#26b5b5' : 'transparent',
                        },
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={{ color: pressed ? 'white' : 'white', fontSize: 25, fontWeight: '400' }}>
                            Login
                        </Text>
                    )}
                </Pressable>
            </LinearGradient>

            <TouchableOpacity onPress={Gotoregistration}>
                <Text style={styles.loginLink}>
                    New User? Go to <Text style={styles.link}>Register</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

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
        // borderWidth: 1,
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
        marginLeft: 10
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
        marginTop: 80,
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

export default LoginScreen;
