import React from 'react'
import style from './home.module.css'

function Footer() {
  return (
    <div className={style.footer_section}>
    <div className={style.footer_section_content}>
        <div className={style.footer_logo}>
           <img src="/asset/OpenTempusleftright.png" alt=""/>
        </div>
        <div className={style.footer_images}>
         <a href="https://github.com/Call-for-Code/ClusterDuck-Protocol"><img src="/asset/github_logo.png" alt=""/></a>
         {/* <a href="https://www.youtube.com/channel/UCsQPZNes8Vov_nWSh1huk2w"><img className={style.youtube_logo} src="/asset/youtube_button.png" alt=""/></a> */}
         <a href="https://www.project-owl.com/slack"><img src="/asset/logoSlackLight.png" alt=""/></a>
        </div>
        <div className={style.footer_text}>
          <p className={style.footer_first_text}>Copyright © 2022 OpenTempus Protocol a Series of LF Projects, LLC.</p>
          <p className={style.footer_second_text}>OpenTempus is a trademark of LF Projects, LLC. For trademark usage guidelines and other applicable policies, please see www.lfprojects.org.</p>
        </div>
    </div>
  </div>
  )
}

export default Footer
