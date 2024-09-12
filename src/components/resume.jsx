function resume (){
    return (
        <>
         <section className="section-about " id="about">
    <div className="row animated" id="about-heading">
      <h2>My Services</h2>
    </div>
    <div className="row">
      <div className="col span-1-of-4 box animated" id="about-one">
        <h3>build</h3>
        <p>
          Hello my name is Charlie Hutchings and I construct websites from the ground up using the most current languages and frameworks, including HTML5 Javascript ES6, and Node.js.
        </p>
        <br />
        <i className="ion-social-html5" />
        <i className="ion-social-javascript" />
        <i className="ion-social-nodejs" />
      </div>
      <div className="col span-1-of-4 box animated" id="about-two">
        <h3>design</h3>
        <p>
          I design my websites in a way so they look clean and stylish as well as function perfectly. 
        </p>
        <br />
        <i className="ion-social-css3" />
      </div>
      <div className="col span-1-of-4 box animated" id="about-three">
        <h3>update</h3>
        <p>
          Once I complete your website ill visit it frequently to introduce any new code updates or optomizations to make the website work better
        </p>
      </div>
      <div className="col span-1-of-4 box animated" id="about-four">
        <h3>maintain</h3>
        <p>
          Ill work to maintain the website and respond to any bugs my client or users report.
        </p>
      </div>
    </div>
  </section></>
    )
    
}
export default resume;