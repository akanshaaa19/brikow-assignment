function Card(props) {
  return (
    <div
      style={{ padding: "1rem 0.5rem" }}
      {...props}
      className={`${props.className} `}
    >
      <div className="card-body bg-white h-full rounded">
        <div style={{ padding: "1rem" }} className="">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Card;
