// data.js
const imageTemplate = {
    src: "./pix/gifs/default.gif",
    alt: "default gif",
    width: "184px",
    height: "124px",
  };
  
  const hello_kitty = { ...imageTemplate, src: "./pix/gifs/cute/hello-kitty.gif", alt: "hello kitty gif ;3", width: "96px", height: "91px" };
  
  const excavator = { ...imageTemplate, src: "./pix/gifs/construction.gif", alt: "excavator gif ;3" };
  
  const demon_quote = '"I hate wasted potential, that shit.. crushes your spirit. It really does, it crushes your sou-" -Demon';
  
  export { imageTemplate, hello_kitty, excavator, demon_quote };
  