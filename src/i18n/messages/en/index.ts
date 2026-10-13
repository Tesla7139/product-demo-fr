import { common } from "./common";
import { site } from "./site";
import { demo } from "./demo";
import { layout } from "./layout";
import { sections } from "./sections";
import { pages } from "./pages";
import { checkout } from "./checkout";
import { tour } from "./tour";
import { mocks } from "./mocks";

/** English is the source dictionary; every other language must match its shape. */
export const en = { common, site, demo, layout, sections, pages, checkout, tour, mocks };
export type Dict = typeof en;
