
import React from 'react'
import { View , Text, Button, ActivityIndicator, Dimensions} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies'
import Carousel from 'react-native-snap-carousel';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width:windowWith}= Dimensions.get("window")

export const HomeScreen = () => {
  const{peliculasEnCine,isLoading}= useMovies();
  const{top}=useSafeAreaInsets();
 if(isLoading){
  return(
    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
      <ActivityIndicator color='red'size={100} />
    </View>
  )

 }
  
  return (
    <ScrollView>
      <View style={{marginTop:top+20}}>
      <View style={{height:440,width:250,}}>
        <Carousel
              data={peliculasEnCine}
              renderItem={({item}:any)=><MoviePoster movie={item}/>}
              sliderWidth={windowWith}
              itemWidth={300}
            />
      </View>
      <HorizontalSlider title='Peliculas1' movies={peliculasEnCine} />
      <HorizontalSlider title='Peliculas2' movies={peliculasEnCine} />
    </View>
    </ScrollView>

  )
}
