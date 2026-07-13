
import sharp from "sharp";

const images = [
  "src/assets/Carol's grocery.png",
  "src/assets/ai-react.png",
  "src/assets/smargo-homepage.png",
];

for (const image of images) {
  const output = image.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  await sharp(image)
    .resize(1200)
    .webp({ quality: 80 })
    .toFile(output);

  console.log(`Converted: ${image} → ${output}`);
}
