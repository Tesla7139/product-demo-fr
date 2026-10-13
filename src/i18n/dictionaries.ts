import type { Locale } from "./config";
import { en, type Dict } from "./messages/en";
import { fr } from "./messages/fr";
import { de } from "./messages/de";
import { es } from "./messages/es";
import { it } from "./messages/it";
import { nl } from "./messages/nl";
import { sv } from "./messages/sv";
import { pl } from "./messages/pl";

const dictionaries: Record<Locale, Dict> = { en, fr, de, es, it, nl, sv, pl };

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
