import { StyleSheet, Linking, Pressable, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckBox from '../components/Checkbox';

export default function Plan1({ navigation }: RootStackScreenProps<'Grade1'>) {

    const [pressed1, setPressed1] = useState(false);
    const [pressed2, setPressed2] = useState(false);
    const [pressed3, setPressed3] = useState(false);
    return (
        <ScrollView style={styles.containerBox} contentContainerStyle={styles.container}>
            <Text style={styles.title}>Your Grade 1 Action Plan</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            
            <View style={styles.box}>
                <Text style={styles.text}>Take a minute to</Text>
                <Text style={styles.emphasis}>stop and breathe!</Text>
                <Text style={styles.text}>Breathe in for 3 counts,</Text>
                <Text style={styles.text}>and breathe out for 6 counts.</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.box}>
                
                <Text style={styles.emphasis}>Here are your action items for today:</Text>
                <CheckBox title="random 1" onPress={() => setPressed1(!pressed1)} isChecked={pressed1} textStyle={styles.checklist}/>
                <CheckBox title="random 2" onPress={() => setPressed2(!pressed2)} isChecked={pressed2} textStyle={styles.checklist}/>
                <CheckBox title="random 3" onPress={() => setPressed3(!pressed3)} isChecked={pressed3} textStyle={styles.checklist}/>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            

            {/* <Button title="Done!" onPress={() => navigation.navigate('NotFound')}/> */}
            <Pressable style={styles.button} onPress={() => navigation.navigate('Congrats')}>
                <Text style={styles.emphasis}>Done!</Text>
            </Pressable>

        </ScrollView>
            
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingBottom: 70,
        flex: 1,
    },
    containerBox: {
        marginHorizontal: 10,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 20,
      height: 1,
      width: '80%',
    },
    text: {
        fontSize: 19,
        fontWeight: 'normal',
    },
    emphasis: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    checklist: {
        color: '#fff',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#ADD8E6',
        padding: 10,
        borderRadius: 10,
    },
    box: {
        backgroundColor: '#FCFAA6',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
    }
})