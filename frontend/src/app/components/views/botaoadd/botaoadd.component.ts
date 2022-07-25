import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormCreateComponent } from '../form-create/form-create.component';

@Component({
  selector: 'app-botaoadd',
  templateUrl: './botaoadd.component.html',
  styleUrls: ['./botaoadd.component.css']
})
export class BotaoaddComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(FormCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}