import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialMedia } from './social-media.model';
import { SocialMediaService } from './social-media.service';
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  constructor(
    public modalService: NgbModal,
    private socialMediaService: SocialMediaService
  ) {
  }

  
    ngOnInit(): void {
    // get data from web service
    //this.socialMediaService.getSocialMediaData(); random created web service for example
  }

  @ViewChild('content') content!: ElementRef;

  newRecordForm = new FormGroup({
    socialMediaLink: new FormControl(''),
    socialMediaName: new FormControl(''),
    description: new FormControl('')
  });

  //data examples for table
  tableData: any = [
    { socialMediaLink: 'instagram.com/mobilerast', socialMediaName: 'instagram', description: 'We will help you to finish your development project successfully.' },
    { socialMediaLink: 'youtube.com/mobilerast', socialMediaName: 'youtube', description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.' },
    { socialMediaLink: 'behance.com/mobilerast', socialMediaName: 'behance', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' },
    { socialMediaLink: 'twitter.com/mobilerast', socialMediaName: 'twitter', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' },
  ];

  //for opening the new record templete
  open() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' })
  }

  //save new record
  save() {
    let data: SocialMedia = {
      socialMediaLink: this.newRecordForm.value.socialMediaLink!,
      socialMediaName: this.newRecordForm.value.socialMediaName!,
      description: this.newRecordForm.value.description!
    }
    this.tableData.push(data)

    this.newRecordForm.reset()
    this.modalService.dismissAll()

    // post data to web service / random web service created for example
    // this.socialMediaService.addSocialMediaData(data).subscribe((result) => {
    //   console.log(result)
    // });
  }
}

