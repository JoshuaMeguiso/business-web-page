import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUs {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  loading = false;
  success = false;
  error = false;

  constructor(private cdr: ChangeDetectorRef) {}

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;

    // Simulate API call using RxJS timer (Angular friendly)
    timer(1500).subscribe(() => {
      this.loading = false;
      this.success = true;
      // this.error = true;

      // Reset form
      this.formData = {
        name: '',
        email: '',
        message: '',
      };

      // Auto hide success message
      timer(5000).subscribe(() => {
        this.success = false;
        this.error = false;
        this.cdr.detectChanges();
      });

      this.cdr.detectChanges();
    });
  }
}
