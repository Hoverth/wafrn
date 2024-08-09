import { logger } from './logger'

const sharp = require("sharp");

/* eslint-disable max-len */
const fs = require('fs')
const FfmpegCommand = require('fluent-ffmpeg')
const gm = require('gm')
export default async function optimizeMedia(inputPath: string): Promise<string> {
  const fileAndExtension = inputPath.split('.')
  const originalExtension = fileAndExtension[1].toLowerCase()
  fileAndExtension[1] = 'avif'
  let outputPath = fileAndExtension.join('.')
  switch (originalExtension) {
    case 'pdf':
      break
    // eslint-disable-next-line no-fallthrough
    case 'webm':
      fileAndExtension[0] = fileAndExtension[0] + '_processed'
    // eslint-disable-next-line no-fallthrough
    case 'mp4':
    case 'ogg':
    case 'aac':
    case 'mp3':
    case 'wav':
    case 'oga':
    case 'm4a':
    case 'mov':
    case 'mkv':
    case 'av1':
      fileAndExtension[1] = 'mp4'
      outputPath = fileAndExtension.join('.')
      // eslint-disable-next-line no-unused-vars
      new FfmpegCommand(inputPath)
        .videoCodec('x264')
        .audioCodec('aac')
        .save(outputPath)
        .on('end', () => {
          try {
            fs.unlinkSync(inputPath, () => {
              logger.trace('media converted')
            })
          } catch (exc) {
            logger.warn(exc)
          }
        })
      break
    default:
      const metadata = await sharp(inputPath).metadata();
      if(metadata.delay) {
        fileAndExtension[1] = 'webp'
        outputPath = fileAndExtension.join('.')
      }
      await sharp(inputPath, { animated: true })
        .rotate()
        .toFile(outputPath)
        fs.unlinkSync(inputPath)
  }
  return outputPath
}
