export interface ProfileType {
    _id: string;
    username: string;
    greeting: string;
    shortIntro: string;
    introYourSelf: string;
    experinces: Experience[];
    education: object[];
    languages: object[];
    skills: Skills[];
    createdAt: string;
    updatedAt: string;
  }
  

  export interface Skills{
    skill: string;
    progress: string;
  }

  export interface Experience {
    company: string;
    startDateExp: string;
    endDateExp: string;
    position: string;
    roldescription: string;
    urlCompany: string;
  }