import React, {Component, useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import MateriFlexbox from './pages/FlexBox';
import PositionReactNative from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import Communication from './pages/Communication';

import SampleComponent from './pages/SampleComponent';
import StateDinamis from './pages/StateDinamis';
import StylingReactNativeComponent from './pages/StylingComponent';
import ReactNativeSvg from './pages/ReactNativeSvg';
import BasicJavascript from './pages/BasicJavascript';
import CallApiVanillaJs from './pages/CallAPIVanillaJs';
import CallApiAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  });
  return (
    <View>
      <ScrollView>
        {/* <StylingReactNativeComponent /> */}
        {/* <PositionReactNative /> */}
        {/* <SampleComponent /> */}
        {/* <MateriFlexbox /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <MateriFlexbox /> */}
        {/* <ReactNativeSvg /> */}
        {/* <BasicJavascript /> */}
        {/* <CallApiVanillaJs /> */}
        {/* <CallApiAxios /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  );
};

export default App;
