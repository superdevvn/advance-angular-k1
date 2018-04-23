import { Injectable } from "@angular/core";
import swal from "sweetalert2";
declare var $: any;

@Injectable()
export class NotificationService {
    constructor() { }
    success(massage: string) {
        swal(massage, "", "success");
        $("#notificationSuccess").slideToggle(`slow`);
        setTimeout(() => {
            $("#notificationSuccess").fadeOut(1000);
            setTimeout(() => {
                $("#notificationSuccess").remove();
            }, 1000);
        }, 5000);
    }
    error(massage: string) {    
        swal("Good job!", massage, "error");
        $("#notificationError").slideToggle(`slow`);
        setTimeout(() => {
            $("#notificationError").fadeOut(1000);
            setTimeout(() => {
                $("#notificationError").remove();
            }, 1000);
        }, 5000);
    }
    confirm(massage: string, title?: string) {
        return new Promise(resolve => {
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'yes',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.value) {
                    resolve();
                }
            })
        });
        $("#notificationError").slideToggle(`slow`);

    }
}