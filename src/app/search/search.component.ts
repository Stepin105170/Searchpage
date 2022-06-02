import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from 'src/Service/userservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
users:any
searchtext:any
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.userService.getusers().subscribe(data =>{
      this.users=data
    })
  }


}
