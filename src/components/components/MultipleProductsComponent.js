import {View,Text,FlatList,Dimensions} from "react-native"

import SingleProductComponent from "../components/SingleProductComponent";

import styles from "./MultipeProductsComponentCss"
const {width, height} = Dimensions.get('window')

export default function MultipleProductsComponent({products})
{  const ShowItem = ({product}) =>{
    
   return <SingleProductComponent data={product}/>
    
}
    return( 
      <View>

      
      <Text style={styles.titleStyle} >Breads & Butter</Text> 
      <FlatList
        data={products}
        horizontal={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ShowItem product={item} />}
        keyExtractor={item => item.id}
      />
      </View>
      )
    
}