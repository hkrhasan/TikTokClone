import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Image,
    TouchableOpacity,
} from 'react-native'

import Video from 'react-native-video'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'



const Post = (props) => {
    const [post, setPost] = useState(props.post)
    const [paused, setPaused] = useState(false)
    const [isLiked, setIsliked] = useState(false)

    const onPlayPausePress = () => {
        setPaused(!paused)
    }

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1
        setPost({
            ...post,
            likes: post.likes + likesToAdd
        })
        setIsliked(!isLiked)
    }
    
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.videoPlayButton}>
                <View>
                    <Video
                        source={{uri: post.videoUri}}
                        style={styles.video}
                        resizeMode={'cover'}
                        onError={(e) => console.log(e)}
                        repeat={true}
                        paused={paused}
                    />
                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                                <Image style={styles.profilePicture} source={{uri:post.user.imageUri}} />
                            
                                <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                    <AntDesign name={'heart'} size={24} color={isLiked ? "red" : "white"} />
                                    <Text style=
                                    {styles.statsLabel}>{post.likes}</Text>
                                </TouchableOpacity>

                                <View style={styles.iconContainer}>
                                    <FontAwesome name={'commenting'} size={24} color="white" />
                                    <Text style=
                                    {styles.statsLabel}>{post.comments}</Text>
                                </View>

                                <View style={styles.iconContainer}>
                                    <Fontisto name={'share-a'} size={22} color="white" />
                                    <Text style=
                                    {styles.statsLabel}>{post.shares}</Text>
                                </View>

                        </View>

                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>
                                <View style={styles.songRow}>
                                    <Entypo name={'beamed-note'} size={24} color="white" />
                                    <Text style={styles.songName}>{post.songName}</Text>
                                </View>
                            </View>
                            <Image
                                style={styles.songImage}
                                source={{uri: post.songImage}}
                            />
                        </View>
                    </View>
                </View>    
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post
