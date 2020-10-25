import React,{useState,useEffect} from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Onboarding from './screens/Onboarding/index';
import Login from './screens/Login/index';
import AsyncStorege from '@react-native-community/async-storage'
import { Node } from 'react-native-reanimated';
import Cadastrar from '../src/screens/Cadastro/index'
const Stack = createStackNavigator()

export default function app(){

	  
	const [inFirstLouch,setInsFirsLouch] = useState<boolean>()

	useEffect(() =>{

		AsyncStorege.getItem('alreadyLaunched').then(value => {
			if(value==null){
				AsyncStorege.setItem('alreadyLaunched','true')
				setInsFirsLouch(true)

			}else{
				setInsFirsLouch(false)

			}
		})

	},[])

	if(inFirstLouch===null){
		return null
	}else if(inFirstLouch===true){
		return(
			<NavigationContainer >
				<Stack.Navigator initialRouteName='Onboarding' headerMode='none' >
					<Stack.Screen  name = 'Onboarding' component={Onboarding}/> 
					<Stack.Screen name = 'Login' component={Login}/>
					<Stack.Screen name = 'Signer' component={Cadastrar}/>

				</Stack.Navigator>
    		</NavigationContainer>

		)
	}else{
		return (<Cadastrar/>)
	}
}