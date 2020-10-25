import React from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity,StatusBar} from 'react-native';
//import { Feather } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles'
import ImagePicker from 'react-native-image-picker';
import { Checkbox} from 'react-native-paper';

interface handlerCreateImages{
    data:string
}


export default function OrphanageData() {
    const [checkedCompra, setCheckedCompra] = React.useState(false);
    const [checkedRegria, setCheckedRegria] = React.useState(false);
    const [images,setImages] = React.useState<string[]>([])


 

  

  return (

    <>
         <StatusBar backgroundColor="#15c3d6"/>
    
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
        
            <Text style={styles.title}>Propriedade</Text>

            <Text style={styles.label}>Nome da propriedade</Text>
            <TextInput
                style={styles.input}
            />

            <Text style={styles.label}>Qual tipo de produção</Text>
            <View>
                <Checkbox.Item label="Compra e venda" status={checkedCompra ?'checked':'unchecked'} onPress={() => setCheckedCompra(!checkedCompra)} labelStyle={styles.label} />
                <Checkbox.Item label="Recriador" status={checkedRegria ?'checked':'unchecked'} onPress={() => setCheckedRegria(!checkedRegria)}  labelStyle={styles.label}/>
            </View>

            <Text style={styles.label}>Hectares</Text>
            <TextInput 
                
                style={styles.input}
                keyboardType={'numeric'}
            
            />

            <Text style={styles.label}>Fotos</Text>
            <TouchableOpacity style={styles.imagesInput} onPress={() => ImagePicker.showImagesPicker({},handlerCreateImages())}>
                <Feather name="plus" size={24} color="#15B6D6"/>
            </TouchableOpacity>

            <RectButton style={styles.nextButton} onPress={() => {}}>
                <Text style={styles.nextButtonText}>Cadastrar</Text>
            </RectButton>
        </ScrollView>
    </>
  )
}
