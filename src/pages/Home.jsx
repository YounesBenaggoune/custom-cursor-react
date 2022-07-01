import image from "../assets/images/unsplash.jpg";
import withCursor from "../hooks/useCursor";

const Home = (props) => {
  const { onCursor } = props.context;
  return (
    <main className="main">
      <div className="main-text">
        <a
          onMouseEnter={() => onCursor("link")}
          onMouseLeave={onCursor}
          href="/"
        >
          Scale Cursor on Link Hover{" "}
        </a>
      </div>
      <div className="main-image">
        <img
          onMouseEnter={() => onCursor("image")}
          onMouseLeave={onCursor}
          src={image}
          alt=""
        />
      </div>
    </main>
  );
};

export default withCursor(Home);
