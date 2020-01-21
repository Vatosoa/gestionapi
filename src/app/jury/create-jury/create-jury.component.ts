import { JuryService } from 'src/app/service/jury/jury.service';
import { Jury } from 'src/app/model/jury';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-jury',
  templateUrl: './create-jury.component.html',
  styleUrls: ['./create-jury.component.css']
})
export class CreateJuryComponent implements OnInit {

  jury: Jury = new Jury();
  submitted = false;

  constructor(private juryService: JuryService,
    private router: Router) { }

  ngOnInit() {
  }

  newJury(): void {
    this.submitted = false;
    this.jury = new Jury();
  }

  save() {
    this.juryService.createJury(this.jury)
      .subscribe(data => console.log(data), error => console.log(error));
    this.jury = new Jury();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/jurys']);
  }
}
