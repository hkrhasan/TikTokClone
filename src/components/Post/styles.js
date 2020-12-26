import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height - 50
    },
    video: {
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0    
    },
    videoPlayButton:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        zIndex:100,
    },
    uiContainer:{
        height:'99%',
        justifyContent:'flex-end',
        // backgroundColor:'red'
    },
    bottomContainer:{
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    handle:{
        color:'#fff',
        fontSize:16,
        fontWeight: '600',
        marginBottom:5,
    },
    description:{
        color:'#fff',
        fontSize:16,
        fontWeight: '300',
        marginBottom:5
    },
    songRow:{
        flexDirection: 'row',
        alignItems:'center'
    },
    songName:{
        color:'#fff',
        fontSize:16,
        marginLeft:5
    }, 
    songImage:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:10,
        borderColor:'#4c4c4c'
    },  

    // sidebar 
    rightContainer:{
        alignSelf:'flex-end',
        height:250,
        justifyContent:'space-between',
        marginRight:5,
    },
    profilePicture:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:2,
        borderColor:'#fff'
    },
    iconContainer:{
        alignItems:'center'
    },
    statsLabel:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        marginTop:5
    }

});

export default styles