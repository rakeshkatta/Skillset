
import { Component } from '@angular/core';
import { SkillService } from './../skill.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})

export class SkillSetComponent {
  skillName!: string;
  experience!: number;
  proficiency!: number;
  proficiencyOptions: number[] = [1,2,3,4,5,6,7,8,9,10];
  skills: any;

  constructor(private skillService: SkillService) {

    let res: string[] = []
    this.skillService.getSkills().subscribe((item) => res = item.map(t => t.name))
    this.skills = res.sort()
 
  }

  onSubmit() {
    const skill = { name: this.skillName, experience: this.experience, proficiency: this.proficiency };
    this.skills.push(skill)
    alert(`${this.skillName} skill with proficiency ${this.proficiency} added successfully!`);
    this.skillName = '';
    this.experience = 0;
    this.proficiency = 0;
  }
}

interface Skill {
  name: string;
  experience: number;
  proficiency: number;
}
