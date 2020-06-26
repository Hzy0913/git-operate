import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

let change = 1;
function App() {
  const [n, setn] = useState(1);
  if (change) {
    const [age, setAge] = useState(10);
    change = 0;
  } else {

  }
  const [man, setSex] = useState(true);
  return (
    <div>
      这是n:{n}<button onClick={() => setn(n + 1)}>n++</button>
      年龄：{age}<button onClick={() => setAge(age + 2)}>age+2</button>
      变性：{man ? 'man' : 'gay'}<button onClick={() => setSex(!man)}>change</button>
    </div>
  );
}

export default App;
