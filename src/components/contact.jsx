function contact(){
 return(
    <>
    <section>
    <h2 id="contact-heading" className="animated">Contact Me</h2>
    <div className="typeform-widget" data-url="https://matt1798.typeform.com/to/tqgW5H" data-transparency={50} data-hide-headers="true" data-hide-footer="true" style={{width: '100%', height: '80%'}}>
    </div>
  </section>
  <footer>
    <div className="row">
      <div className="social-links">
        <a href="https://github.com/CharlesHut" target="_blank" id="profile-link">Charlie Hutchings: GITHUB</a>
        <br />
        <a href="https://www.linkedin.com/in/charlie-hutchings-1b2b2a28a/" target="_blank" id="profile-link">Charlie Hutchings: LINKDIN</a>
        <p className="phone">phone number: 1231231233</p>
      </div>
    </div>
    <div className="row">
      <p>
        Copyright © 2018
      </p>
    </div>
  </footer>
  </>
 )
}
export default contact;