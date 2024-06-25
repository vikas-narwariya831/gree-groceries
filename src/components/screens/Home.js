import {View,Text,Dimensions} from "react-native"
import CircleComponent from "../components/CircleComponent"
import MultipleProductsComponent from "../components/MultipleProductsComponent";
import TextBox from "../components/TextBox"
const {width, height} = Dimensions.get('window');


export default function Home()
{   var products=[{productlistid:100,productlistname:'Kissan Fruit Jam',price:240,offer:200,weight:'1kg',image:'kissan.png'},
{productlistid:200,productlistname:'Kissan Fruit Jam',price:20,offer:18,weight:'1kg',image:'lays.png'},
{productlistid:300,productlistname:'Kissan Fruit Jam',price:540,offer:500,weight:'2kg',image:'redlabel.png'},
{productlistid:400,productlistname:'Cadbury Gems',price:40,offer:20,weight:'1kg',image:'gems.png'},
{productlistid:500,productlistname:'Tide',price:440,offer:420,weight:'1kg',image:'Tide.png'}
]
    return(<View>
           <View style={{alignItems:'center',marginVertical:10}}>
            <TextBox width={width*0.94} placeHolder={"Search Products Here..."}  icon={"magnify"}/>
           </View>
        <CircleComponent heading={"Popular Categories"} />
           <View>
            <MultipleProductsComponent   products={products}/>
           </View>

    </View>)
}