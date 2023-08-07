import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { EIconAlert } from '../interfaces/alertIcon.enum';


@Injectable({providedIn: 'root'})
export class UiService {

  onShowAlert( text: string, icon?: EIconAlert, title?: string  ) {

    Swal.fire({
      title,
      icon,
      text,
      // showCancelButton: true,
      confirmButtonColor: '#364574',
      // cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'OK'
    });
  }


}
