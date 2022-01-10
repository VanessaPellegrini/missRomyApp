import { Injectable } from '@angular/core';
import { collection, deleteDoc, doc, Firestore, setDoc, updateDoc } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  item$: Observable<any[]>;
  studentCollection: any;
private dbPath = "/estudiante";

  constructor(
    private afs: Firestore,
    //private documentReference:DocumentReference
  ) {
    this.studentCollection = collection(this.afs, this.dbPath);
    this.item$ = collectionData(this.studentCollection);
  }

  createStudent(classRoom: any, docName:string) {
    return setDoc(doc(this.afs, this.dbPath, docName), classRoom);
  }

  updateStudent(docName:string, value: any){
    const classRef = doc(this.afs, this.dbPath, docName)
    return updateDoc( classRef, value);
  }

  deleteStudent(key: any) {
    return deleteDoc(doc(this.afs, this.dbPath, key));
  }
}
