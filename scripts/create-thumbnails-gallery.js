import * as fs from "fs/promises"; // Use promises for asynchronous operations
import sharp from "sharp";
import path from "path";

async function readWebpFiles(directory) {
  try {
    const files = await fs.promises.readdir(directory);
    const webpFiles = [];

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isFile() && path.extname(filePath) === ".webp") {
        webpFiles.push(filePath);
      }
    }

    const convert = sharp(files).webp({
      lossless: false,
      quality: 25,
    });

    await convert.toFile(newFilePath);
    console.info(`Converted to ${newFilePath}`);

    return webpFiles;
  } catch (error) {
    console.error("Error:", error);
    return []; // Handle the error gracefully and return an empty array
  }
}

const pth =
  "C:/Users/mario.chico/mine/template-web/public/archivo-page/1/gallery/*.webp"; // Replace with your actual directory path

readWebpFiles(pth)
  .then((files) => {
    if (files.length === 0) {
      console.info("No .webp files found in the directory.");
    } else {
      console.info("Found .webp files:", files);
    }
  })
  .catch((error) => console.error("Error reading files:", error));
