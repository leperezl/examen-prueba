import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HeroDetail } from "./hero-detail";
import { Observable } from 'rxjs';
import { Component, OnInit} from '@angular/core';


const API_URL= "../../assets/";
const heroes = 'heroes.json';
const heroesDetail= ["heroes1.json","heroes2.json", "heroes3.json", "heroes4.json"]

@Injectable()
export class HeroService {

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(API_URL + heroes);
  }

   getHeroDetail(id): Observable<HeroDetail> {
    return this.http.get<HeroDetail>(API_URL + heroesDetail[id-1]);
  }

}