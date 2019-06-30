import React from 'react'
import classes from './products.module.css'
import Svg from '../../assets/svg/product/productSvg'

const Products= ()=>(
    <section id='products' className={classes.products}>
        <div className={classes.products__header}>
            <h2>Products we are best known for</h2>
            <p>We pride ourselves for having the biggest balls in the business, because we have the absolute best products</p>
        </div>
        <div className={classes.products__content}>
            <article className={classes.products__content__item}>
            <Svg styles={svgStyles.icons}>
            <path id="sofa"  d="M75.022,18.838V8.475C75.022,3.909,71.7.1,67.622.1H13.666c-4.081.019-7.4,3.827-7.4,8.392V18.857C2.659,19.481,0,22.948,0,27.041V53.866a1.881,1.881,0,0,0,1.693,1.971H3.9v4.831a1.927,1.927,0,0,0,1.744,1.989h11.5a1.886,1.886,0,0,0,1.677-1.989v-4.85H62.507v4.831a1.873,1.873,0,0,0,1.676,1.989h11.5a1.926,1.926,0,0,0,1.744-1.989V55.817h2.2a1.88,1.88,0,0,0,1.694-1.97V27.022C81.288,22.93,78.629,19.463,75.022,18.838ZM9.653,8.493c0-2.463,1.8-4.584,4.013-4.584H67.638c2.2,0,4.014,2.1,4.014,4.584V19.159a8.1,8.1,0,0,0-5.08,7.881v4.168H14.733V27.041a8.118,8.118,0,0,0-5.08-7.881Zm56.9,26.485v4.168H14.733V34.978ZM15.411,58.849H7.282V55.817h8.129Zm58.6,0H65.877V55.817h8.129Zm3.9-6.82H3.387V27.022a4.231,4.231,0,0,1,3.98-4.452,4.231,4.231,0,0,1,3.98,4.452V41.1a1.8,1.8,0,0,0,1.744,1.837H68.2A1.8,1.8,0,0,0,69.942,41.1V27.022a4,4,0,1,1,7.959,0Zm0,0" transform="translate(0 -0.102)"/>
            </Svg>
                <h4>Machinery</h4>
                <p>We provide tools for both small and large scale operations</p>
            </article>
            <article className={classes.products__content__item}>
                <Svg styles={svgStyles.icons}>
                    <path id="Path_25" data-name="Path 25" class="cls-1" d="M77.871,32.422l-5.761-.977A32.527,32.527,0,0,0,69.8,25.855l3.395-4.749a5.055,5.055,0,0,0-.549-6.532L67.533,9.465A5.033,5.033,0,0,0,63.95,7.973a4.982,4.982,0,0,0-2.932.943l-4.766,3.395a32.189,32.189,0,0,0-5.795-2.383L49.5,4.236A5.065,5.065,0,0,0,44.491,0H37.273a5.065,5.065,0,0,0-5.006,4.235l-.994,5.829A31.726,31.726,0,0,0,25.7,12.414L20.985,9.019a5.064,5.064,0,0,0-6.532.549L9.327,14.677a5.075,5.075,0,0,0-.549,6.532l3.429,4.818a31.772,31.772,0,0,0-2.28,5.606l-5.692.96A5.065,5.065,0,0,0,0,37.6v7.218a5.065,5.065,0,0,0,4.235,5.006l5.829.994a31.726,31.726,0,0,0,2.349,5.572l-3.378,4.7a5.055,5.055,0,0,0,.549,6.532l5.109,5.109a5.033,5.033,0,0,0,3.583,1.492,4.982,4.982,0,0,0,2.932-.943l4.818-3.429a32.434,32.434,0,0,0,5.418,2.229l.96,5.761a5.065,5.065,0,0,0,5.006,4.235h7.235a5.065,5.065,0,0,0,5.006-4.235l.977-5.761a32.526,32.526,0,0,0,5.589-2.315l4.749,3.395a5.033,5.033,0,0,0,2.949.943h0A5.033,5.033,0,0,0,67.5,72.609L72.608,67.5a5.075,5.075,0,0,0,.549-6.532L69.762,56.2a32.294,32.294,0,0,0,2.315-5.589l5.761-.96a5.065,5.065,0,0,0,4.235-5.006V37.428A5,5,0,0,0,77.871,32.422Zm-.394,12.224a.444.444,0,0,1-.377.446l-7.2,1.2a2.3,2.3,0,0,0-1.852,1.7,27.446,27.446,0,0,1-2.983,7.184,2.318,2.318,0,0,0,.1,2.52L69.4,63.659a.467.467,0,0,1-.051.583l-5.109,5.109a.435.435,0,0,1-.326.137.421.421,0,0,1-.257-.086l-5.949-4.235a2.317,2.317,0,0,0-2.52-.1,27.446,27.446,0,0,1-7.184,2.983,2.276,2.276,0,0,0-1.7,1.852l-1.217,7.2a.444.444,0,0,1-.446.377H37.427a.444.444,0,0,1-.446-.377l-1.2-7.2a2.3,2.3,0,0,0-1.7-1.852,28.5,28.5,0,0,1-7.029-2.88,2.373,2.373,0,0,0-1.166-.309,2.258,2.258,0,0,0-1.337.429l-6,4.269a.51.51,0,0,1-.257.086.459.459,0,0,1-.326-.137L12.859,64.4a.465.465,0,0,1-.051-.583L17.025,57.9a2.347,2.347,0,0,0,.1-2.537,27.187,27.187,0,0,1-3.017-7.166,2.348,2.348,0,0,0-1.852-1.7L5.006,45.263a.444.444,0,0,1-.377-.446V37.6a.444.444,0,0,1,.377-.446l7.149-1.2a2.318,2.318,0,0,0,1.869-1.714,27.418,27.418,0,0,1,2.932-7.2,2.289,2.289,0,0,0-.12-2.5l-4.269-6a.467.467,0,0,1,.051-.583l5.109-5.109a.435.435,0,0,1,.326-.137.421.421,0,0,1,.257.086l5.915,4.218a2.347,2.347,0,0,0,2.537.1,27.187,27.187,0,0,1,7.166-3.017,2.348,2.348,0,0,0,1.7-1.852L36.861,4.99a.444.444,0,0,1,.446-.377h7.218a.444.444,0,0,1,.446.377l1.2,7.149a2.318,2.318,0,0,0,1.714,1.869,27.828,27.828,0,0,1,7.355,3.017,2.318,2.318,0,0,0,2.52-.1l5.915-4.252a.51.51,0,0,1,.257-.086.459.459,0,0,1,.326.137l5.109,5.109a.465.465,0,0,1,.051.583l-4.235,5.949a2.317,2.317,0,0,0-.1,2.52,27.446,27.446,0,0,1,2.983,7.184,2.276,2.276,0,0,0,1.852,1.7l7.2,1.217a.444.444,0,0,1,.377.446v7.218Z" transform="translate(0 -0.001)"/>
                    <path id="Path_26" data-name="Path 26" class="cls-1" d="M153.81,136a17.711,17.711,0,1,0,17.71,17.711A17.722,17.722,0,0,0,153.81,136Zm0,30.792a13.081,13.081,0,1,1,13.081-13.081A13.09,13.09,0,0,1,153.81,166.793Z" transform="translate(-112.766 -112.684)"/>
                </Svg>
                <h4>Sports and Outdoors</h4>
                <p>We provide tools for both small and large scale operations</p>
            </article>
            <article className={classes.products__content__item}>
                <svg></svg>
                <h4>Furniture</h4>
                <p>We provide tools for both small and large scale operations</p>
            </article>
            <article className={classes.products__content__item}>
                <svg></svg>
                <h4>Home Appliances</h4>
                <p>We provide tools for both small and large scale operations</p>
            </article>
        </div>
    </section>
)

export default Products

const svgStyles= {
   icons:{
        fill: 'yellow',
        position:'absolute',
        top: 35,
        height:30,
         width:50
    },
   


}