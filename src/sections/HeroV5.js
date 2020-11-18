import React from "react";
import { useEdit, EditMyData } from "../edit";

const defaults = {
  title: {
    label: "Title",
    value: "Some tools allow the incorpration",
    state: "open"
  },
  title_styles: {
    label: "Title Styles",
    value: "hds-title__medium mb-xs md:mb-sm font-black",
    state: "closed",
    text_area: true,
  },
  body: {
    label: "Body Text",
    value: `Wireframes are generally created by business analysts, user experience designers, developers, visual designers, and by those with expertise`,
    state: "open",
    text_area: true,
  },
  body_styles: {
    label: "Body Styles",
    value: "hds-copy mb-sm md:mb-md md:px-xs",
    state: "closed",
    text_area: true,
  },
  background_styles: {
    label: "Background Styles",
    value: "py-lg px-sm bg-white md:bg-primary",
    state: "closed"
  },

};
const HeroV5 = ({ id, fn, comesFromIframe }) => {
  const data = useEdit(defaults, id);

  const { setEditMyData } = React.useContext(EditMyData);

  React.useEffect(() => {
    // Grabs its data and default data from here
    // Uses its instance ID from CompiledPageItem
    // Sets that to a global context value, editMyData.
    if (!comesFromIframe) {
      const obj = { id, defaults };
      setEditMyData((c) => [...c, obj]);
    }
  }, [id, setEditMyData, comesFromIframe]);

  return (
    <section className="Hero hds-container">
      <div className="hds-text-color">
        <div className={data.background_styles.value}>
          <div className="mx-auto max-w-3xl text-center">
            <h4 className={data.title_styles.value}>
            {data.title.value}
            </h4>
            <p className={data.body_styles.value}>
            {data.body.value}
            </p>

            <div className="flex justify-center items-center relative rounded overflow-hidden min-h-40 sm:min-h-88 md:min-h-104">
              <div className="absolute inset-0 w-full h-full bg-primary md:bg-white" />
              <img
                className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                src="/images/products/product-image.jpeg"
                alt=""
              />
              <button className="absolute z-20">
                <img src="/images/svg/triangleInCircle.svg" alt="play" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV5;
