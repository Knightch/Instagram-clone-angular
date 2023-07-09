
export class UserPostObject{
  avatar:string;
  userName: string;
  timeBefore: string;
  media: string;
  numberOfLikes: string;
  lastestComment: string;
  latestCommentUserName: string;
  numberOfComments: string;
  constructor(avt:string, usrName:string, timeBefore: string, media: string, numberOfLikes: string, latestComment: string,latestCommentUserName:string, numberOfComments:string  ){
    this.avatar = avt;
    this.userName = usrName;
    this.timeBefore = timeBefore;
    this.media = media;
    this.numberOfLikes = numberOfLikes;
    this.lastestComment = latestComment;
    this.latestCommentUserName = latestCommentUserName;
    this.numberOfComments = numberOfComments

  }
}
