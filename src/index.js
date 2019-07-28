import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            dataSet: [ 
            { q: 'hello', a: 'こんにちは', id: 'OcGaZbsWbUT'
          },
            { q: 'how are you?', a: 'お元気ですか？', id: 'QBwPFnSmwcC' },
            { q: 'what are you doing now?',
              a: '今何をしていますか？',
              id: 'VeKODJFymEo' },
            { q: 'do you like reading books?',
              a: '本を読むのが好きですか？',
              id: 'lIthHSsLuNC' },
            { q: 'questions', a: '質問', id: 'VWsdatIIrQu' },  { q: 'france', a: 'フランス', id: 'PbjYVRoTksc' },
            { q: 'america', a: 'アメリカ', id: 'eQoZgwQGxEr'
          },
            { q: 'germany', a: 'ドイツ', id: 'bLGRslABylo' },  { q: 'canada', a: 'カナダ', id: 'qRzPvMQZpUQ' },
            { q: 'japan', a: '日本', id: 'pLxahuSDEHD' },
            { q: 'fingers', a: '指', id: 'ZEnQnIVlLII' },
            { q: 'time', a: '時間', id: 'IMsBPqRWsLz' },
            { q: 'more', a: 'もっと', id: 'VYBcIhnwOVe' },
            { q: 'fool', a: '馬鹿', id: 'ITpouFEkAPt' },
            { q: 'email', a: 'Eメール', id: 'OXeihFLWUZV' },
            { q: 'archive', a: 'アーカイブ', id: 'CCVhYUBbFDk' },
            { q: 'articles', a: '記事', id: 'NGNJRReVhua' },
            { q: 'nominate', a: 'ノミネート', id: 'HrQAcSXGucU' },
            { q: 'minute', a: '分', id: 'qiBXkEsaJpD' },
            { q: 'running', a: 'ランニング', id: 'oVmCmjehooz' },
            { q: 'run', a: '走る', id: 'IREtlsUbuMf' },
            { q: 'only', a: 'のみ', id: 'HqYHErrAGrF' },
            { q: 'only if', a: '場合に限り', id: 'RmjCQBevHZs' },
            { q: 'one', a: '1', id: 'bJTcHvOQTsz' },
            { q: 'two', a: '2', id: 'JqGvPNexBZo' },
            { q: 'three', a: '3', id: 'FnXUvFIPaIX' },
            { q: 'four', a: '4', id: 'gRkTgRynXAm' },
            { q: 'five', a: '5', id: 'FNOhGSPzTFw' },
            { q: 'separate', a: '分ける', id: 'oxZjyAUKTSI' },
            { q: 'decrease', a: '減少', id: 'NfYkeDPUzvB' },
            { q: 'increase', a: '増加する', id: 'eNQYxaJNLXD' },
            { q: 'tends', a: '傾向がある', id: 'jzfheuSjzEk'
          },
            { q: 'hit', a: 'ヒット', id: 'XCIicoBxuRj' },
            { q: 'slap', a: '平手打ち', id: 'XouHDkuDonV' },
            { q: 'nature', a: '自然', id: 'dVrqChGnZTw' },
            { q: 'supernatural', a: '超自然的', id: 'HYVarzaldHH' },
            { q: 'extreme', a: '極端な', id: 'DIvulyPypTF' },  { q: 'extremely', a: '極めて', id: 'aJIlJNsQDyW'
          },
            { q: 'sadly', a: '残念ながら', id: 'pVEssShUwKM'
          } ]
        }

        this.detectEnterKye = this.detectEnterKye.bind(this)
        this.randomNum = this.randomNum.bind(this)
        this.setCurrent = this.setCurrent.bind(this)
        this.changeValue = this.changeValue.bind(this)
    }
    
    componentDidMount(){
        this.setCurrent()
        let input = document.querySelector('.typing')
        input.focus()
    }

    randomNum = (max, min) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min)
    }

    setCurrent = () => {
        let n = this.randomNum(this.state.dataSet.length, 0)
        this.setState({
            current_q: this.state.dataSet[n].q,
            current_a: this.state.dataSet[n].a
        })
    }

    detectEnterKye = (e) => {
        if(e.key == 'Enter'){
            if(this.state.ok == true){
                this.setState({ok: false, check: ''})
                this.setCurrent()
            }
        }
    }

    changeValue = (e) => {
        this.setState({
            check: e.target.value
        }, () => {
            if(this.state.check == this.state.current_q){
                this.setState({ok: true})
                console.log(Date())
            }
        })
    }

    render(){
        return(
            <div className='form'>
                <h1　className='q'>{this.state.current_q}</h1>
                <h2 className='a'>{this.state.current_a}</h2>
                <input className='typing' placeholder={this.state.current_q} value={this.state.check} onChange={e => this.changeValue(e)} onKeyDown={(e) => this.detectEnterKye(e)}></input>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))