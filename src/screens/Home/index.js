import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post'

// data
import posts from '../../../data/posts';

// const post1 = {
//     id: 'p1',
//     videoUri:'https://firebasestorage.googleapis.com/v0/b/tiktok-97b60.appspot.com/o/2.mp4?alt=media&token=2cf7007b-a048-41a7-b371-ae558cc8103b',
//     user:{
//         id:'u1',
//         username:'hkrhasan',
//         imageUri:'http://learnwithhkr.herokuapp.com/static/images/common/logo.png',
//     },
//     description: 'bla bla bla kajshdk',
//     song: 'NF - The search',
//     songImage:'http://learnwithhkr.herokuapp.com/static/images/common/logo.png',
//     songName:'mera dil',
//     likes:123,
//     comments: 12,
//     shares: 44
// }


const index = () => {
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 50}
                snapToAlignment={'start'}
                decelerationRate={'normal'}
            />
        </View>
    );
}

export default index;
