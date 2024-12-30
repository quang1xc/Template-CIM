import { inject, Injectable } from '@angular/core';
// import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    // private utilsService = inject(UtilsService);

    setItem(val: unknown, key: string) {
        const isObject = typeof val === 'object' && val !== null;
        // localStorage.setItem(key, isObject ? JSON.stringify(val) : val.toString());
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
