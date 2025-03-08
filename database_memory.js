import { randomUUID } from 'node:crypto'
export class DatabaseMemory {
  #videos = new Map();

  list(){
    return this.#videos.values;
  }

  create(video){
    const videoId = randomUUID();

    this.#videos.set(videoId ,video);
  }

  update(video){
    this.#videos.set(videoId ,video);
  }

  delete(id){
    this.#videos.delete(id);
  }
}