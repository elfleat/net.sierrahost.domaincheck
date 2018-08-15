import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native'
import Header from './components/Header'
import HistoryMenu from './components/HistoryMenu'
import CheckList from './components/CheckList'
import Splash from './components/Splash'
import Api from './utils/api'

export default class App extends React.Component {
  state = {
    loading: false,
    settings: false,
    tlds: {
      com: true,
      org: true,
      net: true,
      biz: true,
      me: true,
      io: true,
      tv: false,
      uk: false,
      br: false,
      jp: false,
      it: false,
      pl: false
    },
    activeHistory: '',
    history: {},
    backendAwake: false
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

    Keyboard.dismiss()

    this.setState({ history, activeHistory: pureDomain, settings: false })
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

  check = async () => {
    const response = await Api.get(`check/${this.props.domainWithTld}`)
    this.setState({
        loading: false,
        available: !response.data.isTaken
    })
}
  
  wakeUpBackend = async () => {
    const response = await Api.get('wake-up', { headers: { 'Cache-Control': 'no-cache' }})
    if(response.data.success) this.setState({ backendAwake: true })
  }

  render() {
    const { settings, tlds,  history, activeHistory, loading, backendAwake } = this.state

    if(!backendAwake) {
      this.wakeUpBackend()
      return (<Splash />)
    }

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
