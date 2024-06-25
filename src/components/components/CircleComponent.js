import {ScrollView, View,Text,Dimensions,Image} from "react-native"
import { ServerURL } from "../services/ServerServices";
import Colors from "../../assets/Colors";
const {width, height} = Dimensions.get('window');
export default function CircleComponent({heading})
{  
   const colorList=['#dff9fb','#f6e58d','#7ed6df','#f3a683','#f8a5c2'] 
    const category=[{categoryid:1,image:"kissan.png",name:'Kissan'},{categoryid:2,image:"gems.png",name:'Gems'},{categoryid:3,image:"redlabel.png",name:"Red Label"},{categoryid:1,image:"kissan.png",name:'Kissan'},{categoryid:2,image:"gems.png",name:'Gems'},{categoryid:3,image:"redlabel.png",name:"Red Label"}]
   const showCategory=()=>{
    return category.map((item)=>{
        
    return (<View style={{justifyContent:'center',alignItems:'center'}}><View style={{margin:4,justifyContent:'center',alignItems:'center', backgroundColor:colorList[parseInt(Math.random()*colorList.length)], width:100,height:100,borderRadius:50}}>

         <Image
          style={{resizeMode: 'contain', width: 60, height: 60}}
          source={{uri:`${ServerURL}/images/${item.image}`}}
        />
          
    </View>
    <Text>{item.name}</Text>
    </View>)})

   }  
   
   return(
   <View>
    <Text style={{marginLeft:10,marginVertical:10,fontWeight:'bold',color:Colors.black}} >{heading}</Text>
   <View style={{flexDirection:'row'}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       {showCategory()}
       </ScrollView>   
    </View>
    </View>)
}