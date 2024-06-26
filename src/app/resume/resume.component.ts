import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Andrea García - Portfolio');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/CV_AndreaGarcía_24.pdf');
    link.setAttribute('download', 'CV_AndreaGarcía_24.pdf');
    link.click();
    link.remove();

  }
}
