import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Text hds-container bg-white"
      },
      section: {
        label: "Section Styles",
        value:
          "hds-section-layout hds-text-color hds-section__v-spacing hds-section__h-spacing w-full"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout Grid",
        value: "grid"
      }
    }
  },
  title: {
    data: {
      title_1: {
        label: "Title 1",
        value: "Say"
      },
      title_2:{
        label: 'Title 2 - Colored Span',
        value: 'Goodbye'
      },
      title_3:{
        label: 'Title 3',
        value: 'to Sprays'
      },
      title_style:{
        label: 'Title Style',
        value: 'max-w-sm mb-sm mr-xs hds-title__large hds-title-color hds-title-color font-black mb-sm'
      },
      title_colored_style:{
        label: 'Colored Span Style',
        value: 'text-primary'
      }
    }
  },
  body:{
    data:{
      body:{
        label: 'Body',
        value:' With Thermacell’s Zone Mosquito Repellent technology, stop mosquitoes before they get close enough to bite or bother you. Now you can say goodbye to messy chemical sprays and lotions.'
      },
      style:{
        label: 'Body Style',
        value: 'md:col-start-2 max-w-xl mb-sm ml-auto hds-copy mb-sm'
      }
    }
  }
};

const TextV1 = ({ id }) => {
  const edit = useEdit(defaults, id);
  useMyData(id, defaults);

  return (
    <section className={edit.section_styles.data.container.value}>
      <div className={edit.section_styles.data.section.value}>
          <div className={edit.layout.data.layout.value}>
            <h4 className={edit.title.data.title_style.value}>
            {edit.title.data.title_1.value} <span className= {edit.title.data.title_colored_style.value} > {edit.title.data.title_2.value} </span>  {edit.title.data.title_3.value} 
            </h4>
            <p className={edit.body.data.style.value}>
            {edit.body.data.body.value}
            </p>
          </div>
        </div>
    </section>
  );
};
export default TextV1;
