import React from 'react'
import style from './home.module.css'
import background from './midia/heading.jpg'

const Header = () => {
  return (
   <div className={style.backgroundImage} style={{ backgroundImage: `url(${background})` }}>
    <div className={style.second_header}>
       <div className={style.second_header_section}>
            <div className={style.second_header_logo}>
               <img src="/asset/OpenTempusLogo.png" alt=""/>
            </div>
            <div className={style.second_header_text}>
                <p>OpenTempus is an open source solution using machine learnig model to prodict weather information <br/> and suporting farmer to fight climate change. This code can be used to to run climate prodiction <br/> according to your longitude and latitude</p>
            </div>
            <div className={style.second_header_text2}>
                <p>—— HELPFUL LINKS ——</p>
            </div>
            <div className={style.second_header_buttons}>
               <div className={style.second_header_all_buttons}>
                    <div className={style.first_button}>
                        <div>
                          <img src="/asset/github_logo.png" alt=""/>
                        </div>
                        <div>
                          <p>Protocol Code</p>
                        </div> 
                    </div>
                    <div className={style.second_button}>
                        <div>
                          <img src="/asset/owl_logo.png" alt=""/>
                        </div>
                        <div>
                          <p>Agrolly</p>
                        </div> 
                    </div>
                    <div className={style.third_button}>
                        <div>
                          <img src="/asset/tlf_logo.png" alt=""/>
                        </div>
                        <div>
                          <p>The Linux Foundation</p>
                        </div> 
                    </div>
                    <div className={style.fourth_button}>
                        <div>
                          <img src="/asset/cr_logo.png" alt=""/>
                        </div>
                        <div>
                          <p>Call For Code</p>
                        </div> 
                    </div>
               </div>
            </div>
       </div>
    </div>
    </div>
  )
}

export default Header