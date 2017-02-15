import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username='ajithvallabai';
    private client_id='4c6d459d9126480bfccb';
    private client_secret='e0c5b505ae663ae7f5ecb5e31a8e70c87bd5c2e1';

constructor(private _http:Http){
    console.log('Github Service Init...');
}

getUser(){
    return this._http.get('https://api.github.com/users/'+this.username)
    .map(res => res.json());
    }


    getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
    .map(res => res.json());
    }
    updateUsername(username:string){
        this.username=username;
    }

}
