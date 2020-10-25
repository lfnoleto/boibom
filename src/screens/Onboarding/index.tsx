import React from 'react'
import {Image, View,Button,TouchableOpacity,Text} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import LoginImage from '../../images/login.png'
import {useNavigation} from'@react-navigation/native'

const Skip = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal:8}} {...props}>
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
)

const Next = ({...props}) => ( 
    <TouchableOpacity style={{marginHorizontal:8}} {...props}>
        <Text style={{fontSize:16}}>Continuar</Text>
    </TouchableOpacity>)

const Done= ({...props}) => (
        <TouchableOpacity style={{marginHorizontal:8}} {...props}>
            <Text style={{fontSize:16}}>Fim</Text>
        </TouchableOpacity>
    )




const OnboardingScreen = ()=> {
   
    const navigation = useNavigation();


    return(
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
                    title:"Onboardng",
                    subtitle:"Teste Onboarding Swiper"
                },
                {
                    backgroundColor:"#fff",
                    image:<Image source={LoginImage}/>,
                    title:"Onboardng",
                    subtitle:"Teste Onboarding Swiper"
                }
            ]}
        
        />
    )
}

export default OnboardingScreen;