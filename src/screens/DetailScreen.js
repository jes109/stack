import React from "react";
import { View ,StyleSheet ,Text, ScrollView ,Image, Button, Linking} from "react-native";

const DetailScreen = ({route}) =>{
    const {title,artist,albumImg,description,price,url}=route.params;
    return(
        <ScrollView>
            <View >
                <Image
                    source={{uri:albumImg}}
                    style={styles.albumImg}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.attention}>Discount Now!</Text>
                <Text style={styles.price}>Price : ${price}</Text>
                <Button 
                    onPress={()=>Linking.openURL(url)}
                    title="Buy now!"
                />
            </View>
            <View style={[styles.container,{paddingBottom:50}]}>
                <Text>
                    <Text style={styles.title}>Artist : </Text>
                    {artist}
                </Text>
                <Text>
                    <Text style={styles.title}>Song : </Text>
                    {title}
                </Text>
                <Text style={styles.title}>Description: </Text>
                <Text>{'\t'}{description}</Text>
            </View>
        </ScrollView>
    );}

const styles=StyleSheet.create({
    price:{
        fontWeight:"bold",
        fontSize:35,
        textAlign:"center",
        margin:10,
    },
    attention:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:25,
        color:"#F52F57",
        margin:10,
    },  
    title:{
        fontWeight:"bold",
        lineHeight:20
    },
    albumImg:{
        height:200,
    },
    container:{
        borderRadius:10,
        padding:20,
        margin:10,
        backgroundColor:"white",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
    }
    });

export default DetailScreen;