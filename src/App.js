import { useState } from 'react';
import Navigation from "./components/Navigation/navigation";
import RankingTitle from "./components/RankingTitle/ranking-title";
import ImageUrlForm from "./components/ImageUrlForm/image-url-form";
import ImageFaceDetector from "./components/image-face-detector/image-face-detect";
import SignIn from "./components/signin/signin";
import Register from "./components/Register/register";
import FaceSquareDiv from './components/hooks/face-boxes';
import './App.css';
function App() {
  const [ input, setInput ] = useState('')
  const [ imageUrl, setImageUrl ] = useState('')
  const [ faceBox, setFaceBox ] = useState([])
  const [ route, setRoute ] = useState('signin')
  const [ isSignedIn, setIsSignedIn ] = useState(false)
  const [ loadedUser, setLoadedUser ] = useState({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
  })
  const inputChange = (event) => setImageUrl(event.target.value);
  const onSubmit = () => {
    setInput(imageUrl)
    fetch('https://glacial-coast-14015.herokuapp.com/imageUrl', {
      method: 'post',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        imageUrl: imageUrl
      })
    })
    .then(resp => resp.json())
    .then(response => {
      const faceRegion = response.outputs[0].data.regions;
      setFaceBox(FaceSquareDiv(faceRegion).flat());
      let faceDetected = faceRegion.length;
      if (response) {
        fetch('https://glacial-coast-14015.herokuapp.com/image', {
          method: 'put',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            id: loadedUser.id,
            faces: faceDetected
          })
        })
        .then(resp => resp.json())
        .then(count => {
          setLoadedUser({ ...loadedUser, entries: count});
        })
        .catch(console.log)
      }
    })
    .catch(() => alert('Insert a valid image URL'))
  }
  const resetForm = () => {
    setImageUrl('')
    setInput('')
    setFaceBox([])
    document.getElementById('urlInput').value = ''
  }
  const changeRoute = (route) => {
    setRoute(route)
    setLoadedUser(
      {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
  }
    )
    route === 'home' ? setIsSignedIn(true) : setIsSignedIn(false)
  }
  return (
    <div className="App">
      <Navigation
        signedIn={isSignedIn}
        onChangeRoute={changeRoute}
      /> 
      { route === 'home' ?
      <>
      <RankingTitle
        userName={loadedUser.name}
        userRanking={loadedUser.entries}
      />
      <ImageUrlForm
        inputImageUrl={inputChange}
        imageBtnSubmit={onSubmit}
        resetInput={resetForm}
      />
      <ImageFaceDetector 
        imageFace={input}
        box={faceBox}
      />
      </> :
      route === 'signin' ?
      <SignIn
        onChangeRoute={changeRoute}
        setLoadUser={setLoadedUser}
      /> :
      <Register
        onChangeRoute={changeRoute}
        setLoadUser={setLoadedUser}
      />
      }
    </div>
  );
}

export default App;
