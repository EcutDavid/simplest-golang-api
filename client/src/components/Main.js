import 'normalize.css/normalize.css'
import React from 'react'
import request from 'superagent'

import 'styles/App.scss'
import { apiUrl } from '../config/api'


class AppComponent extends React.Component {
  constructor() {
    super()
    this.state = { count: undefined, ip: undefined, descrition: undefined }
  }

  componentWillMount() {
    request
    .get(apiUrl)
    .send()
    .end((err, res) => {
      if (err) {
        this.setState({ descrition: 'something wrong the server, can you refresh the page?' })
        return
      }
      const { ip, count } = JSON.parse(res.text)
      this.setState({ ip, count })
    })
  }

  render() {
    const { count, descrition, ip } = this.state
    return (
      <div className="main">
        <h1 className="title">Simplest golang data api</h1>
        {
          count ? (
            <div>
              <h1>Thanks for visit</h1>
              <h2>This webpage has been visted { `${count} ${count > 1 ? 'times' : 'time'}` }</h2>
              <h2>Your IP address is: {ip.replace(/:[0-9]{1,}/g, '')}</h2>
            </div>
          ) : (
            <h1>
              { descrition ? descrition : 'Hi, We are communicating with golang sever' }
            </h1>
          )
        }
      </div>
    )
  }
}

export default AppComponent
