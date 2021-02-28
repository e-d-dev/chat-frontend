export class Email {
    sender: string;
    receiver: string;
    subject: string;
    message: string;

    constructor(
        sender: string, receiver: string, subject: string, message: string
    ) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.message = message;
    }
}
