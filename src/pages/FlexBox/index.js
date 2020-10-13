import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor');
//     this.state = {
//       followers: 900,
//     };
//   }
//   componentDidMount() {
//     console.log('component did mount');
//     setTimeout(() => {
//       this.setState({
//         followers: 800,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('component did update');
//   }

//   componentWillUnmount() {
//     console.log('component will unmount');
//   }
//   render() {
//     console.log('render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#c8d6e5',
//             alignItems: 'flex-start',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#c0392b', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#2980b9', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#f1c40f', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#2ecc71', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Search</Text>
//           <Text>Product</Text>
//           <Text>Contact Us</Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginHorizontal: 10,
//             marginVertical: 20,
//           }}>
//           <Image
//             source={{
//               uri:
//                 'https://pbs.twimg.com/profile_images/1233771299236827136/njRPqX5Z_400x400.jpg',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50}}
//           />
//           <View style={{marginHorizontal: 10}}>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Fajar Agus Maulana
//             </Text>
//             <Text>{this.state.followers}k Followers</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [followers, setFollowers] = useState(900);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setFollowers(1000);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [followers]);

  // useEffect(() => {
  //   console.log('did update followers');
  //   setTimeout(() => {
  //     setFollowers(1000);
  //   }, 2000);
  // }, [followers]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#c0392b', width: 50, height: 50}} />
        <View style={{backgroundColor: '#2980b9', width: 50, height: 50}} />
        <View style={{backgroundColor: '#f1c40f', width: 50, height: 50}} />
        <View style={{backgroundColor: '#2ecc71', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Search</Text>
        <Text>Product</Text>
        <Text>Contact Us</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 20,
        }}>
        <Image
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1233771299236827136/njRPqX5Z_400x400.jpg',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View style={{marginHorizontal: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Fajar Agus Maulana
          </Text>
          <Text>{followers}k Followers</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
