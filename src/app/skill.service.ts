import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private data: Skill[] =  [
    { name: 'Angular', experience: 3, proficiency: 8 },
    { name: 'C# .net', experience: 5, proficiency: 9 },
    { name: 'ASP.net Core', experience: 2, proficiency: 7 },
    { name: 'SQL server', experience: 4, proficiency: 10 },
    { name: 'ASP.net MVC', experience: 1, proficiency: 6 }
  ];

  getSkills(): Observable<Skill[]> {
    return of(this.data);
  }

}

interface Skill {
  name: string;
  experience: number;
  proficiency: number;
}
