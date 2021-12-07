import { Component } from '@angular/core';
import * as Comlink from './../../../../node_modules/comlink/dist/umd/comlink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  const fetchWorker = new Worker(new URL('./fetch.worker', import.meta.url));
  const fetchWorkerWrapper = Comlink.wrap<any>(fetchWorker);
  

  function getApp() {

    worker.onmessage = ({ data }) => {
      console.log(`page got message: ${data}`);
    };

    worker.postMessage('hello');
  }

  async function getFetch() {

    const API = await new fetchWorkerWrapper.Fetch;

    API.setBaseUrl("https://jsonplaceholder.typicode.com/");
    API.setDefaultHeaders({ 'Content-Type': 'application/json' });
    API.setDefaultBody({ lang: 'en' });

    let page1 = API.get('posts/1');
    let page2 = API.get('posts/2');

    console.log(await page1);
    console.log(await page2);
    getApp();
  }

  getFetch();
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}