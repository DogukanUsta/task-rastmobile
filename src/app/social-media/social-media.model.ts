export class SocialMedia {
    public socialMediaLink: string;
    public socialMediaName: string;
    public description: string;

    constructor(socialMediaLink: string, socialMediaName: string, description: string) {
        this.socialMediaLink = socialMediaLink;
        this.socialMediaName = socialMediaName;
        this.description = description;
    }
}