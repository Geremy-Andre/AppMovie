import {useNavigation} from '@react-navigation/native'
import React, { useEffect } from 'react'
import Carousel from 'react-native-snap-carousel';
import { Button, View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWith } = Dimensions.get("window")

export const HomeScreen = () => {

    const { nowPlaying, isLoading, popular, topRate, upcoming } = useMovies();
    const { top } = useSafeAreaInsets()

    if(isLoading) {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color = 'red' size = {100} />
            </View>
        )
    }

  return (
    <ScrollView>
        <View style = {{marginTop:top+20}}>

        {/* Carrusell principal */}

        <View style = {{height: 440}}>
         <Carousel
              data={nowPlaying}
              renderItem={({item}):any => <MoviePoster movie = { item } />}
              sliderWidth={windowWith}
              itemWidth={300}
              inactiveSlideOpacity = { 0.9 }
        />
        </View>

        {/* Peliculas populares */}
        {/* <HorizontalSlider title='En cine' movies = {peliculasEnCine }/> */}
        <HorizontalSlider title='Populares' movies = {popular}/>
        <HorizontalSlider title='Top Rated' movies = {topRate}/>
        <HorizontalSlider title="Up Coming" movies= {upcoming}/>

        </View>
    </ScrollView>
  )
}
