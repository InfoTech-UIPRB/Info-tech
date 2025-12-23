export class Person{
constructor(name, role, img, linkedin, gitHub, mail, resume) {
    this.nameInternal = name;
    this.roleInternal = role;
    this.imgInternal = img;
    this.linkedinInternal = linkedin;
    this.gitHubInternal = gitHub;
    this.mailInternal = mail;
    this.resumeInternal = resume;
  }

  get getName() {
    return this.nameInternal;
  }

  set setName(name) {
    this.nameInternal = name;
  }

  get getRole() {
    return this.roleInternal;
  }

  set setRole(role) {
    this.roleInternal = role;
  }

  get getImg() {
    return this.imgInternal;
  }

  set setImg(img) {
    this.imgInternal = img;
  }

  get getLinkedin() {
    return this.linkedinInternal;
  }

  set setLinkedin(linkedin) {
    this.linkedinInternal = linkedin;
  }

  get getGitHub() {
    return this.gitHubInternal;
  }

  set setGitHub(gitHub) {
    this.gitHubInternal = gitHub;
  }

  get getMail() {
    return this.mailInternal;
  }

  set setMail(mail) {
    this.mailInternal = mail;
  }

  get getResume() {
    return this.resumeInternal;
  }

  set setResume(resume) {
    this.resumeInternal = resume;
  }

}