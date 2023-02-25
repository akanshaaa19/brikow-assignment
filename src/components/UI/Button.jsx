function Button(props) {
  return (
    <button
      {...props}
      className={`btn btn-primary bg-[#438a7a] hover:bg-[#397568] ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
