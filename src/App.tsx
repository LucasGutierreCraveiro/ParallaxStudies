import "./App.css";
import Space from "./static/space.jpg";
import Ambiance from "./static/ambiance.jpg";
import Cat from "./static/cat.gif";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${Space})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${Ambiance})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={Cat} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.05}>
          <h2>I wonder what's down there</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2}>
          <h2>I wonder no more</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
