import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    })
  }, [])

  const sounds1 = [
    { 
      name: 'heater1',
      keyCode: 'Q',
      id: 'heater1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    { 
      name: 'heater2',
      keyCode: 'W',
      id: 'heater2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    { 
      name: 'heater3',
      keyCode: 'E',
      id: 'heater3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    { 
      name: 'heater4',
      keyCode: 'A',
      id: 'heater4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    { 
      name: 'heater6',
      keyCode: 'S',
      id: 'heater6',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    { 
      name: 'dsc',
      keyCode: 'D',
      id: 'dsc',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    { 
      name: 'kickHat',
      keyCode: 'Z',
      id: 'kickHat',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    { 
      name: 'rp4Kick',
      keyCode: 'X',
      id: 'rp4Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    { 
      name: 'cev',
      keyCode: 'C',
      id: 'cev',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  
  ];
  
  const sounds2 = [
    { 
      name: 'chord1',
      keyCode: 'Q',
      id: 'chord1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    { 
      name: 'chord2',
      keyCode: 'W',
      id: 'chord2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    { 
      name: 'chord3',
      keyCode: 'E',
      id: 'chord3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    { 
      name: 'light',
      keyCode: 'A',
      id: 'light',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    { 
      name: 'dry',
      keyCode: 'S',
      id: 'dry',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    { 
      name: 'bld',
      keyCode: 'D',
      id: 'bld',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    { 
      name: 'punch',
      keyCode: 'Z',
      id: 'punch',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    { 
      name: 'side',
      keyCode: 'X',
      id: 'side',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    { 
      name: 'brk',
      keyCode: 'C',
      id: 'brk',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

  const [bank, setBank] = useState(sounds2)
  const [activeSound, setActiveSound] = useState('play something');

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    console.log(selector)
    audio.play();
  }

  const updateDisplay = (selector) => {
    console.log(selector);
    console.log(bank)
    let description = bank.filter((item) => {
      if (selector == item.keyCode) {
        setActiveSound(item.name)
        return item;
      }
    })
    console.log(description)
  }

  const buttonClick = (selector) => {
    playSound(selector)
    updateDisplay(selector)
  }

  const changeBank = () => {
    setBank((currentBank) => {
      if (currentBank == sounds1) {
        return sounds2
      } else {
        return sounds1
      }
    })
  }

  return (
    <div className="App " id='drum-machine'>
          <div id='instrument' bank={bank}>
            <div className='instrument'>
              {bank.map((item) => {
                return(
                  <div className="drum-pad col-md-4"
                    id={item.id}
                    key={item.name}
                    onClick={() => {buttonClick(item.keyCode)}}>
                    <h4>{item.keyCode}</h4>
                    <audio 
                      className='clip'
                      id={item.keyCode}
                      src={item.url}
                      >
                    </audio>
                  </div>)})}
            </div>
          <div className='controls'>
            <div id='display'>{activeSound}</div>
            {/*<input type='range' className='volume' id='volume'></input>*/}
            <button onClick={changeBank}>Change Bank</button>
            </div>
          </div>
    </div>
  )
}

export default App
