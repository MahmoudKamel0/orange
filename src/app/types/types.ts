/**
       * Interface for image properties.
       * Represents the structure of a single image object used in the application.
 */


export interface img {
       /** use this is type when you want use slider type and must send @props as object  */
       props: {
              className?:string,
              src: {
                     src:string,
                     width:number,
                     height:number
              },
              alt:string
       }

}
export interface sliderPhotos {
       children: img[],
       countSlide: {
              sm:number,
              md?:number,
              lg?:number,
       }
}
export interface sectionServicesItem {
       children: img ,
       title:string,
       para:string
}
export interface sectionServices {
       props:sectionServicesItem
}
export interface sliderSection {
       children: sectionServices[],
       countSlide: {
              sm:number,
              md?:number,
              lg?:number,
       }
}
