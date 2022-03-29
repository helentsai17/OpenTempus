import React from 'react'
import style from './home.module.css'
import Teammember from './teammember'

const Team = () => {
    return (
        <div className={style.ninth_section}>
            <div className={style.ninth_section_content}>
                <div className={style.ninth_section_top_left_content}>
                    <p>Team</p>
                </div>
                <div className={style.ninth_section_top_right_content}>
                    <p>Meet the original Agrolly founders who brought this project to life.</p>
                </div>
            </div>
            <div className={style.ninth_section_image_content}>
                <Teammember image={"/asset/team/Manoela.jpg"} name={"Manoela Morais"} />
                <Teammember image={"/asset/team/Ajinkya.png"} name={"Ajinkya Datalkar"} />
                <Teammember image={"/asset/team/HelenTsai.png"} name={"Helen Tsai"} />
                <Teammember image={"/asset/team/Chimegsaikhan.jpg"} name={"Chimka Munkhbayar"} />
            </div>
        </div>
    )
}

export default Team