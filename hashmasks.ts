export type Mask = {
  index: string;
  character: string;
  mask: string;
  eyes: string;
  skin: string;
  item: string;
};

export type Traits = "character" | "mask" | "eyes" | "skin" | "item";

type MaskId = string;

export type HashmasksJson = Record<MaskId, Mask>;
