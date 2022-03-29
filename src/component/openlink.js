import React from 'react'
import style from './home.module.css'

const Openlink = () => {
  return (
    <div className={style.fourth_section}>
     <div className={style.fourth_section_content}>
        <div className={style.fourth_section_left_content}>
            <img src="/asset/logoSlackLight.png" alt=""/>
            <h1>SLACK</h1>
            <p>Engage ongoing product discussion through Slack with hundreds of others from around the world.</p>
            <button>Go To Community</button>
        </div>
        <div className={style.fourth_section_left_content}>
            <img src="/asset/github_logo.png" alt=""/>
            <h1>GitHub</h1>
            <p>GitHub source code managing the Machine learning modle prodicting weather information for farmer use</p>
            <button>Go To Community</button>
        </div>
     </div>
   </div>
  )
}

export default Openlink