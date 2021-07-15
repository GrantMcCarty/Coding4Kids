import { Injectable } from "@angular/core";

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private script: any = {}; //if more scripts are needed, change script field to array

  constructor() {
    this.script = {loaded:false, src: 'https://www.jdoodle.com/assets/jdoodle-pym.min.js'}
  }

  load(script) {
    var promises: any[] = [];
    promises.push(this.loadScript(script))
    return Promise.all(promises);
  }

  loadScript(name: string) { 
    return new Promise((resolve, reject) => {
      //resolve if already loaded
      if (this.script.loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
      else {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.script.src;
        if (script.readyState) {  //IE
          script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              this.script.loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  //Others
          script.onload = () => {
            this.script.loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

}