import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlbumScreen from "./src/screens/AlbumScreen";
import DetailScreen from "./src/screens/DetailScreen";
import albumData from "./src/json/albums.json";

const Stack=createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Home" 
         component={AlbumScreen}
         options={{
          title:albumData.albumTitle,
          headerStyle:{
            backgroundColor:"#3C3C3C"
          },
          headerTitleStyle:{
            fontWeight:"bold",
            fontSize:20
          },
          headerTintColor:"#fff"
         }}
         />
        <Stack.Screen 
        name="Detail" 
        component={DetailScreen}
        options={({route})=>(
          {
            title:route.params.title,
            headerStyle:{
              backgroundColor:"#3C3C3C"
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight:"bold",
              fontSize:20
            }
          }
         )
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;