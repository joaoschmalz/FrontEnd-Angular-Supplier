import { SupplierModel } from '../../model/supplier.model';
import { SupplierService } from '../../services/supplier-service';
import { Component, OnInit } from '@angular/core';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private SupplierService: SupplierService
    ) { }

  columns = ["Name", "Email", "Comment", "CNPJ", "icons"];
  index = ["name", "email", "commet", "cnpj"];

  supplierModel: SupplierModel[] = [];

  ngOnInit() {
    this.SupplierService.getSuppliers().subscribe
    (
      (response) =>
      {
      this.supplierModel = response;
      },
      (error) => console.log(error)
    )
  }

  addSupplier(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteSupplier(cnpj: any): void{
    this.SupplierService.deleteSupplier(cnpj).subscribe(
      (result) => {
        window.location.reload();
      });
  }

  editSupplier(id: number): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      minWidth: '400px',
      data: { edit: true, id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

} 