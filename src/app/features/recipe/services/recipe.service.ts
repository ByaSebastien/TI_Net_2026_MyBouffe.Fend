import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {RecipeFormDtoModel} from '../models/recipe-form-dto.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private readonly _httpClient: HttpClient = inject(HttpClient);

  private readonly apiUrl = `${environment.API_URL}/recipe`;

  postRecipe(form: RecipeFormDtoModel) {
    let params = new HttpParams().set('lang','fr');
    return this._httpClient.post<void>(this.apiUrl, form, { params: params });
  }
}
