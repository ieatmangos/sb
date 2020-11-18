import React from "react";
import { useEdit, useMyData } from "../edit";


const defaults = {
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Contact hds-container bg-white"
      },
      section: {
        label: "Section Styles",
        value:"hds-section-layout hds-text-color hds-section__v-spacing hds-section__h-spacing"
      }
    }
  },
  title: {
    data:{
      container: {
        label: "Title Container",
        value: 'flex justify-end mb-xs sm:mb-sm'
      },
      title: {
        label: 'Title',
        value: 'Hello,there! we’ll be glad to here from you.'
      },
      title_style: {
        label: 'Title Style',
        value: 'hds-title__large font-bold sm:w-1/2 '
      }
    }
  }
}
const ContactV1 = ({id}) => {
  const _ = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
            <div className={_.title.data.container.value}>
                <h1 className={_.title.data.title_style.value}>
                {_.title.data.title.value}
                </h1>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="pb-sm sm:pb-0 sm:w-1/2 sm:order-2 border-b sm:border-0">
                <input
                  className="hds-form-input w-full mb-sm"
                  placeholder="Email"
                />
                <input
                  className="hds-form-input w-full mb-sm"
                  placeholder="Subject"
                />
                <textarea
                  className="hds-form-input w-full mb-sm"
                  placeholder="Write something..."
                />
                <button
                  className="hds-btn hds-btn__primary w-full sm:w-auto"
                  type="button"
                >
                  Send
                </button>
              </div>

              <div className="hds-copy pt-sm sm:pt-0 sm:w-1/2 sm:pr-md sm:order-1">
                <div className="mb-sm">
                  <p className="mb-xs font-bold">Phone</p>
                  <p className="">+1 848 493 944</p>
                </div>

                <div className="mb-sm">
                  <p className="mb-xs  font-bold">Address</p>
                  <p className="">508 Bridle Avenue Newnan, GA 30263</p>
                </div>

                <div className="mb-sm">
                  <p className="mb-xs  font-bold">Socials</p>
                  <div className="flex">
                    <img
                      className="mr-xs"
                      src="/images/svg/instagram.svg"
                      alt="instagram"
                    />
                    <img
                      className="mr-xs"
                      src="/images/svg/facebook.svg"
                      alt="facebook"
                    />
                    <img
                      className="mr-xs"
                      src="/images/svg/google.svg"
                      alt="google"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
       
    </section>
  );
};
export default ContactV1;
