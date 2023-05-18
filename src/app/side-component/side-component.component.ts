import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-component',
  templateUrl: './side-component.component.html',
  styleUrls: ['./side-component.component.scss']
})
export class SideComponentComponent implements OnInit {

  
  display=false;
  activeIndex = -1
  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {title:'Spot Review Test 1',titleDesc:"Oceanic Airlines [Demo Broadcasting]",
      startDate:'Aug 10,2022',endDate:'Aug 10,2022',ISCI:'Aug 10,2022',},
      {title:'Spot Review Test 1',titleDesc:"Oceanic Airlines [Demo Broadcasting]",
      startDate:'Aug 10,2022',endDate:'Aug 10,2022',ISCI:'Aug 10,2022',},
      {title:'Spot Review Test 1',titleDesc:"Oceanic Airlines [Demo Broadcasting]",
      startDate:'Aug 10,2022',endDate:'Aug 10,2022',ISCI:'Aug 10,2022',},
      {title:'Spot Review Test 1',titleDesc:"Oceanic Airlines [Demo Broadcasting]",
      startDate:'Aug 10,2022',endDate:'Aug 10,2022',ISCI:'Aug 10,2022',},
      {title:'Spot Review Test 1',titleDesc:"Oceanic Airlines [Demo Broadcasting]",
      startDate:'Aug 10,2022',endDate:'Aug 10,2022',ISCI:'Aug 10,2022',},
      {title:'Spot Review Test 1',titleDesc:"Oceanic Airlines [Demo Broadcasting]",
      startDate:'Aug 10,2022',endDate:'Aug 10,2022',ISCI:'Aug 10,2022',}
  ]

  showDisplay(){
    this.display = !this.display;
  }

}
