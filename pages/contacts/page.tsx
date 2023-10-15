const Contacts = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container">
        <div className="contact__data">
          {[
            {
              title: "Email:",
              description: "bamisiledorcas@gmail.com",
            },
            {
              title: "Email:",
              description: "bamisiledorcas@outlook.com",
            },
            {
              title: "Phone Number:",
              description: "+2347057258425",
            },
          ].map((item, index) => (
            <div key={index} className="contact__information">
              <h3 className="contact__subtitle">{item.title}</h3>
              <span className="contact__description">{item.description}</span>
            </div>
          ))}
        </div>
        <form action="" className="contact__form">
          {["Name", "Email"].map((placeholder, index) => (
            <input
              key={index}
              type={index === 1 ? "email" : "text"}
              placeholder={placeholder}
              className="contact__input"
            />
          ))}
          <textarea
            name=""
            id=""
            cols={0}
            rows={0}
            placeholder="Message"
            className="contact__input"
          ></textarea>
          <input
            type="button"
            value="Send Message"
            className="contact__input button"
          />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
