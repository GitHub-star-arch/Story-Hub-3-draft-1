import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Login} from React.Component;
import { keyAvoidingView } from 'ToastAndroid-native'
export default class Search extends React.Component {

    constructor(){
        super();
        this.state={
            Title:'',
            Author:'',
            Story:'',
        }
    }

    render(){
        return(
            <keyAvoidingView>
                <Text style={stylez.Searchsty}>
                  {Title}
                  {Author}
                  {Story}
                </Text>
            </keyAvoidingView>
        )
    }
}
const stylez = StyleSheet.create({
    Searchsty:{
        justifyContent:'center',
        backgroundColor:'green',
        alignText:'center',
        Textsize:'10',
        fontWeight:'5',
        Textcolor:'Red',

    }
})