import React from "react";
import './style.css'
let text =`Раннее достоверное упоминание о чаепитии относится к третьему веку нашей эры, в медицинском тексте, написанном китайским врачом Хуа Туо.
Он был популяризирован как напиток для отдыха во времена китайской династии Тан, а впоследствии чаепитие распространилось и на другие страны Восточной Азии. Португальские священники и торговцы привезли его в Европу в 16 веке.
В 17 веке употребление чая стало модным среди англичан, которые начали массово выращивать чай в Британской Индии.`
let textarr = text.split(/[\n\r]/g)
console.log(textarr)
export default function Main({data}) {
    console.log(data)
    return(
        <main>
            <h1>Devs Blog</h1>
            <div className="cards">
                {data.map(post=> <div className="post">Post name: {post.name}

                <img width={300} src={post.image} alt="/"/>
                <div className="post-text">{post.description}</div>
                </div>)}
            </div>
            
            {/* {textarr.map((post,i)=><div key={i} className='post'>{post.split('.').map((par,i,arr)=>i !== arr.length-1 && <p key={i} >{par}.</p>)}</div>)} */}
            
        </main>
    )
}