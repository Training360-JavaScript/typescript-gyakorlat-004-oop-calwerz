// Importáld be a HumanHero és TransformerHero osztályokat.

import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero(1, "Nyx", "female", 22, 75),
    new HumanHero(2, "Visor", "male", 34, 100),
    new HumanHero(3, "Keel", "male", 27, 125),
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero(11, "Trans János", 1, 12, "Audi"),
    new TransformerHero(12, "Trans Ferenc", 1, 12, "VW"),
    new TransformerHero(13, "Trans Béla", 1, 12, "Porsche"),
];
