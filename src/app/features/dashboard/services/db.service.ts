import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DBService {
  item$: Observable<any[]>;
  classCollection: any;

  constructor(
    private afs: Firestore,
  ) {}

  get(dbPath:string){
    this.classCollection = collection(this.afs, dbPath);
    return this.item$ = collectionData(this.classCollection);
  }

  create(dbPath:string, docName:string, type: any) {
    return setDoc(doc(this.afs, dbPath, docName), type);
  }

  update(dbPath:string,docName:string, value: any){
    const classRef = doc(this.afs, dbPath, docName)
    return updateDoc( classRef, value);
  }

  delete(dbPath:string,key: any) {
    return deleteDoc(doc(this.afs, dbPath, key));
  }

}
