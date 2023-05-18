import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.scss']
})
export class RightComponentComponent implements OnInit {

  errorMsg = '';
  showComments: any[] = [];
  successMsg = '';
  
  constructor() { }

  ngOnInit(): void {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.showComments = JSON.parse(storedComments);
    }
  }

  postComment(getValue: HTMLTextAreaElement) {
    const commentValue = getValue.value.trim();
    
    // Check if the comment section is empty

    if (!commentValue) {
      this.errorMsg = 'Please enter a comment.';
      getValue.classList.add('error');
      getValue.focus();
      setTimeout(() => {
        this.errorMsg = '';
        getValue.classList.remove('error');
      }, 3000);
      return;
    }

      // Check if the comment text already exists
  const existingComment = this.showComments.find(comment => comment.value === commentValue);
  if (existingComment) {
    getValue.classList.add('error');
    this.errorMsg = 'A comment with the same text already exists.';
    setTimeout(() => {
      getValue.classList.remove('error');
      this.errorMsg = '';
    }, 10000);
    return;
  }

    // Check if maximum comment limit has been reached
    if (this.showComments.length >= 10) {
      getValue.classList.add('error');
      this.errorMsg = 'Maximum comment limit (10) has been reached.';
      setTimeout(() => {
        getValue.classList.remove('error');
        this.errorMsg = '';
      }, 10000);
      return;
    }
    

    const comment = {
      value: commentValue,
      date: new Date().toISOString(),
    };
    this.showComments.push(comment);
    localStorage.setItem('comments', JSON.stringify(this.showComments));
    getValue.value = '';
    this.successMsg = 'Comment posted successfully!';
    setTimeout(() => {
      this.successMsg = '';
    }, 3000);
  }

  remove(index: any) {
    console.log(index);
    this.showComments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(this.showComments));
  }

  searching(event: any) {
    const searchValue = event.target.value.trim().toLowerCase();
      if (!searchValue) {
      this.showComments = JSON.parse(localStorage.getItem('comments') || '[]');
      return;
    }
    this.showComments = JSON.parse(localStorage.getItem('comments') || '[]')
      .filter((comment: { value: string }) => {
        return comment.value.toLowerCase().includes(searchValue);
      });
  }
  
}
