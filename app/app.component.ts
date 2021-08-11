import {Component} from '@angular/core';
import {VERSION} from '@angular/material';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  agent = { 
    "_id": "5bf7e1be80c05307d06423c2", 
    "agentId": "awais", 
    "attributes": [ 
      { "name": "Marketing", "type": "Boolean", "value": "true", }, 
      { "name": "English", "type": "Proficiency", "value": "7", } 
      ], 
      "__v": 0 
      };
  
  setValue(i , e){
    if(e.checked){
      this.agent.attributes[i].value = 'true'
    }else{
      this.agent.attributes[i].value = 'false'
    }
    console.log(this.agent.attributes[i].value)
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */