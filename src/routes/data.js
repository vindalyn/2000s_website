// data.js
const imageTemplate = {
    src: "./pix/gifs/default.gif",
    alt: "default gif",
    width: "184px",
    height: "124px",
  };
  
  const hello_kitty = { ...imageTemplate, src: "./pix/gifs/cute/hello-kitty.gif", alt: "hello kitty gif ;3", width: "96px", height: "91px" };
  
  const excavator = { ...imageTemplate, src: "./pix/gifs/construction.gif", alt: "excavator gif ;3" };
  
  const kris_where_are_we ={ ...imageTemplate, src: "./pix/gifs/Kris-where-are-we.png", alt: "kris where the hell are we? png ;3", width: "90px", height: "70px" };


  const demon_quote = '"I hate wasted potential, that shit.. crushes your spirit. It really does, it crushes your sou-" -Demon';
  const ralsei_quote = '"Kris, where the HELL are we?" - Ralsei';
  export { imageTemplate, hello_kitty, excavator, demon_quote, ralsei_quote, kris_where_are_we };
  