// Photo sets for interest pages. A page opts in with `gallery: <key>` in its frontmatter.
// Files live in src/assets/<folder>/ and the array order is the order shown on the page.

export interface GalleryItem {
  file: string;
  caption: string;
}

export interface GalleryDef {
  folder: string;
  hero: GalleryItem;
  items: GalleryItem[];
}

export const galleries: Record<string, GalleryDef> = {
  "battery-overview": {
    folder: "battery/overview",
    hero: {
      file: "generic_front_view.jpg",
      caption:
        "The whole system: 15 series groups of cells, the MultiPlus inverter on the left and the voltage displays on top.",
    },
    items: [
      { file: "generic_side_view.jpg", caption: "The structure seen from the side." },
      { file: "structure_right_leg.jpg", caption: "The bottom right corner of the structure and its steel leg." },
      { file: "frontal_bottom_view.jpg", caption: "The filled third of the battery: modules of four cells in parallel." },
      { file: "side_bottom_view.jpg", caption: "The cell modules seen from the side." },
      { file: "close_side_bottom_view.jpg", caption: "A closer look at the modules and their busbar connections." },
      { file: "top_bottom_fractured.jpg", caption: "The filled modules and the empty positions above them, ready for more cells." },
      { file: "busbar_connections.jpg", caption: "Samsung INR21700-50E cells connected to a copper busbar." },
      { file: "colse_view_empty_busbar.jpg", caption: "A busbar in the empty part of the structure, between the 3D-printed cell holders." },
      { file: "copper_support.jpg", caption: "A copper busbar and its 3D-printed support." },
      { file: "displays_side_view.jpg", caption: "The row of voltage displays, one for each series group." },
      { file: "voltage_displays.jpg", caption: "Each display shows the voltage of its series group." },
    ],
  },
};
