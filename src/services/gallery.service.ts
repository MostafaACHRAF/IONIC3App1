import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by Mostafa ACHRAF on 11/25/2017.
 */

@Injectable()
export class GalleryService {

  public host:string = "https://pixabay.com/api/";

  constructor(private http:Http) {}

  chercher(query:string, size:number, page:number) {
    return this.http.get(this.host + "?key=6839936-b4bbae23df6f86d7fc5f5cc54&q="+ query + "&per_page=" + size + "&page=" + page)
      .map(resp => resp.json());
  }

}
