import React from 'react'
import {Image,TouchableOpacity,Text,StyleSheet,StatusBar} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import LoginImage from '../../images/logo.png'
import cenaMundo from '../../images/Ilustra01.png'
import {useNavigation} from'@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Skip = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal:8}} {...props}>
        <Text style={{fontSize:16}}></Text>
    </TouchableOpacity>
)

const Next = ({...props}) => ( 
    <TouchableOpacity style={styles.createBottom} {...props}>
        <MaterialCommunityIcons name='arrow-right-circle'size={35} color='#15c3d6'/>
    </TouchableOpacity>)

const Done= ({...props}) => (
        <TouchableOpacity style={{marginHorizontal:8}} {...props}>
            <MaterialCommunityIcons name='arrow-right-circle'size={35} color='#15c3d6'/>
        </TouchableOpacity>
    )




const OnboardingScreen = ()=> {
   
    const navigation = useNavigation();


    return(
        <>
            <StatusBar backgroundColor='#15c3d6'/>
            <Onboarding
                SkipButtonComponent={Skip}
                NextButtonComponent={Next}
                DoneButtonComponent={Done}

                onSkip={() => navigation.navigate('Login')}
                onDone={() => navigation.navigate('Login')}
            

            
                pages={[
                    {
                        backgroundColor:"#fff",
                        image:<Image source={LoginImage}/>,
                        title:"Seja Bem-vindo(a)",
                        subtitle:"ao Boi Bom!",
                        titleStyles:{color:"#15c3d6"},
                        subTitleStyles:{color:"#15c3d6", fontSize:22}
                    },
                    {
                        backgroundColor:"#fff",
                        image:<Image source={cenaMundo}/>,
                        title:"Execute manejos de forma simples",
                        subtitle:"Agroconnect",
                        titleStyles:{color:"#15c3d6", padding:15, fontSize:35},
                        subTitleStyles:{color:"#15c3d6", paddingTop:20, fontSize:20}
                    }
                ]}
            
            />
        </>
    )
}


const styles = StyleSheet.create({
 
    createBottom:{

        width:56,
        height:56,
        
        borderRadius:20,

        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:8
    
    },
    
})



export default OnboardingScreen;