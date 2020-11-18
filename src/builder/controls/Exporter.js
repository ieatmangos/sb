import React from "react";
import { Global } from "../../global";

const compileStatic = {
  title: "Starting Block",
  html: "",
  css_external: "https://csb-vv9vg.stephen3.vercel.app/static/css/main.css",
  js_external:
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
  js: `// Open & Close mobile menu
  var openMenu = document.getElementById('open-menu');
  var closeMenu = document.getElementById('close-menu');
  var menuWrapper = document.getElementById('mobile-menu-wrapper');

  openMenu.addEventListener('click', toggleClass);
  closeMenu.addEventListener('click', toggleClass);

  function toggleClass() {
    menuWrapper.classList.toggle('hidden'); 
  }

  // Slide sub navs on Mobile
  $('.has-children > a').click(function(e) {
    e.preventDefault();
    $(this).siblings('ul').removeClass('transform');
  });
  $('.go-back').click(function(e) {
    e.preventDefault();
    $(this).closest('.has-children').find('ul:eq(0)').addClass('transform');
  });

  // Slide out cart
  $('#cart-trigger').click(function(e) {
    e.preventDefault();
    $('#cart-container').removeClass('hidden');
    setTimeout(function() {
      $('#cart-container').addClass('bg-opacity-50');
      $('#cart-wrapper').removeClass('transform');
    });
  });

  // Close Cart
  $('#close-cart').click(function(e) {
    e.preventDefault();
    $('#cart-container').removeClass('bg-opacity-50');
    $('#cart-wrapper').addClass('transform');
    setTimeout(function() {
      $('#cart-container').addClass('hidden');
    }, 500);
  });
  `
};

// ============================================== //
export const Exporter = ({ hideExport }) => {
  const { items } = React.useContext(Global);
  const [html, setHtml] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      const _ref = document.getElementById("get-layout-html");
      if (!_ref) {
        return;
      }
      const ref = Array.from(_ref.children);
      let rawHtml = [];
      _ref &&
        ref.forEach((parent) => {
          rawHtml.push(parent.children[0].innerHTML);
        });

      const compile = {
        ...compileStatic,
        html: rawHtml
          .join(" ")
          .replace(/\/images/g, "//xic37.sse.codesandbox.io/images")
      };

      setHtml(JSON.stringify(compile));
    }, 1000);
  }, [items]);

  if (hideExport) {
    return null;
  }
  return (
    <div className="">
      <form
        action="https://codepen.io/pen/define"
        method="POST"
        target="_blank"
        className="bg-transparent"
      >
        <input className="bg-transparent" type="hidden" name="data" value={html} />
        <input
          // onClick={}
          type="submit"
          value="EXPORT"
          className="text-sb-teal cursor-pointer bg-transparent"
        />
      </form>
    </div>
  );
};
