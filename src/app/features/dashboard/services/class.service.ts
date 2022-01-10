import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  onSnapshot,
  docSnapshots,
  updateDoc,
  deleteDoc,
  setDoc,
  addDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Class {
  id?: string;
  name: string;
  description: string;
  teacher: string;
  students: string[];
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})

export class ClassService {
  item$: Observable<any[]>;
  collection: any;

  private dbPath = "/clase";

  constructor(
    private afs: Firestore,
    //private documentReference:DocumentReference
  ) {
    this.collection = collection(this.afs, this.dbPath);
    this.item$ = collectionData(this.collection)
  }

  createClass(classRoom: any) {
    return addDoc(collection(this.afs, this.dbPath), classRoom);
  }

  updateClass(key: string, value: any): Promise<void> {
    return updateDoc(this.collection, key, value);
  }

  deleteClass(key: any) {
    return deleteDoc(doc(this.afs, this.dbPath, key));
  }

}
