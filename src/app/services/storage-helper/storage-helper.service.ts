import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {

    constructor(private storage: Storage) { }

    public storeObject(key: string, value: any) {
        this.storage.set(key, value);
    }

    public retrieveObject(key: string) {
        return this.storage.get(key).then((val) => {
            return val;
        })
    }
}
