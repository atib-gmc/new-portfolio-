const Laptop = () => {
  const laptopStyles = {
    width: "400px",
    height: "250px",
    backgroundColor: "#777",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  };

  const lidStyles = {
    width: "100%",
    height: "50%",
    backgroundColor: "#aaa",
    borderBottom: "1px solid #555",
    position: "relative",
  };

  const cameraStyles = {
    width: "20px",
    height: "20px",
    backgroundColor: "#333",
    borderRadius: "50%",
    position: "absolute",
    top: "5px",
    left: "10px",
  };

  const screenStyles = {
    width: "80%",
    height: "70%",
    backgroundColor: "#000",
    margin: "10% auto",
  };

  const baseStyles = {
    width: "100%",
    height: "50%",
    backgroundColor: "#999",
    position: "relative",
  };

  const keyboardStyles = {
    width: "90%",
    height: "60%",
    backgroundColor: "#333",
    margin: "5% auto",
  };

  const trackpadStyles = {
    width: "30px",
    height: "30px",
    backgroundColor: "#444",
    borderRadius: "50%",
    position: "absolute",
    bottom: "10px",
    left: "10%",
  };

  return (
    <div style={laptopStyles}>
      <div style={lidStyles}>
        <div style={cameraStyles}></div>
        <div style={screenStyles}></div>
      </div>
      <div style={baseStyles}>
        <div style={keyboardStyles}></div>
        <div style={trackpadStyles}></div>
      </div>
    </div>
  );
};

export default Laptop;
