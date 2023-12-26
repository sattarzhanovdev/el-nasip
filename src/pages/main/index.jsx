import React from 'react'
import c from './main.module.scss'
import logo from '../../images/logo.png'
import house from '../../images/image.png'
import { API } from '../../api'

const Main = () => {
  const [ dep, setDep ] = React.useState('')
  const [ on, setOn ] = React.useState(false)
  const [ on2, setOn2 ] = React.useState(false)

  React.useEffect(() => {
    API.getValue()
      .then(res => console.log(res.data.value))
  }, [dep])
  return (
    <div className={c.container}>
      <div className={c.main}>
        <div className={c.left__content}>
          <div className={c.logo}>
            <img 
              src={logo} 
              alt="logo"
            />
          </div>
          <div className={c.btns}>
            {
              on ?
              <button
                className={on ? c.off : ''}
                onClick={() => {
                  API.putValue('_')
                  setDep(Math.random())
                  setOn(false)
                }}
              >
                Выключить все дома
              </button>
              :
              <button
                onClick={() => {
                  API.putValue('v')
                  setDep(Math.random())
                  setOn(true)
                }}
              >
                Включить все дома
              </button>
            }
            {
              on2 ?
              <button
                className={on2 ? c.off : ''}
                onClick={() => {
                  API.putValue('_')
                  setDep(Math.random())
                  setOn2(false)
                }}
              >
                Выключить демо режим
              </button>
              :
              <button
                onClick={() => {
                  API.putValue('D')
                  setDep(Math.random())
                  setOn2(true)
                }}
              >
                Включить демо режим
              </button>
            }
          </div>
        </div>
        <div className={c.right__content}>
          <img 
            src={house} 
            alt="house"
          />
        </div>
      </div>
    </div>
  )
}

export default Main