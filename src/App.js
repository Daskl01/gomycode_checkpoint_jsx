
import './App.css';
import './style.css';
import imageInsrc from './imageInsrc.jpg';
function App() {
  return (
    
    <><div style={{ border: "solid 1px black", maxwidth: 100, }}>

      <h1 className="title red">Votre nom ici</h1>

      <br/>

      <img src={imageInsrc} alt="imageInsrc" />

      <br/>

      <img src="/imageInPublic.jpg" alt="imageInpublic" />

    </div><vidéo width="320" height="240" contrôles>
        <source src="/maVidéo.mp4" type="video/mp4" />
      </vidéo></>
  );
}

export default App; 
