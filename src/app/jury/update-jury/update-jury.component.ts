import { CreateJuryComponent } from './../create-jury/create-jury.component';
import { Component, OnInit } from '@angular/core';
import { Jury } from 'src/app/model/jury';
import { ActivatedRoute, Router } from '@angular/router';
import { JuryService } from 'src/app/service/jury/jury.service';

@Component({
  selector: 'app-update-jury',
  templateUrl: './update-jury.component.html',
  styleUrls: ['./update-jury.component.css']
})
export class UpdateJuryComponent implements OnInit {

  id_jury: number;
  jury: Jury;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private juryService: JuryService) { }

  ngOnInit() {
    this.jury = new Jury();

    this.id_jury = this.route.snapshot.params['id_jury'];

    this.juryService.getJury(this.id_jury)
      .subscribe(data => {
        console.log(data)
        this.jury = data;
      }, error => console.log(error));
  }

  updateJury() {
    this.juryService.updateJury(this.id_jury, this.jury)
      .subscribe(data => console.log(data), error => console.log(error));
    this.submitted = false;
    this.jury = new Jury();
    this.gotoList();
  }

  onSubmit() {
    this.updateJury();
  }

  gotoList() {
    this.router.navigate(['/jurys']);
  }
}
