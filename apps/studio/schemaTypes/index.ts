
import { firePlaceType } from "./fireplaces";
import { furnitureType } from "./furniture";
import { journalType } from "./journal";
import { lightingType } from "./lighting";
import {
  collectionBlockType,
  featureBlockType,
  heroBlockType,
  pageType,
} from "./page";

export const schemaTypes = [
  firePlaceType,
  furnitureType,
  lightingType,
  journalType,
  pageType,
  // Page builder blocks
  heroBlockType,
  featureBlockType,
  collectionBlockType,
];
