import { JuryDetailsComponent } from './../jury-details/jury-details.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JuryService } from 'src/app/service/jury/jury.service';
import { Jury } from 'src/app/model/jury';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jury-list',
  templateUrl: './jury-list.component.html',
  styleUrls: ['./jury-list.component.css']
})
export class JuryListComponent implements OnInit {

  jurys: Observable<Jury[]>;

  constructor(private juryService: JuryService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.jurys = this.juryService.getJurysList();
  }

  deleteJury(id_jury: number) {
    this.juryService.deleteJury(id_jury)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  juryDetails(id_jury: number){
    this.router.navigate(['details', id_jury]);
  }

  updateJury(id_jury: number) {
    this.router.navigate(['update', id_jury]);
  }
}
