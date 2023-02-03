import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';

const screenHeight = Dimensions.get('screen').height;

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${ movie.poster_path }`;

  const{cast, isLoading, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style = {styles.imageContainer}>
        <View style = {styles.borderImage}>
          <Image
            source={{uri}}
            style = {styles.posterImage}
          />
        </View>
      </View>
      <View style = {styles.marginContainer}>
        <Text style = {styles.title}>{movie.original_title}</Text>
        <Text style = {styles.subTitle}>{movie.title}</Text>
      </View>
      <View style = {styles.marginContainer}>
        <Icon
          name="star-outline"
          size={20}
          color="gray"/>

        <Text style={{fontSize:20,fontWeight:"bold"}}>Idiomas:</Text>
        {
          movieFull && <Text style={{fontSize:15}}>{movieFull.spoken_languages.map((name)=>name.name)+' '}</Text>
        }
        <Text style={{fontSize:20,fontWeight:"bold"}}>Video:</Text>
        {
          movieFull && <Text style={{fontSize:15}}>{ movieFull.video?"Si tiene video":"No tiene video" }</Text>
        }
        <Text style={{fontSize:20,fontWeight:"bold"}}>Actores:</Text>
        <Text style={{fontSize:15}}>{cast.map((name)=>name.name)+' '}</Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    
    imageContainer:{
      // backgroundColor: 'red',
      overflow: 'hidden',
      width: '100%',
      height: screenHeight * 0.7,
      // paddingBottom: 15,
      shadowColor: '#000',
      shadowOffset:{
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    borderImage:{
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage:{
      flex: 1,

    },
    marginContainer:{
      marginHorizontal: 20,
      marginTop: 20,
    },
    subTitle:{
      fontSize: 16,
      opacity: 0.8,
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    
});