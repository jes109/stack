import React from "react";
import { Navigation } from "@react-navigation/native-stack";
import { StyleSheet,View ,FlatList} from "react-native";
import Header from "../components/Header";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";

const AlbumScreen = ({navigation}) =>{
    return(
        <View style={{flex:1}}>
            <FlatList
                data={albumData.albumList}
                renderItem={({item})=>
                    <AlbumDetail 
                        album={item}
                        navigation={navigation}
                    />}
                keyExtractor={(item)=>item.title}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    });

export default AlbumScreen;