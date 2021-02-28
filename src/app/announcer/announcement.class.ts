import { ANNOUNCEMENT_TYPE } from './announcement-type.enum';
export class Announcement{

    static lastId = 0;

    announcementId: number;
    heading: string;
    text: string;
    type: ANNOUNCEMENT_TYPE;

    constructor(
        type: ANNOUNCEMENT_TYPE,
        heading: string,
        text: string
    ) {
        Announcement.lastId++;
        this.announcementId = Announcement.lastId;
        this.type = type;
        this.text = text;
        this.heading = heading;
    }
}
