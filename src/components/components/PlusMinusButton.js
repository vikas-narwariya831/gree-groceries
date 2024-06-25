import React from "react";
import { View, Text, TouchableOpacity, } from "react-native"
import Button from "./Button";
import { useState } from "react";
import Colors from "../../assets/Colors";
 

export default function PlusMinusButton({ onPress = () => { }, width, bgColor, foreColor, height }) {

    const [values, setValues] = useState(0)

    const btnplus = () => {
        if (values < 5) { setValues(prev => prev + 1) }
    }
    const btnminus = () => {
        if (values > 0) { setValues(prev => prev - 1) }
    }

    return (
        <>
            {!values ? <Button onPress={() => { btnplus() }} bgColor={Colors.darkGreen} width={80} foreColor={Colors.white} title={"ADD"} height={"60%"} style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} /> :
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <TouchableOpacity onPress={() => { btnminus() }} style={{ width: 25, backgroundColor: Colors.darkGreen, height: 30, alignItems: 'center', alignSelf: 'center', justifyContent: 'center',borderTopLeftRadius:10 ,borderBottomLeftRadius:10}} >
                        <Text style={{ Colors: '#fff' }}>-</Text>
                    </TouchableOpacity>
                    <View style={{ width: 25, backgroundColor: Colors.darkGreen, height: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ Colors: "#fff" }}>{values}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { btnplus() }} style={{ width: 25, backgroundColor: Colors.darkGreen, height: 30, alignItems: 'center', alignSelf: 'center', justifyContent: 'center',borderTopRightRadius:10,borderBottomRightRadius:10 }} >
                        <Text style={{ Colors: '#fff' }}>+</Text>
                    </TouchableOpacity>
                   
                </View>}
        </>
    )
}




{/* <View style={{ flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center' }}>
{values ? <View><Button /></View> : <View><TouchableOpacity onPress={onPress}>
    <View style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    }}>
        <Text style={{ color: foreColor }}> + </Text>
    </View>
</TouchableOpacity>
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor, width: width, height: height }}>
        <Text style={{
            color: foreColor,

        }}>1</Text>
    </View>
    <TouchableOpacity onPress={onPress}>
        <View style={{
            width: width,
            height: height,
            backgroundColor: bgColor,
            justifyContent: 'center',
            alignItems: 'center',
            border: 1,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5
        }}>
            <Text style={{ color: foreColor }}> - </Text>
        </View>
    </TouchableOpacity></View>}

</View> */}