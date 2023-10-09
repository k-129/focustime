import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors'



export const Greetings = () =>{
    return (
        
        <View style={styles.container}>
            <View>
                <Image
                source={require('../../assets/logo.png')}
                style={styles.image}
                resizeMode="contain"
                />
            </View>
            <Text style={styles.title}>Hello Erik!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: spacing.md,
        paddingBottom: spacing.sm
    },
    image: {
        marginTop: spacing.md,
        width: 200, 
        height: 200,

      },
    title:{
        paddingTop: spacing.xl,
        fontSize: fontSizes.xxl,
        color: colors.white
    }
})