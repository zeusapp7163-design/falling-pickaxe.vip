import {
  createOpenGraphImage,
  openGraphContentType,
  openGraphSize,
} from "@/components/OpenGraphImage";
import { getLandingConfig } from "@/content";

export const alt = "Falling Pickaxe — Play Online";
export const size = openGraphSize;
export const contentType = openGraphContentType;

export default function EnglishOpenGraphImage() {
  return createOpenGraphImage(getLandingConfig("en"));
}
