import React from 'react'
import { FlatList, View ,Text} from 'react-native';
import { Movie } from '../Interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';
interface Props{
    movies:Movie[];
    title?:string;
}
export const HorizontalSlider = ({movies,title}:Props) => {
  return (
    <View style={{backgroundColor:'white',height:250}}>
      {
        title && <Text style={{fontSize:30,fontWeight:'bold'}}>{title}</Text>

      }
        {/* <Text style={{fontSize:30,fontWeight:'bold'}}>{title}</Text> */}
        <FlatList
          data={movies}
          renderItem={({item}:any)=> (
            <MoviePoster movie={item} width={140} height={200}/>
          )}
          keyExtractor={(item)=>item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

      </View>
  )
}
