import  React,{useState,useEffect,useRef} from 'react';
import {View,Text,StyleSheet, BackHandler,ActivityIndicator,Linking} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native";
import * as Progress from 'react-native-progress';



import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeScreen({ navigation }) { 



    const webviewref=useRef(null);
    const [canGoBack,setCanGoBack]= useState(false);
    const [canGoForward,setCanGoForward]= useState(false);
    const[currentUrl,setCurrentUrl]=useState('https://easyalbania.com/mobile');
    const onPress = () => setCurrentUrl('https://easyalbania.com/mobile');
    const [isLoading, setLoading] = useState(false);

const backAction = () => {
  if(canGoBack){
webviewref.current.goBack()
  }else{
navigation.goBack()
  }
  return true;
}
const forwardAction = () =>{

  if(webviewref.current) webviewref.current.goForward()
  
}

    useEffect(()=>{
BackHandler.addEventListener("hardwareBackPress",backAction);

()=>BackHandler.removeEventListener("hardwareBackPress",backAction)
    },[canGoBack])

    return (
      <SafeAreaView style={{ flex: 1 }}>
      <>
       
        <WebView 
        allowsBackForwardNavigationGestures
        ref={webviewref}
          source={{ uri: currentUrl }}
          javaScriptEnabled
          
          
          onNavigationStateChange={navState=>{
            setCanGoBack(navState.canGoBack);
            setCanGoForward(navState.canGoForward);
            setCurrentUrl(navState.url)
            
          }}
          onLoadStart={(syntheticEvent) => {
            setLoading(true);
          }}
          onLoadEnd={(syntheticEvent) => {
            setLoading(false);
          }}
         
        
          onShouldStartLoadWithRequest={(request) => {
            // Only allow navigating within this websites
            
           if ( request.url.startsWith ('https://easyalbania.com/mobile')){
             
return true
           }
           
           else if ( request.url.startsWith ('https://www.google.com/recaptcha/')){
          
 return false
          }else if ( request.url.startsWith ('https://vars.hotjar.com/')){
 return false
           }
           else Linking.openURL(request.url)
           .then (()=>null)
           .catch(()=>null);
          }}
             
          
         

        />
  
         <View style={styles.navigationContainer}>
         
       
        
       </View>
       {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator
              color="#e93151"
              size="large"
         
            />
          </View> )}
       </>
       
       </SafeAreaView>
        )
       


      };
      const styles =StyleSheet.create({
        container:{
          flex:1,
          position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
        },

        loading: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
        
        
        },
        navigationContainer:{
          
          position:'relative',
          bottom:0,
          backgroundColor:'#ffffff',
          padding:8,
justifyContent:'space-around',
flexDirection:'row'
        },
        btn:{
color:'pink',
fontSize:35
        }
      
    
         })

