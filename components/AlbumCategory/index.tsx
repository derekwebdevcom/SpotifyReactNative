import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { AlbumDetails } from '../../types';
import styles from './styles'
import Album from '../Album';

export type AlbumCategoryProps = {
    title: string;
    albums: [AlbumDetails] 
}

const AlbumCategory = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        <FlatList 
         data={props.albums}
         renderItem={({ item }) => <Album album={item} />}
         keyExtractor={( item ) => item.id}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
      />
        </View>
    )
}

export default AlbumCategory;
