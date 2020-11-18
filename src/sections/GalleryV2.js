import React from "react";
import { useEdit, useMyData } from "../edit";


const defaults = {
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Gallery hds-container bg-white"
      },
      section: {
        label: "Section Styles",
        value:
          "hds-section-layout hds-section__v-spacing hds-section__h-spacing"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: 'Layout',
        value: 'grid grid-cols-2 md:grid-rows-2 gap-xs md:gap-sm lg:gap-sm'
      }
    }
  },
  image_1:{
    data:{
      container: {
        label: 'Container',
        value:'relative rounded grid-item col-span-2 row-span-2 sm:col-span-1 overflow-hidden min-h-40'
      },
      image_src:{
        label: 'Image Source',
        value: '/images/products/product-image-3.jpeg',
        image: true,
      }
    }
  },
  image_2:{
    data:{
      container:{
        label: 'Container',
        value:'relative rounded grid-item overflow-hidden min-h-40'
      },
      image_src:{
        label: 'Image Source',
        value: '/images/products/product-image-7.jpeg',
        image: true,
      }
    }
  },
  image_3:{
    data:{
      container:{
        label: 'Container',
        value:'relative rounded grid-item overflow-hidden min-h-40'
      },
      image_src:{
        label: 'Image Source',
        value: '/images/products/product-image-7.jpeg',
        image: true,
      }
    }
  },
  all_images:{
    data:{
      image_style: {
        label: 'Image Style',
        value: 'object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105'
      },
    }
  }
}

const GalleryV2 = ({id}) => {
  const _ = useEdit(defaults, id);
  // const a = JSON.stringify(_).length
  // const b = JSON.stringify(defaults).length

  // const [mount, set] = React.useState('wait')


// React.useEffect(()=>{
//   if (mount === 'go'){
//     return
//   }
//   const timer = setTimeout(()=>{
//     set('go')
//   },2000)

//   return ()=>clearTimeout(timer)
// },[mount])

  useMyData(id, defaults);


  
  return (
    <section className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className="">
          <div className={_.layout.data.layout.value}>
            <div className={_.image_1.data.container.value}>
              {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
              <img
                className={_.all_images.data.image_style.value}
                src={_.image_1.data.image_src.value}
                alt=""
              />
            </div>

            <div className={_.image_2.data.container.value}>
              {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
              <img
                className={_.all_images.data.image_style.value}
                src={_.image_2.data.image_src.value}
                alt=""
              />
            </div>

            <div className={_.image_3.data.container.value}>
              {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
              <img
                className={_.all_images.data.image_style.value}
                src={_.image_3.data.image_src.value}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
 
};

export default GalleryV2;
