import "../stylesheets/notFound.scss";

const Notfound = () => {
  return (
    <div className="notfound">
      <p>
        We are sorry, we can't offer what you are searching for. Please, check
        other options!
      </p>
      <img
        className="notfound_img"
        src="https://media3.giphy.com/media/hr7lFp8VdvxWU/200.gif?cid=6104955e753eb91bef6d4670e7fb411228be920c63267c5a&rid=200.gif&ct=g"
        alt="Not found"
      />
    </div>
  );
};

export default Notfound;
