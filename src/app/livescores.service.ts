import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs'
import {Detail} from './details.model';

@Injectable({
  providedIn: 'root'
})
export class LivescoresService {

  constructor(private http: HttpClient) { }

  private details: Detail[] = [];
  
/*Read from apifootapi*/
  getLivescoresData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_events&match_live=1&from=2018-12-01&to=2019-10-27&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getEPLFxturesData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_events&from=2018-08-01&to=2020-11-01&league_id=62&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getEPLStandingData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=62&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getLaLigaFxturesData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_events&from=2018-08-01&to=2020-11-01&league_id=109&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getLaLigaStandingData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_standings&league_id=109&APIkey=62&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getSeriaAFxturesData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_events&from=2018-08-01&to=2020-11-01&league_id=79&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getLaSeriaAStandingData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_standings&league_id=79&APIkey=62&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getBundesligaFxturesData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_events&from=2018-08-01&to=2020-11-01&league_id=117&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getbundesligaStandingData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_standings&league_id=117&APIkey=62&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getLigue1FxturesData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_events&from=2018-08-01&to=2020-11-01&league_id=127&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getLigue1StandingData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_standings&league_id=127&APIkey=62&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getPrimeiraLigaFxturesData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_events&from=2018-08-01&to=2020-11-01&league_id=150&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getprimeiraLigaStandingData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_standings&league_id=150&APIkey=62&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getEredivisieFxturesData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_events&from=2018-08-01&to=2020-11-01&league_id=137&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getEredivisieStandingData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_standings&league_id=137&APIkey=62&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getfirstDivisionAFxturesData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_events&from=2018-08-01&to=2020-11-01&league_id=144&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }

  getfirstDivisionAStandingData(): Observable<any> {
    return this.http.get("https://apifootball.com/api/?action=get_standings&league_id=144&APIkey=62&APIkey=06a8ae424e60c95d71b1db7ec151eef29fd4e24a9c9b6b099cd3692fa0eea7bf");
  }
 
/* Get dat from our server*/
  getDetailData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/details");
  }

private posts: Detail[] = [];

getDetails() {
  return [...this.posts];
}
 /*Add data to the server*/
addDetail(fullname:string, city:string,country:string, telephone:string,email:string,message:string): Observable<any> {
  const detail: Detail = {fullname: fullname, city: city,country: country,telephone: telephone,email: email,message: message};
  return this.http.post("http://localhost:8081/api/details",detail);
}
/*Delete data from the server*/
deleteDetail(id: string):Observable<any>{ 
  return this.http.delete("http://localhost:8081/api/details/"+id); }

  getDetail(id: string): Observable<any> { 
  return this.http.get("http://localhost:8081/api/details/"+id); }

  /*Update data in the server*/
  updateDetail(id:string,fullname:string, city:string,country:string, telephone:string,email:string,message:string): Observable<any> { 
  const detail: Detail = {fullname: fullname, city: city,country: country,telephone: telephone,email: email,message: message}; 
  return this.http.put("http://localhost:8081/api/details/"+id, detail); }
  
}
