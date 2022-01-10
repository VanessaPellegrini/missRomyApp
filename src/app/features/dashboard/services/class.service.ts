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
import { getDocs } from 'firebase/firestore';
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
  classCollection: any;

  private dbPath = "/clase";

  constructor(
    private afs: Firestore,
    //private documentReference:DocumentReference
  ) {
    this.classCollection = collection(this.afs, this.dbPath);
    this.item$ = collectionData(this.classCollection);
  }

  createClass(classRoom: any, docName:string) {
    return setDoc(doc(this.afs, this.dbPath, docName), classRoom);
  }

  updateClass(docName:string, value: any){
    const classRef = doc(this.afs, this.dbPath, docName)
    return updateDoc( classRef, value);
  }

  deleteClass(key: any) {
    return deleteDoc(doc(this.afs, this.dbPath, key));
  }

}
