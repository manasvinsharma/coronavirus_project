import { Router } from '@angular/router';
import { Component } from '@angular/core';
 

@Component({
  selector: 'app-test-yourself',
   templateUrl: './test-yourself.component.html',
     styleUrls: ['./test-yourself.component.css']
})
export class  TestYourselfComponent {
  title = 'angular-checkbox-list-demo';
  traveledchk;
  diseasenoa;
  symptomnoa;
  applychk;
  selectedItemsList = [];
  checkboxesDataList = [
    {
      id: 'A001',
      label: 'Cough',
      isChecked: false
    },
    {
      id: 'A002',
      label: 'Fever',
      isChecked: false
    },
    {
      id: 'A003',
      label: ' Difficulty in breathing',
      isChecked: false
    },
    {
      id: 'A004',
      label: 'Loss of senses of smell and Taste',
      isChecked: false
    }
    
  ];
  selectedItemsList11 = []; 
  checkboxesDataList11 = [
    {
      id: 'A005',
      label: 'None of the Above',
      isChecked: false
    } 
    
  ]
  selectedItemsList2 = [];
  checkboxesDataList2 = [
    {
      id: 'B001',
      label: 'Diabetes',
      isChecked: false
    },
    {
      id: 'B002',
      label: ' Hypertension',
      isChecked: false
    },
    {
      id: 'B003',
      label: 'Lung disease',
      isChecked: false
    },
    {
      id: 'B004',
      label: 'Heart disease',
      isChecked: false
    },
    {
      id: 'B005',
      label: 'Kidney Disorder',
      isChecked: false
    }
  ];
  selectedItemsList21 = [];
  checkboxesDataList21=[
    
    {
      id: 'B006',
      label: 'None of the above',
      isChecked: false
    }
    
  ]

  selectedItemsList30 = [];
  checkboxesDataList30 = [
    {
      id: 'C002',
      label: ' No',
      isChecked: false,
      
    } 
  ];
  selectedItemsList31 = [];
  checkboxesDataList31 = [
    {
      id: 'C001',
      label: 'Yes',
      isChecked: false
    } 
  ];
   
  selectedItemsList40 = []; 
  checkboxesDataList40=[
    {
        id: 'D001',
        label: 'I have recently interacted or lived with someone who has tested positive for COVID-19',
        isChecked: false
    },
    {
      id: 'D002',
      label: 'I am a healthcare worker and I examined a COVID-19 confirmed case without protective gear',
      isChecked: false
    } 
  ];
  selectedItemsList41 = [];
  checkboxesDataList41=[
    {id: 'D003',
    label: 'None of the above',
    isChecked: false}
  ]
  selectedItemsList50 = []; 
  checkboxesDataList50=[
    {
        id: 'E001',
        label: 'Less than 5 days ago',
        isChecked: false
    },
    {
      id: 'E002',
      label: 'Greater than 5 days ago',
      isChecked: false
    },
    {
      id: 'E003',
      label: 'Greater than 14 days ago ',
      isChecked: false
    }
  ];

  ngOnInit(): void {
    this.fetchSelectedItems()   
  }

  changeSelection() {
    this.fetchSelectedItems()
     
  }
  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked 
    });
    this.selectedItemsList11 = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked 
    });
    this.selectedItemsList2 = this.checkboxesDataList2.filter((value, index) => {
      return value.isChecked
    });
    this.selectedItemsList21 = this.checkboxesDataList21.filter((value, index) => {
      return value.isChecked
    });
    this.selectedItemsList30 = this.checkboxesDataList30.filter((value, index) => {
      return value.isChecked
    });
   
    this.selectedItemsList31 = this.checkboxesDataList31.filter((value, index) => {
      return value.isChecked
    });
    this.selectedItemsList40 = this.checkboxesDataList40.filter((value, index) => {
      return value.isChecked
    });
    this.selectedItemsList41 = this.checkboxesDataList41.filter((value, index) => {
      return value.isChecked
    });
    
  }
   
  test(){
    var report=false;
    if(this.selectedItemsList.length>=1 || this.selectedItemsList2.length>=1 || this.selectedItemsList40.length>=1)
      {
        alert("Thank You for taking this assessment.")
          alert("You are either UNWELL or at RISK.");
          alert("We suggest you to stay at home in self isolation and concern with Doctor .")
          var report=true;  
      } 
      else{
        alert("Thank You for taking this assessment.")
        alert("You are SAFE."); 
        alert("Retake the Self-Assessment Test if you develop symptoms or come in contact with a COVID-19 confirmed patient.") 
      }
    alert("Now navigating to corona tracker........if u re positive then only your location will be saved in our db otherwise it will be temporarily saved");  
   // this.router.navigate(['/coronaTracker']);
  }

 
}
 