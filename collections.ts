export type CollectionId =
  | "flowers"
  | "hearts"
  | "poem"
  | "tears"
  | "beethoven"
  | "halo"
  | "crown"
  | "rosetta"
  | "fibonacci"
  | "chess"
  | "voyager"
  | "cards"
  | "phoenix"
  | "mantra"
  | "mummy";

export type CategoryId = "masks" | "eyes" | "backgrounds" | "items";

type MaskId = number;

export type CollectionsJson = {
  fullNames: Record<CollectionId, string>;
  categories: Record<CategoryId, CollectionId[]>;
  ids: Record<CollectionId, MaskId[]>;
};
