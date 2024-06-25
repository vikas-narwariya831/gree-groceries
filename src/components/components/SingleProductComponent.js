import {ScrollView, View,Text,Dimensions,Image} from "react-native"
import { ServerURL } from "../services/ServerServices";
import Colors from "../../assets/Colors";
import Button from "./Button";
import PlusMinusButton from "./PlusMinusButton";
const {width, height} = Dimensions.get('window');
export default function SingleProductComponent({data})
{
  return(<View style={{margin:10}} >
         <View style={{alignItems:'center',borderColor:'#a4b0be',borderWidth:1,width:width*0.4,height:height*0.3,borderRadius:10}}> 
         <Image
          style={{resizeMode: 'contain', width: 100, height: 100}}
          source={{uri:`${ServerURL}/images/${data.image}`}}
        />
        <Text style={{marginVertical:5,fontWeight:'bold'}}>{data.productlistname} {data.weight} </Text> 
        <View style={{justifyContent:'flex-start',width:width*0.3}}>
        <Text style={{color:Colors.red,fontWeight:'bold',textDecorationLine:'line-through'}}>&#8377; {data.price}</Text> 
        <Text style={{color:Colors.black,fontWeight:'bold'}}>&#8377; {data.offer}</Text> 
        <Text style={{color:Colors.darkGreen,fontWeight:'bold'}}>Save &#8377; {data.price-data.offer}</Text> 
        <View style={{marginVertical:10}}>
        <PlusMinusButton title={"ADD"} bgColor={Colors.black} foreColor={Colors.white} />
        </View> 
        </View>
        
        
         </View>
  </View>)

}
