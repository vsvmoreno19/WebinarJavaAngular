import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.css']
})
export class UserTestComponent implements OnInit {
  showFiller = false;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  data: any[] = [];
  displayedColumns: string[] = ['name', 'description', 'edit', 'delete'];
  group: any;
  showAdd=true;
  showEdit=false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    this.getDatas();
};

  private getDatas() {
    this.userService.getAllData()
      .subscribe(data => {
        console.log(data);
        let dats: any[] = [];
        let dats2;

        data.forEach((element: { name: any; description: any; }) => {
          dats2 = { name: element.name, description: element.description };
          dats.push(dats2);
        });
        this.data = dats;
        this.dataSource = new MatTableDataSource(this.data);
        this.group = new FormGroup({
          name: new FormControl(''),
          description: new FormControl('')
        });
        console.log(this.dataSource);

      });
  }

  addData(){
    console.log("start");
    this.showFiller = true;
    this.group.get('name').enable()
  }
 
  save(){
      let body = {
        id: this.group.get('name').value,
        name: this.group.get('name').value,
        description: this.group.get('description').value
    }
  this.userService.saveData(body)
    .subscribe(response => {
      if (response.message = "works") {
       console.log("its okay")
       this.getDatas();
       this.showFiller = false;
      }
  });
  }
  edit(element: any){
    this.showFiller = true;
    this.group.get('name').setValue(element.name);
    this.group.get('description').setValue(element.description);
    console.log(element);
    this.showEdit = true;
    this.showAdd = false;
    this.group.get('name').disable()
  }
  up(){
    this.showEdit = true;
    this.showAdd = false;
    let value = {
      "id":  this.group.get('name').value,
      "name": this.group.get('name').value,
      "description": this.group.get('description').value
  }
this.userService.updateData(value,this.group.get('name').value) .subscribe(response => {
    console.log("its okay")
    this.getDatas();
    this.showFiller = false;
});
  }

  delete(element:any){

this.userService.deleteData(element.name).subscribe(response => {
    this.getDatas();
});
  }
}
