import { TestBed } from '@angular/core/testing';

import { SkillService } from './skill.service';

describe('SkillService', () => {
  let service: SkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return dummy data', (done) => {
    const dummyData = [
      { name: 'Angular', experience: 3, proficiency: 8 },
      { name: 'C# .net', experience: 5, proficiency: 9 },
      { name: 'ASP.net Core', experience: 2, proficiency: 7 },
      { name: 'SQL server', experience: 4, proficiency: 10 },
      { name: 'ASP.net MVC', experience: 1, proficiency: 6 }
    ];

    service.getSkills().subscribe((data) => {
      expect(data).toEqual(dummyData);
      done();
    });
  });
});
