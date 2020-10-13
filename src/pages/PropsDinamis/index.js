import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center', marginHorizontal: 20}}>
        {props.judul}
      </Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="How To Order"
            gambar="https://scontent-sin6-2.cdninstagram.com/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/104437631_611697713082933_1565794904296442400_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=109&_nc_ohc=8bMATvhpYIcAX8ARFSZ&tp=16&oh=d38819895e510cdd6f9a153c17a8502c&oe=5F8697FA"
          />
          <Story
            judul="Testimoni"
            gambar="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/s150x150/94672347_112891980191060_7965385783540042191_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=14uaJraWmoIAX_YYzzQ&oh=3af7aaf90bf203051af2ed1457dd380f&oe=5FAD501D"
          />
          <Story
            judul="List produk"
            gambar="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/s150x150/103448938_300476161125900_1329592996377342032_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Vu2u_lRDR14AX8DuUJJ&oh=f0b9706205102323645994021b7be680&oe=5FADD169"
          />
          <Story
            judul="List produk"
            gambar="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/s150x150/103448938_300476161125900_1329592996377342032_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Vu2u_lRDR14AX8DuUJJ&oh=f0b9706205102323645994021b7be680&oe=5FADD169"
          />
          <Story
            judul="List produk"
            gambar="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/s150x150/103448938_300476161125900_1329592996377342032_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Vu2u_lRDR14AX8DuUJJ&oh=f0b9706205102323645994021b7be680&oe=5FADD169"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
