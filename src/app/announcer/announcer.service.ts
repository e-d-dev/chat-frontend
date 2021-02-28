import { ApplicationRef, ChangeDetectorRef, Injectable } from '@angular/core';
import { ANNOUNCEMENT_TYPE } from './announcement-type.enum';
import { Announcement } from './announcement.class';

@Injectable()
export class AnnouncerService {

    activeAnnouncements: Announcement[];

    constructor(
        private ref: ApplicationRef
    ) {
        this.activeAnnouncements = [];
    }

    public announce(
        type: ANNOUNCEMENT_TYPE,
        header: string,
        text: string
    ): void {
        const temp: Announcement = new Announcement(
            type,
            header,
            text
        );
        console.log(this.activeAnnouncements, '1. active ann')
        this.activeAnnouncements.push(temp);
        console.log(this.activeAnnouncements, '2. active ann')

        setTimeout(() => {
            this.dismissAnnouncement(temp);
            this.ref.
            console.log(this.activeAnnouncements, '3. active ann')
        }, 3000);
    }


    public dismissAnnouncement(
        announcement: Announcement
    ): void {
        const index: number = this.activeAnnouncements.findIndex((elem) => {
            return announcement.announcementId === elem.announcementId;
        });
        this.activeAnnouncements.splice(index, 1);
    }
}
