import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Blog {
  title: string;
  articleLink: string;
  imageURL: string;
  description: string;
  category: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
  searchTerm = '';
  
 blogList: Blog[] = [
    {
      title: 'Promise methods',
      articleLink: 'https://medium.com/@bittukumar-web/promise-and-its-methods-all-race-any-allsettled-0dc677b5aee1',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*9-HRbIEKQJtd9jQm1O8Flw.png',
      description: "",
      category: 'javascript'
    },
    {
      title: 'OOPS concept',
      articleLink: 'https://medium.com/stackademic/object-oriented-programming-in-javascript-7e4e9b8d8b81',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*1daRRKMwYBSUrbNl6-382A.png',
      description: "",
      category: 'javascript'
    },
    {
      title: 'Event delegation',
      articleLink: 'https://medium.com/@bittukumar-web/event-delegation-event-propagation-event-bubbling-and-event-capturing-324e4ee7240c',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*8RPXYfJKMWXBjaG1VFIDRw.png',
      description: "",
      category: 'javascript'
    },
    {
      title: 'This and arrow function',
      articleLink: 'https://medium.com/@bittukumar-web/this-and-arrow-function-in-javascript-fd5f26f2c2f9',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*xoGKkCXh0ngU23dI-urhIw.png',
      description: "",
      category: 'javascript'
    },
    {
      title: 'Hoisting in JavaScript',
      articleLink: 'https://medium.com/stackademic/lets-learn-hoisting-in-javascript-b2ba18de16dc',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*sWsG-icStriNHzZNMMbbwA.png',
      description: "",
      category: 'javascript'
    },
    {
      title: 'Callback, Promise, Async-await',
      articleLink: 'https://medium.com/@bittukumar-web/callback-promise-and-async-await-example-in-javascript-7ef68d94486',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*lpe4jpuhYr2dthrmg2wcnQ.png',
      description: "",
      category: 'javascript'
    },
    {
      title: 'Lets learn signal in Angular',
      articleLink: 'https://bittukumar-web.medium.com/lets-learn-signal-in-angular-e4dda2aea243',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*0znb8b0A1mWNp8l9Aw992A.png',
      description: "",
      category: 'angular'
    },
    {
      title: 'Router guards in angular',
      articleLink: 'https://bittukumar-web.medium.com/router-guards-in-angular-canactivate-canactivatechild-candeactivate-canload-resolve-8cc2519e70c',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*Qn-0NA52Yfy5rvBX1YpYfA.png',
      description: "",
      category: 'angular'
    },
    {
      title: 'RxJS Operator in angular',
      articleLink: 'https://blog.stackademic.com/rxjs-operators-in-angular-af796f8e7921',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*j5mjkfJk_X3u2lGBWd1wGQ.png',
      description: "",
      category: 'angular'
    },
    {
      title: 'Custom directives in angular',
      articleLink: 'https://blog.stackademic.com/explore-custom-directives-in-angular-9ecd84ac0b9c',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*e5OCKZtIv_dqxtoytjqYgw.png',
      description: "",
      category: 'angular'
    },
    {
      title: 'HTTP get request example with angular',
      articleLink: 'https://bittukumar-web.medium.com/http-get-request-example-with-angular-a69f220358b7',
      imageURL: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*OOBWtgdSf9P9watpY3-RZg.jpeg',
      description: "",
      category: 'angular'
    }
  
  
  ];
}
