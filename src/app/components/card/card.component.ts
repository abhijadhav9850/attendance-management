import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WebcamImage, WebcamInitError, WebcamModule } from 'ngx-webcam';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, WebcamModule],
  templateUrl: './card.component.html',
  providers: [DatePipe]
})
export class CardComponent {
  currentTime: any = new Date();
  events: any = [
    { img: "../../../assets/birthday-cake-birthday.svg", name: "Birthday" },
    { img: "../../../assets/employee-icon-6.jpg", name: "New Hires" },
    { img: "../../../assets/favorite-icon-png-8.jpg", name: "Favorites" },
    { img: "../../../assets/quicklinks.jpg", name: "Quick Links" },
    { img: "../../../assets/Announcements.png", name: "Announcements" },
    { img: "../../../assets/Upcoming Holidays.png", name: "Upcoming Holidays" },
  ]

  leave: any = [
    { leave: "Casual Leave", img: '../../../assets/casual.png', day1: 1, day2: 2 },
    { leave: "Leave Without Pay", img: '../../../assets/without.png', day1: 1, day2: 2 },
    { leave: "Sabbatical Leave", img: '../../../assets/Sabbatical.png', day1: 1, day2: 2 },
    { leave: "Sick Leave", img: '../../../assets/sick.png', day1: 1, day2: 2 },
  ]

  showLocationPopup: boolean = false;
  showCameraPopup: boolean = false;
  currentLocation: string = '';
  cameraOff: boolean = true;
  capturedImage: string | undefined;
  latitude: number = 0;
  longitude: number = 0;
  errorMessage: any = "";

  trigger: Subject<void> = new Subject<void>();
  triggerObservable = this.trigger.asObservable();

  constructor() { }

  showLocation(action: string) {
    // Simulate getting current location (replace with actual location retrieval logic)
    this.get_location();
    this.showLocationPopup = true;
  }

  openCamera() {
    this.showLocationPopup = false;
    this.showCameraPopup = true;
    this.cameraOff = false;
  }

  cancelCamera() {
    this.showCameraPopup = false;
    this.cameraOff = true;
  }

  captureImage() {
    // Logic to save captured image to local storage
    console.log('Image captured');
    // Simulate saving image to local storage (replace with actual logic)
    this.capturedImage = 'data:image/png;base64,someBase64ImageData';
    // Close camera popup
    this.showCameraPopup = false;
    this.cameraOff = true;
    // Save captured image to local storage
    localStorage.setItem('captured_image', this.capturedImage || '');
  }

  handleImageCapture(image: WebcamImage) {
    // Logic to handle captured image
    console.log('Image captured:', image);
  }

  handleInitError(error: WebcamInitError) {
    // Handle webcam initialization error
    console.error('Webcam initialization error:', error);
  }

  confirmLocationAndStore() {
    // Logic to confirm location and store it in localStorage
    console.log('Location confirmed:', this.latitude, this.longitude);
    localStorage.setItem('latitude', this.latitude.toString());
    localStorage.setItem('longitude', this.longitude.toString());
    this.openCamera(); // Open camera after location confirmation
  }

  get_location() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log(this.longitude);
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = "Error getting location.";
        }
      );
    } else {
      this.errorMessage = "Geolocation is not supported by this browser.";
    }
  }

}
