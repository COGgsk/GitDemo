import { LightningElement, api, track } from 'lwc';

export default class MapMaker extends LightningElement {
    @api Latitude;  
    @api Longitude;
    @track InputValues = {
        latitude:  this.Lat,
        longitude: this.Long
      };    
          
    get Lat() {  
        return this.Latitude;  
      }  
    set Lat(value) {  
        this.Latitude = value;  
      } 
    get Long() {  
        return this.Longitude;  
      }  
    set Long(value) {  
        this.Longitude = value;  
      }  
    showPosition(position) {    
      this.Lat = position.coords.latitude; 
      this.Long = position.coords.longitude; 

    }
    renderedCallback() {
        this.dataJson = JSON.stringify(this.InputValues);
      }
}