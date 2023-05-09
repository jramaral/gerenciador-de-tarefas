import { Component, OnInit } from '@angular/core';
//import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Gerenciador de Tarefas';
}
// export class AppComponent implements OnInit {
//   //title = 'Gerenciador de Tarefas';
//   name = "Angular";

//   ngOnInit(): void {
//     console.log('this is init method')
//   }

//   simpleAlert(){
//     Swal.fire('Hello world!');
//   }

//   alertWithSuccess(){
//     Swal.fire('Thank you...', 'You submiteed succesfully!','success')
//   }

//   confirmBox(){
//     Swal.fire({
//       title: 'Are you sure want to remove?',
//       text: 'You will not be able to recover this file!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, keep it'
//     }).then((result)=>{
//       if(result.value){
//         Swal.fire('Deleted!','Your imaginary file has been deleted','success')
//       } else if (result.dismiss===Swal.DismissReason.Cancel){
//         Swal.fire(
//           'Cancelled',
//           'Your imaginary file is safe :)',
//           'error'
//         )
//       }
//     })
//   }



// }
