import { Video } from './video';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class VideoService{

    private _getUrl = "/api/videos";
    private _postUrl = "/api/video";
    
    constructor(private _http: Http){}

    getVideos(){
        return this._http.get(this._getUrl)
            .map((response: Response) => response.json());
    }

    addVideo(video :Video){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(video), options)
            .map((response: Response) => response.json());
    }
}