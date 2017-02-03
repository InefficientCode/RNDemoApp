/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Analytics from 'mobile-center-analytics';
import Crashes from 'mobile-center-crashes';

export default class RNDemoApp extends Component {
  sendEvent() {
    Analytics.trackEvent('My Custom Event', {
      prop1: 'Custom Property',
      timeStamp: new Date().toISOString()
    })
  }
  nativeCrash() {
    Crashes.generateTestCrash();
  }
  jsCrash() {
    this.fun1();
  }

  fun1() {
    this.fun2();
  }

  fun2() {
    this.fun3();
  }

  fun3() {
    throw new Error("My Custom Exception");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button title="Send Event" onPress={() => this.sendEvent()} />
        <Button title="Native Crash" onPress={() => this.nativeCrash()} />
        <Button title="JS Crash" onPress={() => this.jsCrash()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNDemoApp', () => RNDemoApp);

1+1;
