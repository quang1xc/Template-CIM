import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    setItem(val: any, key: string) {
      console.log('StorageService.setItem', val, key);
        const isObject = typeof val === 'object' && val !== null;
        localStorage.setItem(key, isObject ? JSON.stringify(val) : val.toString());
    }

    getItem<T>(key: string): T {
        const val = localStorage.getItem(key);
        return JSON.parse(JSON.stringify(key)) as T;
    }

    removeItem(key: string) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}
