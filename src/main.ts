import "reveal.js/reveal.css";
import "./style.scss";

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown";
import Notes from "reveal.js/plugin/notes";
import Highlight from "reveal.js/plugin/highlight";
import { flavors } from "@catppuccin/palette";
import Mermaid from "@benjilegnard/reveal.js-mermaid-plugin";

const { colors } = flavors.mocha;

let deck = new Reveal({
  // Mermaid must stay between Markdown and Highlight
  plugins: [Markdown, Mermaid, Notes, Highlight],
});

deck.initialize({
  progress: false,
  controls: false,
  slideNumber: "c/t",
  showSlideNumber: "speaker",
  hashOneBasedIndex: true,
  hash: true,
  transition: "none",
  history: true,
  mermaid: {
    theme: "base",
    themeVariables: {
      darkMode: true,
      background: colors.crust.hex,
      fontFamily: "Arial, Helvetica, sans-serif",
      primaryColor: colors.surface0.hex,
      primaryTextColor: colors.text.hex,
      primaryBorderColor: colors.mauve.hex,
      secondaryBorderColor: colors.pink.hex,
      secondaryColor: colors.mantle.hex,
      tertiaryColor: colors.base.hex,
      lineColor: colors.overlay2.hex,
      textColor: colors.subtext1.hex,
    },
  },
});
