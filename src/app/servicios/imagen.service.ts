import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getDownloadURL, list, ref, uploadBytes } from '@firebase/storage';

@Injectable({
  providedIn: 'root'
})

export class ImagenService {
  url: string = '';
  
  constructor(private storage: AngularFireStorage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage.storage, `imagen/` + name);
    uploadBytes(imgRef, file)
      .then(response =>{ this.getImages()})
      .catch(error => console.log(error)
      )
  }
  
  getImages() {
    const imagesRef = ref(this.storage.storage, 'imagen');
    list(imagesRef)
      .then(async response => {
        for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la url es :" + this.url)
      }
      })
      .catch(error => console.log(error))
  }

}

