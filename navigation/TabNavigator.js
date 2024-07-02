


import React, { useState, useEffect } from 'react';
import { View, Text, Button ,TouchableOpacity} from 'react-native';

// navegacion
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//iconos
import { HomeIcon, SearchIcon, MessageIcon, ProfileIcon, DropboxIcon } from '../assets/icons/icons';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// Views , Components
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadModal from '../components/UploadModal';
import ModalExample from '../components/modal';
import prueba from '../components/upload';
import prueba2 from '../components/otro';
import prueba22 from '../components/seaa';
import LoginScreen from '../screens/LoginScreen';

//Estilos
import tabsStyle from '../style/tabsStyle'
import { Colors } from 'react-native/Libraries/NewAppScreen';




function Mytabs() {   //botones del menu de abajo , inicia primero al ejecutar aplicacion

    const Tab = createBottomTabNavigator(); // crea los botones del menu de abajo
 
  return (
    
    <Tab.Navigator
        initialRouteName="Home"  
        screenOptions={{
            tabBarActiveTintColor:'orange',
            tabBarActiveBackgroundColor:'black',
            tabBarInactiveTintColor: 'red',
            tabBarBadgeStyle:{
                backgroundColor:'blue',
                fontSize:20,
                width:20
            },
            tabBarStyle: {
                backgroundColor: 'lightblue',
                //height:200 // Color de fondo de la barra de pestañas
            }, // aplica el estilo de las etiquetas
        }}
    >

      <Tab.Screen
       name="Home" component={MyStack} 
        options={{
            tabBarLabel:'Inicio',
            tabBarLabelStyle:{
                
                fontSize:10
            },
            tabBarIcon:({color,size})=>(
                <HomeIcon color={color} style={tabsStyle.tabBarIcon} />
            ),
            tabBarBadge:3,
            headerShown:false//desaparece la cabeza
        }}
       />

      <Tab.Screen 
        name="Search" component={SearchStack}
        options={{
            tabBarLabel:'Buscar',
            tabBarIcon:({color,size})=>(
                <SearchIcon color={color} size={size} />
            ),
            tabBarBadge:5,//notificacion numero
            headerShown:false//desaparece la cabeza
        }} 
      />
    
    <Tab.Screen 
        name="mas" component={prueba}
        options={{
            tabBarLabel:'',
            tabBarIcon:({color,size})=>(
                <SearchIcon color={color} size={size} />
            ),
            tabBarBadge:5,//notificacion numero
            headerShown:true//desaparece la cabeza
        }} 
      />
      
      
      <Tab.Screen name="Message" component={MessageScreen} 
         options={{
            tabBarLabel:'Mensajes',
            tabBarIcon:({color,size})=>(
                <MessageIcon color={color} size={size} />
            ),
            tabBarBadge:5,//notificacion numero
            headerShown:true//desaparece la cabeza
        }} 
      />

      <Tab.Screen name="Profile" component={ProfileScreen}
         options={{
            tabBarLabel:'Perfil',
            tabBarIcon:({color,size})=>(
                <ProfileIcon color={color} size={size} />
            ),
            tabBarBadge:5,//notificacion numero
            headerShown:true//desaparece la cabeza
        }} 
      />
     <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarButton: () => null, // Oculta el botón de inicio de sesión en el TabNavigator
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <ProfileIcon color={color} size={size} />, // Puedes cambiar el icono si deseas
          tabBarBadge: 0, // Sin notificación
          headerShown: false,
        }}
      />
    </Tab.Navigator>
    
  );
};



//home
const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    //notificacion numero
                    headerShown:false//desaparece la cabeza
                }} 
            >   
            </HomeStackNavigator.Screen>

            <HomeStackNavigator.Screen
                name="Stack"
                component={UploadModal}
                options={{
                    //notificacion numero
                    headerShown:true,//desaparece la cabeza
                    
                }} 
            >   
            
            
            </HomeStackNavigator.Screen>

            <HomeStackNavigator.Screen
                name="Stack2"
                component={prueba22}
                options={{
                    //notificacion numero
                    headerShown:true,//desaparece la cabeza
                    
                }} 
            >   
            
            
            </HomeStackNavigator.Screen>
            
        </HomeStackNavigator.Navigator>
        
    )
}

//search

const SearchStackNavigator = createNativeStackNavigator();

function SearchStack(){
    return(
        <SearchStackNavigator.Navigator
            initialRouteName="Search"
        >
            
            <SearchStackNavigator.Screen
                name="search"
                component={SearchScreen}
                options={{
                    //notificacion numero
                    headerShown:false//desaparece la cabeza
                }} 
            >   
            </SearchStackNavigator.Screen>

            <SearchStackNavigator.Screen
                name="Detalles"
                component={prueba2}
                options={{
                    //notificacion numero
                    headerShown:true,//desaparece la cabeza
                    
                }} 
            >   
            
            </SearchStackNavigator.Screen>

            
        </SearchStackNavigator.Navigator>
        
    )
}


export default function TabNavigator(){
    
    return(
        <NavigationContainer>
            <Mytabs/>
            
        </NavigationContainer>
    )
}

