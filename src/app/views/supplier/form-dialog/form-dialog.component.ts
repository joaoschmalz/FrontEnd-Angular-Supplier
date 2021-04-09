import { SupplierService } from '../../../services/supplier-service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {

  public supplierForm!: FormGroup;
  private edit: boolean = false;
  private supplierId!: number;

  constructor(  
    private fb: FormBuilder,
    private rest: SupplierService,
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {edit: boolean, id: number}
    ) { 

      if (data) {
        this.edit = data.edit;
        this.supplierId = data.id;
      }
    }

  ngOnInit(): void {

    this.supplierForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      comment: [''],
      cnpj: [{value: '', disabled: this.edit}, Validators.required]
    });
  }

  createSupplier(){
    this.rest.postSuppliers(this.supplierForm.value).subscribe(
    (result) => {
      this.dialogRef.close();
      this.supplierForm.reset();
      window.location.reload();
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.supplierForm.reset();
  }

}
