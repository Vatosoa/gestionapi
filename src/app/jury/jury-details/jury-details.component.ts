import { Jury } from 'src/app/model/jury';
import { Component, OnInit, Input } from '@angular/core';
import { JuryService } from 'src/app/service/jury/jury.service';
import { JuryListComponent } from './../jury-list/jury-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jury-details',
  templateUrl: './jury-details.component.html',
  styleUrls: ['./jury-details.component.css']
})
export class JuryDetailsComponent implements OnInit {

  id_jury: number;
  jury: Jury;

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

  list(){
    this.router.navigate(['jurys']);
  }
}
