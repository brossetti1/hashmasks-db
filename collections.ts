export type CategoryId = "masks" | "eyes" | "backgrounds" | "items";

type MaskId = number;

export type CollectionChild = {
  id: string;
  fullName: string;
  maskIds: MaskId[];
};

export type Collection = {
  id: string;
  fullName: string;
  category: CategoryId;
  children?: CollectionChild[];
  maskIds?: MaskId[];
};

export type CollectionsJson = Collection[];
