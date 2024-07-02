import { StyleSheet, Dimensions } from 'react-native';

const { height: viewportHeight } = Dimensions.get('window');

export default StyleSheet.create({
    
    carouselContainer: {
      
      backgroundColor:'orange'
    },
    videoContainer: {
      height: viewportHeight,
      
      backgroundColor: 'blue',
      
    },
    videoWrapper: {
      width: '100%',
      height: '100%',
      backgroundColor:'black',
      
    },
    video: {
        width: '100%',
        height:'100%',
        
      
    },
    informacion:{
      backgroundColor:'transparent',
      position:'absolute',
      top:'91%',
      marginLeft:2,
      
    },
    informa_inter:{
      marginLeft:10,
      backgroundColor:'transparent',
      position:'relative'
    },
    iconWrapper: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 50,
      width: 70,
      height: 70,
    },
    titulo:{
      fontWeight:'bold',
      fontSize:16,
      color:'white'
    },
    subtitu:{
      color:'white'
    },
    informacion_usuario:{
        backgroundColor:'red',
        width:'100%',
        position:'absolute',
        
    },

    subida_video:{
      backgroundColor:'white',
      height:700,
      justifyContent:'center',
      alignItems:'center'
    },

    interno_subida:{
      backgroundColor:'transparent',
      width:'80%'
    },
    texf:{
      backgroundColor:'gray',
      color:'white',
      padding:10,
      borderRadius:18,
      
      borderColor:'black'
    },

    botones1:{
      marginTop:10,
      borderRadius:20,
      
      
    },
    titulo2:{
      fontWeight:'bold',
      fontSize:16,
      color:'black'
    },

    titulo3:{
      textAlign:'center',
      fontSize:20,
      padding:10
    },



    //login
    navigation:{
      backgroundColor:'orange'
    }



  });