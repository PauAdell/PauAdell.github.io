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
  "vespa-overview": {
    folder: "vespa/overview",
    hero: {
      file: "old_vespa_state.jpg",
      caption: "The Vespa as it arrived: fifty years old, dented, and not running.",
    },
    items: [
      { file: "disassembled_vespa.jpg", caption: "Everything came apart down to the last screw before anything else could happen." },
      { file: "cousin_cutting_metal.jpg", caption: "My cousin, an industrial engineer, helping out with the new metal structure." },
      { file: "chasis_before_primer.jpg", caption: "The chassis stripped back to bare metal after the rust and dents were dealt with." },
      { file: "chasis_after_primer.jpg", caption: "Primed and ready for paint." },
      { file: "first_time_two_new_wheels.jpg", caption: "Rolling on its own wheels for the first time." },
      { file: "electric_kit.jpg", caption: "The electric conversion kit, unpacked and labelled: hub motor, display, caliper and wiring." },
      { file: "soldering_swing_arm_prototype.jpg", caption: "Welding a custom bracket to mount the electric hub motor." },
      { file: "touching_up_chasis.jpg", caption: "Fitting and wiring the hub motor into the front fork." },
      { file: "taking_mesures.jpg", caption: "Test-fitting the motor and wheel into the primed fender." },
      { file: "cell.jpg", caption: "The battery is built from the same kind of cells as the home battery, one checked at a time." },
      { file: "preped_cells.jpeg", caption: "Dozens of cells, ready to be grouped into packs." },
      { file: "battery_packs_skeleton.jpg", caption: "The cells grouped into their plastic holders, before wrapping and wiring." },
      { file: "battery_packs_completed.jpg", caption: "The finished battery packs, wrapped and labelled." },
      { file: "checking_battery_pack_placement.jpg", caption: "Checking how the packs fit inside the body." },
    ],
  },
  "board-games": {
    folder: "board-games",
    hero: {
      file: "game-night.jpeg",
      caption:
        "A table covered in board games ready for 3/4 days, including Brass, Arnak, Terraforming Mars, and Nemesis. Can you find one you've actually played? 🤔",
    },
    items: [],
  },
};
