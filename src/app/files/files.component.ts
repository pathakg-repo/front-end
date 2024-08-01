import { Component } from '@angular/core';
import { UploadFileComponent } from '../uploadfile/upload-file.component';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [UploadFileComponent],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {

}
