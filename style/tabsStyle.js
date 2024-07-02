// tabStyles.js
import { StyleSheet } from 'react-native';

const tabsStyles = StyleSheet.create({
    tabBar: {
      backgroundColor: 'black', // color de fondo de la barra de pestañas
    },
    tabBarLabel: {
      fontSize: 120, // tamaño de fuente de las etiquetas
      fontWeight: 'bold', // peso de la fuente
    },
    tabBarIcon: {
      fontSize:40,
      
    },
    tabBarBadge: {
      backgroundColor: 'red', // color de fondo del distintivo
      color: 'white', // color del texto del distintivo
      fontSize: 10, // tamaño de fuente del distintivo
      fontWeight: 'bold', // peso de la fuente del distintivo
    },
  });
    
  export default tabsStyles;