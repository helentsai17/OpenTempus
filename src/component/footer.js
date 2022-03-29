import React from 'react'

function Footer() {
  return (
    <div class="footer_section">
    <div class="footer_section_content">
        <div class="footer_logo">
           <img src="./images/CDP_LOGO.png" alt=""/>
        </div>
        <div class="footer_images">
         <a href="https://github.com/Call-for-Code/ClusterDuck-Protocol"><img src="./images/github_logo.png" alt=""/></a>
         <a href="https://www.youtube.com/channel/UCsQPZNes8Vov_nWSh1huk2w"><img class="youtube_logo" src="./images/youtube_button.png" alt=""/></a>
         <a href="https://www.project-owl.com/slack"><img src="./images/logo_slack_light.png" alt=""/></a>
        </div>
        <div class="footer_text">
          <p class="footer_first_text">Copyright © 2022 ClusterDuck Protocol a Series of LF Projects, LLC.</p>
          <p class="footer_second_text">ClusterDuck is a trademark of LF Projects, LLC. For trademark usage guidelines and other applicable policies, please see www.lfprojects.org.</p>
        </div>
    </div>
  </div>
  )
}

export default Footer
