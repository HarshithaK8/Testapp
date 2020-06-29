import React, { Component } from 'react';

class Footer extends Component
{
    render()
    {
        return (
            <footer id="Footer">
            <div class="container text-center">
              <div class="footer-text ">
                <p>Sign up for our free newsletter
                  <br class="hidden-lg-down" /> We share the latest on building great companies and careers from around the Web.</p>
                <div class="email-box">
                  <form action="#" method="post">
                    <input required type="email">
                    <label for="email">Email</label>
                    <input class="submit" type="submit" value="" /></input>
                  </form>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="copy-right">
                      <p>© Small Business, Inc.</p>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right">
                    <div class="social-share">
                      <ul>
                        <li>
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-pinterest"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <p class="designed">Designed by <a href="https://www.position2.com/" target="_blank">Position2</a></p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        //html
        )
    }
}
export default Footer;