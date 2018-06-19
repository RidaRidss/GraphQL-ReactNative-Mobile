import React, { Component } from "react";
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Application extends Component<{}> {
  render(){ 
  return(
      <View style={styles.container}>
          <Text style={styles.welcome}>
              Welcome to React & Apollo  🚀
            </Text>
            <Text style={styles.heading}>{`1 ${this.state.currency}`}</Text>
          <ExchangeRateList
          currency={currency}
          onCurrencyChange={this.onCurrencyChange}
          />
      </View>
  )
}

export default connect()(Application);
