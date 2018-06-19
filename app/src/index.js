import React, { Component } from "react";
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ExchangeRateList from "./data/list";



import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";




const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://w5xlvm3vzz.lp.gql.zone/graphql`
  }),
  logger,
  cache: new InMemoryCache()
  // for SSR, use:
  // cache: new Cache().restore(window.__APOLLO_STATE__ || {})
});


export default class App extends Component<{}> {
    state = {
    currency: "USD"
  };
    onCurrencyChange = currency => this.setState(() => ({ currency }));

  render() {
   const { currency } = this.state;
 
    return (
        <ApolloProvider client={client}>
        <View style={styles.container}>
            <Text small="red" style={styles.welcome}>
                    Welcome to React & Apollo  🚀
            </Text>
        <Text style={styles.heading}>{`1 ${this.state.currency}`}</Text>
        <ExchangeRateList
          currency={currency}
          onCurrencyChange={this.onCurrencyChange}
        />
          </View>
        </ApolloProvider>
    );
  }
}
AppRegistry.registerComponent("app", () => App);

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
    heading: {
    fontSize: 20,
    fontWeight: "200",
    color: "white",
    letterSpacing: 6
  }
});
