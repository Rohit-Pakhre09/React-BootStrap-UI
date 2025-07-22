const Image = () => {
  return (
    <section className="d-flex align-items-end justify-content-center vh-100 overflow-hidden">
      <img
        src="/src/assets/Man.png"
        className="img-fluid"
        style={{
          minHeight: "100px",
          height: "100%",
          width: "auto",
          objectFit: "cover",
          maxWidth: "none",
        }}
        alt="Man"
      />
    </section>
  );
};

export default Image;
