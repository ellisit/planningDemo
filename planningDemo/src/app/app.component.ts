import { Component } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import { evenParis, eventMarseille, eventToulouse } from './datasource';
import { log } from 'util';


@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //date de debut 
  public selectedDate: Date = new Date(2018, 1, 15);
  public subjectValue = '';
  public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
  public showQuickInfo: Boolean = false;
  public eventSettings: EventSettingsModel = {
      dataSource: evenParis
  };
  public salonSelected = '';

  
  
  public salons = [{id: 1, name: "coupe1", rdv: evenParis},{id: 4, name:"coupe2", rdc: eventToulouse}, {id: 2, name:"coupe3", rdc: eventMarseille}]


  title = 'planningDemo';
  onPopupOpen(args: PopupOpenEventArgs): void {
    
   

    if (args.type === 'Editor') {
      //recupere l'element html dropdown list et set la liste des items avec le tableau ci dessous
        let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
        if (!statusElement.classList.contains('e-dropdownlist')) {
            let dropDownListObject: DropDownList = new DropDownList({
                placeholder: 'Choose status', value: statusElement.value,
                dataSource: ['Coupe', 'Brushing', 'Coloration','Balayage','lissage','extention']
            });
            dropDownListObject.appendTo(statusElement);
            statusElement.setAttribute('name', 'EventType');
        }
        let name: HTMLInputElement = args.element.querySelector('#Subject') as HTMLInputElement;
        let description: HTMLInputElement = args.element.querySelector('#Description') as HTMLInputElement;

         //recupere la valeur du start time 
        let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
        if (!startElement.classList.contains('e-datetimepicker')) {
            new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
        }
        //recupere la valeur du end time 
        let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
        if (!endElement.classList.contains('e-datetimepicker')) {
            new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
        }

        let test: HTMLInputElement = args.element.querySelector('.e-footer-content') as HTMLInputElement;
        let test1: HTMLButtonElement = test.querySelector('.e-event-save') as HTMLButtonElement;
        let sallon = this.salonSelected;

        test1.onclick = function(){ 
          console.log(sallon);
          console.log(description.value);
          console.log(name.value);
          console.log(startElement.value);
          console.log(endElement.value);
        }
        
        
        
    }

  }
 // cette fonction permet de laod le teableau de rendez vous correspondant au salon choisi 
 // event retourne l'id du salon choisi
  onChange(event){
    console.log(event);
    if ( event == '1'){
      this.eventSettings = {
        dataSource: evenParis
      }
      this.salonSelected = 'Paris'
    }
    if ( event == '2'){
      this.eventSettings = {
        dataSource: eventToulouse
      }
      this.salonSelected = 'Toulouse'
    }
    if ( event == '4'){
      this.eventSettings = {
        dataSource: eventMarseille
      }
      this.salonSelected = 'Marseille'
    }    
  }

  onAddClick(event){
    console.log(event);
    
  }


}
