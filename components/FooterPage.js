import React from "react";

const FooterPage = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify"><i>Appsite Solution</i> is an initiative  to help the upcoming programmers to showcase their skills as well as for the ones finding a skilled programmers/freelancers. Appsite Solution focuses on providing the most efficient platform for programmers to show the world their skills in the form of blogs and projects. We will also help people find programmers who are skilled in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Python.
             <br/><i>This website is developed and owned by Sahel Mulagund.</i>
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
             <li><a href="/categories/android">Android</a></li>
              <li><a href="/categories/website">Website Development</a></li>
              <li><a href="/categories/python">Python</a></li>
              <li><a href="/categories/ui-ux">UI/UX Designing</a></li>
              <li><a href="/categories/javascript">JavaScript</a></li>
              <li><a href="/categories/kotlin">Kotlin</a></li>
              <li><a href="/categories/java">Java</a></li>
              <li><a href="/categories/react">React</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text"> Copyright &copy; 2021 Rights Reserved by <a href="/">Appsite Solution</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/sahel.mulagund/"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://twitter.com/AppsiteSolution"><i class="fa fa-twitter"></i></a></li>
              <li><a class="instagram" href="https://www.instagram.com/appsite_solution/"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/in/sahel-mulagund-55496217a/"><i class="fa fa-linkedin"></i></a></li>   
              <li><a class="github" href="https://github.com/Sahelmulagund"><i class="fa fa-github"></i></a></li>  
            </ul>
          </div>
        </div>
      </div>
</footer>
  );
}

export default FooterPage;