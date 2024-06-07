import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity,Image} from 'react-native'
import { Navigation } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native"

const AlbumDetail = ({album,navigation}) => {
    return(
        <View style={styles.cardContainer}>
        <View style={styles.thumbnailContainer}>
            <Image 
                source={{uri:album.thumbnailImg}} 
                style={styles.authorumImg}
            />
            <View style={styles.albumInfo}>
                <Text style={styles.songName}>{album.title}</Text>
                <Text style={styles.authorName}>{album.artist}</Text>
            </View>
        </View>
        <View style={styles.imgSection}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Detail',album)}
          >
            <Image
                source={{uri:album.albumImg}}
                style={styles.albumImg}
            />
          </TouchableOpacity>
        </View>
    </View>
    );
}

const styles=StyleSheet.create({
    thumbnailContainer:{
      flexDirection:"row",
      justifyContent:"flex-start",
      padding:5,padding:5,
      borderBottomWidth:2,
      borderColor:"darkgray"
    },
    cardContainer:{
      backgroundColor : "#fff",
      shadowColor:"black",
      shadowOffset:{width:0,height:2},
      elevation:8,
      shadowOpacity:0.3,
      margin:10,
      borderRadius:20
    },
    authorumImg:{
      width:50,
      height:50,
      borderRadius:25,
      borderColor:"#ddd",
      borderWidth:2
    },
    albumInfo:{
      justifyContent:"space-around",
      marginLeft:10
    },
    albumImg:{
      height:300,
      width:null,
      borderRadius:20
    },
    imgSection:{
      padding:5,
    },
    songName:{
      fontSize:20
    },
    authorName:{
    }
  });

export default AlbumDetail;