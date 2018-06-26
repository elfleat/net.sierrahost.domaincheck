import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import HistoryMenu from './components/HistoryMenu'
import CheckList from './components/CheckList'

export default class App extends React.Component {
  state = {
    loading: false,
    settings: false,
    tlds: {
      com: true,
      org: true,
      net: true,
      me: true,
      io: true,
      tv: true,
      uk: false,
      br: false,
      jp: false,
      it: false,
      pl: false
    },
    activeHistory: '',
    history: {}
  }

  activateHistory = (domain) => {
    this.setState({ activeHistory: domain })
  }

  deleteHistory = (domain) => {
    const { history } = this.state
    let { activeHistory } = this.state

    delete history[domain]
    const historyEntries = Object.keys(history)

    if(domain === activeHistory) {
      activeHistory = historyEntries.length ? historyEntries[0] : null
    }

    this.setState({ history, activeHistory })
  }

  search = async (domain) => {
    const { history, tlds } = this.state
    const pureDomain = domain.indexOf('.') !== -1 ? domain.split('.')[0] : domain
    
    history[pureDomain] = {
      loading: true,
      tlds: {}
    }

    Object.keys(tlds).forEach((key) => {
      if(tlds[key]) {
        history[pureDomain]['tlds'][key] = 'pending';
      }
    })

    this.setState({ history, activeHistory: pureDomain })
  }
  tldSwitch = (tld) => {
    let { tlds } = this.state;
    tlds[tld] = !tlds[tld]
    this.setState({ tlds })
  }
  settingsSwitch = () => {
    const { settings } = this.state
    this.setState({ settings: !settings })
  }
  render() {
    const { settings, tlds, loading, history, activeHistory } = this.state

    return (
      <View style={styles.container}>
        <Header 
          settings={settings}
          settingsSwitch={this.settingsSwitch}
          search={this.search}
          tlds={tlds}
          loading={loading}
          tldSwitch={this.tldSwitch}
        />

        <HistoryMenu history={history} activateHistory={this.activateHistory} activeHistory={activeHistory} deleteHistory={this.deleteHistory} />
        
        {(activeHistory) 
          ? <CheckList domainInfo={history[activeHistory]} rawDomain={activeHistory} />
          : <Text style={styles.nothingYet}>Nothing on your history yet.</Text>}
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  nothingYet: {
    alignSelf: 'center',
    padding: 30
  }
});
