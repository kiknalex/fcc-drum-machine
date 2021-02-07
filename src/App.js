
import React from 'react';
import ReactDOM from 'react-dom';
const DrumPad =({ id, name,handleClick,url })=>{
  return (
     <button  className="drum-pad" id={name} onClick={handleClick(id,name)}>
      {id}
      <audio className="clip" id={id} src={url}/>
    </button>
  )
}

class App extends React.Component {
   state = {
      currentName: '',
      sounds:[
    {
      id: 'Q',
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      name: 'Heater 1',
    },
   {
     id: 'W',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
     name: 'Heater 2'
   },
   {
     id: 'E',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
     name: 'Heater 3'
   },
   {
     id: 'A',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
     name: 'Heater 4'
   },
   {
     id: 'S',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
     name: 'Clap'
   },
   {
     id: 'D',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
     name: 'Open HH'
   },
   {
     id: 'Z',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
     name: "Kick n' Hat"
   },
   {
     id: 'X',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
     name: 'Kick'
   },
   {
     id: 'C',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
     name: 'Closed HH'
   }
  ]
    };

  componentDidMount() {
	document.addEventListener("keydown", this.keyPress);
  }
   componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPress);
  }
  keyPress =(e)=> {
      const pad = this.state.sounds.find(
            item => item.id === e.key.toUpperCase(),
        );
        // click the button
        if (pad) {
          document.getElementById(pad.name).click()
        };
  } 
                        
  playAudio =(id, name)=> {
    return () => {
            document.getElementById(id).play();
            this.setState({
                currentName: name,
            });
        };
  }
  render() {
    return (
    <body> 
        <div id="drum-machine"> 
          <div id="grid-wrapper" >
            {this.state.sounds.map(el=>{
                 return  <DrumPad 
                           id = {el.id}
                           key={el.id}
                           name = {el.name}
                           handleClick ={this.playAudio}
                           url ={el.url}
                           />
            })   
            }
          </div>
          <div className="texts">
          <h1 className="big-item">Drum Machine</h1>
          <p id="display">{this.state.currentName}</p>
          </div>
        </div>   
     </body>
    )
  }
};

export default App;
