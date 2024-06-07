import React from 'react';
import { StyleSheet,Text,View} from 'react-native'

const Header = ({title}) => {
    return(
        <View style={styles.header}>
        <Text  style={styles.headerText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#fff",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        elevation:5,
        shadowOpacity:0.3
      },
      headerText:{
        fontSize:25
      },
});

export default Header;