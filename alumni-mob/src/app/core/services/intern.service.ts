import { Injectable } from '@angular/core';
import { InternType } from '../types/intern/intern-type';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable, take } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  private _interns: Array<InternType> = []
  private readonly URI: string = 'http://localhost:3000/api/v1/intern'
  private _intern: InternType | null = null

  constructor(
    private _httpClient: HttpClient,
    private _storageService: StorageService
  ) {}

  public companyFilter(company: string): Array<InternType> {
    throw new Error(`Not implemented yet`)
  }
  
  /**
   * 
   * @returns Observable<InternType[]>
   */
  public findAll(): Observable<Array<InternType>> {
    const token: string = this._storageService.retrieve('auth')
    const internId: string = token?.split('.')[0]
    return this._httpClient.get<Array<InternType>>(
      this.URI
    ).pipe(
      take(1),
      map((interns: Array<InternType>) => {
        return interns.filter((intern: InternType) => intern._id !== internId)
      })
    )
  }

  set intern(intern: InternType) {
    this._intern = intern
  }

  get intern(): InternType | null {
    return this._intern
  }
}
