import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    public endDate: any;
    public date: any;
    constructor() {
        this.endDate = new Date(2019, 8, 1, 0, 0, 0);
        this.date = {
            daysLeft: "00",
            hoursLeft: "00",
            minutesLeft: "00",
            secondsLeft: "00"
        }
    }

    redirect(url){
        window.location.href = url;
    }

    ngOnInit() {
        this.getDate();
        this.timer();
    }

    getDate() {
        let currentDate: any = new Date(),
            delta = Math.abs(this.endDate - currentDate) / 1000,
            isFinished = currentDate > this.endDate;

        let daysLeft: any = isFinished ? 0 : Math.floor(delta / 86400);
        delta -= daysLeft * 86400;
        this.date.daysLeft = daysLeft > 9 ? daysLeft : "0" + daysLeft;


        let hoursLeft: any = isFinished ? 0 : Math.floor(delta / 3600) % 24;
        delta -= hoursLeft * 3600;
        this.date.hoursLeft = hoursLeft > 9 ? hoursLeft : "0" + hoursLeft;

        let minutesLeft: any = isFinished ? 0 : Math.floor(delta / 60) % 60;
        delta -= minutesLeft * 60;
        this.date.minutesLeft = minutesLeft > 9 ? minutesLeft : "0" + minutesLeft;

        let secondsLeft: any = isFinished ? 0 : (delta % 60).toFixed(0);
        this.date.secondsLeft = secondsLeft > 9 ? secondsLeft : "0" + secondsLeft;
    }

    timer() {
        setInterval(() => this.getDate(), 1000);
    }
}
