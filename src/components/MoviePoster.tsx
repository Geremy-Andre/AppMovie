import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import { Movie } from '../Interfaces/MoveInterfaces';
interface Props{
    movie:Movie;
    height?:number;
    width?:number
}

export const MoviePoster = ({movie,height=420,width=250}:Props) => {
    const uri=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    
    
    
  return (
    <View
        style={{
            width,
            height,
            marginHorizontal:8

        }}
    >
        <View style={styles.imageContainer}>
            <Image
                source={{uri}}
                style={styles.image}
            />
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18,

    },
    imageContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.48,

        elevation: 5,
    }
})